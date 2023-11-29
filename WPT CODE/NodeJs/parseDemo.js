
const http = require("http");
const url = require("url");
const fs = require("fs");
const add = require("./addition");
const server = http.createServer(function(req, resp){
  
    console.log(req.url);
    resp.writeHeader(200, {"content-type":"text/html"})

    var ob = url.parse(req.url, true);

    if(ob.pathname==="/form")
    {
        rs = fs.createReadStream("./form.html");
        rs.pipe(resp);

    }
    else if(ob.pathname==="/submit-data")
    {
        if(ob.query.btn==="add")
        {
        var n1 = parseInt(ob.query.num1)
        var n2 = parseInt(ob.query.num2)

        var add = addition(n1, n2);

        resp.write("Addtion: "+add);

        resp.end();
        }
    }
    else{
        resp.write("<h1>No data found</h1>");
    }
   
});

// start the server on 9000 port number

server.listen(9000, function(){
    console.log("Server started at port 9000");
});