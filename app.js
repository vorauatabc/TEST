var express = require('express');
var app = express();
var fs = require("fs"); //อ่าไฟล์ user.json

app.get('/getUsers',function(req,res){
fs.readFile(__dirname + "/" + "user.json", 'utf8',function (err,data){
  console.log(data); //data ข้อมูลของ user.json
  res.end(data);
});
});

var server = app.listen(8081,function(){
  var host = server.address().address
  var port = server.address().port
  console.log("Application Run At http://%s:%s",host,port)
});
