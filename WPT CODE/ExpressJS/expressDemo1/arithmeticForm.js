
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const m1 = require("./module1");


app.use(bodyparser.urlencoded({ extended: false }))
app.use(function (req, resp, next) {
    console.log("in user middleware", req.url);
    next();
})

app.get("/form", function (req, resp) {
    // __dirname is current folder, so public folder will be 
    //searched in current folder 
    resp.sendFile("/public/form.html", { root: __dirname })
});

app.get("/submit_data", function (req, resp) {
    var num1 = parseInt(req.query.num1);
    if (req.query.btn === "add") {
        var answer = m1.addition(num1, parseInt(req.query.num2));
        resp.send("<h2>Addition: " + answer + "</h2>");
    } else if (req.query.btn === "fact") {
        var answer = m1.factorial(num1);
        resp.send("<h2>factorial: " + answer + "</h2>");
    }
})

app.listen(9000, function () {
    console.log("server started at port 9000")
})