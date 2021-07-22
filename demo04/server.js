const http=require('http');
const fs=require('fs');
const url=require('url');


function onRequest(request,response){
    //1. index.html
    //2. aboutus.html
    //3. register.html
    const path=url.parse(request.url).pathname;
    console.log(path);
    response.writeHead(200,{'Content-Type':'text/html'});
switch(path){
    case '/index.html':
    fs.readFile(__dirname+path,function(error,data){
        if(error){
        response.write("error:"+error);
        response.end();
}else{
    response.write(data);
    response.end();

}
    })
break;
default:
    response.write("Welcome to server!");
    response.end();
    break;
}

}
http.createServer(onRequest).listen(5000,function(){
console.log("http://localhost:5000 listening");
});