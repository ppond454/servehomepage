import express from "express";
import Project from "./route/project"
import Projectpage from "./route/projectpage"
import cors from "cors"

const app = express()
app.use(cors())

app.use(Project)
app.use(Projectpage)


app.listen(process.env.PORT || 4000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });