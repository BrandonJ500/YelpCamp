const express = require("express");
const app = express();
const path = require("path");


app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "ejs")

app.get("/home", (req,res)=>{

    res.render("home")
})

app.get("/", (req,res)=>{
    res.send("hello from yelp camp")
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})