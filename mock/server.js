let express = require("express");
let app = express();
let router = express.Router();
let config = require('./config.js');

app.get('/', function (req, res) {
    res.send('mock api');
});

app.use("/api", router);

router.use("/user", require('./user'));
router.use("/article", require('./article'));

app.listen(config.port, () => {
    console.log(`mock server is running at port: http://localhost:${config.port}`);
});