const express = require('express');
const bodyparser = require('body-parser')
const app = express();
const http = require('http');
const httpServer = http.createServer(app);
const router = express.Router();

app.use(bodyparser.urlencoded({extended:false}));
router.get('/', function(req, res) {
  res.send('Hello, Welcome to Engineering Lab! Start editing to see some magic happen :)');
});

app.use(process.env.context || "/", router);
const port = process.env.port || 4000;
httpServer.listen(port);

module.exports = httpServer;
