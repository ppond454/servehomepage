import express from "express";
import Project from "./route/project"
import Projectpage from "./route/projectpage"
import cors from "cors"

let PORT = process.env.PORT || 4000

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.static("public"))


app.use(Project)
app.use(Projectpage)


app.listen(PORT,()=>{
    console.log(`${PORT}`);
})