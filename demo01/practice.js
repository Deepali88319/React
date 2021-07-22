var http = require("http");

function onRequest(request,response){
    console.log("Server recieved"+request);
    if(error)
    {
        console.log(error);
    }else{
  
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('This is text message');
    response.end();
    }
}


http.createServer(onRequest).listen(8074);