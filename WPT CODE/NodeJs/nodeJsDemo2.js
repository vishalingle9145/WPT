
const http = require("http");
const server = http.createServer(function(req, resp){
   
    console.log(req.url);
    resp.writeHeader(200, {"content-type":"text/html"});

    switch(req.url)
    {
        case "/hello":
            resp.write("<h1>This is hello url</h1>");
            resp.write("<h1>Using Switch Case</h1>");
            resp.end();
            break;

        case "/welcome":
            resp.write("<h1>This is welcome url</h1>");
            resp.write("<h1>Using Switch Case</h1>");
            resp.end();
            break;
    }
});

// for starting server

server.listen(9000, function(){
    console.log("Server is started on port 9000");
});