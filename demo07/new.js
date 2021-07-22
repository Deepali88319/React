const express = require('express');
const app= express();
var mysql = require('mysql');
var products =[{pid:1 ,pname:'New Product' , price: 1000}];

app.get('/products/list',function(req,res){
    var connection = mysql.createConnection({
       host:'localhost',
       port:3333,
        user:'root',
        password:'root',
    database:'training21'
    });
    connection.connect();
    connection.query('SELECT EMPNO,ENAME FROM emp',function(err,rows,fields)
    {
        if (err) throw err;
        res.send(rows);
    });
    //connection.end();
});
app.get('/products/register',function(req,res)
{
    products.push({pid : req.query.pid , pname: req.query.pname , price: req.query.price});
    res.send(products);
});
app.listen(3000,function(){
    console.log('Products app listening on port 3000');
});