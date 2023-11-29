const express = require("express");
const myrouter = express.Router();

var connection = require("../db/dbconnect")

myrouter.get("/voters",function(req,resp){
    connection.query("select * from candidates",(err,data,fields)=>{
        if(err){
            resp.status(500).send("no data found");
        }
        else{
            //to create table view using data, write file
            //index.ejs in view folder, to access the file write as follows
            resp.render("index",{voterdata:data})
        }
    })

});

myrouter.get("/addvoter",function(req,resp){
    resp.render("add-voter")
});


//to add new voter in table
myrouter.post("/insertvoter",function(req,resp){
    connection.query("insert into candidates(name,party,votes) values(?,?,?)",[req.body.name,req.body.party,req.body.votes],(err,result)=>{
        if(err){
            resp.status(500).send("no data added");
        }else{
            resp.redirect("/voters")
        }

    })
});

myrouter.get("/deletevoter/:voterid",function(req,resp){
    connection.query("delete from candidates where id=?",[req.params.voterid],(err,result)=>{
        if(err){
            resp.status(500).send("no data deleted");
        }else{
            resp.redirect("/voters")
        }
    })
})

module.exports=myrouter;