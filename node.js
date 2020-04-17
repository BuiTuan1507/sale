var express = require('express');
var mysql = require('mysql');
var app = express();
var connection = mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'',
   database:'sale'
});

connection.connect(function(error){
   if(!!error){
      console.log('Error');
   } else {
      console.log('Connected');
   }
});
app.get("/",function(req,resp){
   connection.query("SELECT * FROM product ",function(error,rows,fields){
   if(!!error){
      console.log('Error query');
   } else {
      console.log('Connected queery');
      console.log(rows[0].Title);
      resp.send( rows[0].Title);
      resp.json(rows);

   }
});
});
app.listen(3004);