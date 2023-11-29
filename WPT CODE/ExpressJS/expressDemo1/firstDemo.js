
const express = require("express");
const app = express();

//middleware functions are used for validation
// app.use(req, resp, next)
// {
//     console.log(req.url);
//     next();
// }

app.get("/hello",function(req,resp){
    
    resp.send("<h2>This is hello URL</h2>");
    resp.send("<h3>Hello, this is expressJs demo...</h3>");

})

app.get("/welcome", function(req, resp){

    resp.send("<h2>This is welcome URL</h2>");
})

app.listen(9000, function(req, resp){
    console.log("Server is started on port 9000")
})