const express = require("express")
const app = express()

app.get("/hi",(req,res)=>{
    res.send("<h1>i am good </h1>")
})

app.listen(8000,()=>{console.log(1);})