
const http = require("http");
const server = http.createServer(function(req, resp){
  
    console.log(req.url);
    resp.writeHeader(200, {"content-type":"text/html"})

    resp.write("<h1>Hello World</h1>");
    resp.write("<h2>Welcome to NodeJS</h2>");

    resp.end("this is end function");
});

// start the server on 9000 port number

server.listen(9000, function(){
    console.log("Server started at port 9000");
});