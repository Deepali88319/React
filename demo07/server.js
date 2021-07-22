const express = require('express');
const app= express();

var products =[{pid:1 ,pname:'New Product' , price: 1000}];

app.get('/products/list',function(req,res){
   res.send(products);
    });
    
app.get('/products/register',function(req,res)
{
    products.push({pid : req.query.pid , pname: req.query.pname , price: req.query.price});
    res.send(products);
});
app.listen(3000,function(){
    console.log('Products app listening on port 3000 ');
});