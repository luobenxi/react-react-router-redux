/**
 * Created by start on 2018/12/14.
 */
import jsonp from 'jsonp';
import axios from 'axios';
import { SUCCESS_CODE } from '../redux/action-type';

// http request 拦截器
axios.timeout = 5000; // 指定请求超时的毫秒数(0 表示无超时时间)
axios.interceptors.request.use(
    config => {
        config.headers = {
            'token': 123
        };
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    res => {
        if (res.status === 200) {
            return Promise.resolve(res.data);
        } else {
            return Promise.reject(res.statusText || '网络错误');
        }
    },
    err => {
        if (err.response.status === 404 || err.response.status === 500) {
            // let errMsg = err.response.statusText
        }
        return Promise.reject(err.response);
    }
);

export default class Axios {

    static jsonp(options) {
        return new Promise((resolve, reject) => {
            jsonp(options.url, {
                param: 'callback'
            }, (err, res) => {
                if (res.status === 'success') {
                    resolve(res);
                } else {
                    reject(res.message);
                }
            });
        });
    }

    static ajax(options, isShowLoading = true) {
        let loading;
        if (isShowLoading) {
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        let baseURL = '';
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: options.type || 'get',
                baseURL: baseURL,
                params: options.data || ''
            }).then((res) => {
                if (isShowLoading) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                if (res.code === SUCCESS_CODE) {
                    // 表示请求成功
                    resolve(res);
                } else {
                    // 不成功
                    this.errorAlert(res.msg);
                    reject(res);
                }
            }).catch(err => {
                if (isShowLoading) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                this.errorAlert(err.statusText || '网络错误');
                reject(err.statusText || '网络错误');
            });
        });
    }
	
	static errorAlert(msg) {
        alert(msg || '操作失败');
    }

}