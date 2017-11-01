var express = require('express');
var router = express.Router();
var mysql =require("mysql");
var con = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"zhao19940801",
    database:"aaa"
})

/* GET home page. */
router.post('/list', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  con.query("SELECT * FROM baobao WHERE name LIKE '%"+ req.body.a+"%' OR content LIKE '%"+ req.body.a+"%'",function (err,rows) {
      res.send(rows)
    })
});

module.exports = router;
