// import express from "express";
// import Project from "./route/project"
// import Projectpage from "./route/projectpage"
// import cors from "cors"
const express = require("express")
const app = express()

let PORT = process.env.PORT || 4000



app.get("/", (req ,res)=>{
    res.status(200).json({
        message : "ok"
    })
})

app.get("/:id", (req ,res)=>{
    
    let {id} = req.params
    res.status(200).json({
        message : id
    })
})



app.listen(PORT,()=>{
    console.log(`${PORT}`);
})