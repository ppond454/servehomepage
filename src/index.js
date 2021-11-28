import express from "express";
import Project from "./route/project"
import Projectpage from "./route/projectpage"
import cors from "cors"

const app = express()

app.use(cors())

let PORT = process.env.PORT || 4000


app.use(Project)
app.use(Projectpage)



app.listen(PORT,()=>{
    console.log(`${PORT}`);
})