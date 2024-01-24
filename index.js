const express = require("express")
const app = express()
const ejs = require("ejs")


app.set('views', './public');
app.set('view engine', 'ejs');
// app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("home.ejs")
    
})

app.listen(8000,()=>{console.log(1);})