//include the http module
var http = require("http");


function onRequest(request,response){
    console.log("Server recieved"+request);
  
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('This is text message');
    response.end();
}


http.createServer(onRequest).listen(5500,function(){
    console.log("http://localhost:5500")
});