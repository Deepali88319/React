const express = require('express');
const app = express();//app to handle the http request 
const port = 3000;

//url:http://localhost:3000/
var products =[{pid:1 ,pname:'New Product' , price: 1000}];
//get : http://localhost:3000/ 
app.get('/',(req,resp)=>{
resp.send(products);

});
//put : http://localhost:3000/update value
app.put('/updateproduct',(req,resp)=>{
    resp.send('Put method call for product');
});
//post : http://localhost:3000/add value
app.post('/addProduct',(req,resp)=>{
    resp.send('Post method call for product');
});
//delete : http://localhost:3000/delete value
app.delete('/deleteProduct',()=>{
    resp.send('delete method call for product');
});

//provide solution only if server is listening
app.listen(port,function(){
    console.log("http://localhost:3000");
});
