// import express from "express";
// import Project from "./route/project"
// import Projectpage from "./route/projectpage"
// import cors from "cors"
const cors = require("cors")
const express = require("express")

const app = express()

app.use(cors())

let PORT = process.env.PORT || 4000


// app.use(Project)
// app.use(Projectpage)

app.get("/" ,(res,req)=>{

    return res.status(200).json({
    hello : "ok"
    })


})


app.listen(PORT,()=>{
    console.log(`${PORT}`);
})