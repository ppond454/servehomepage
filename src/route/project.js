import express from "express";
import db from "../config/firebase"

let router = express.Router()

router.get("/project", async(req,res)=>{

    try{
        const dataRef = db.collection("project")
        const snap = await dataRef.get()
        const project = snap.docs.map(doc=> doc.data())
        if (!project) {
            console.log('No such document!');
          } else {
            return res.status(200).json({project})
          }
    }
    catch(e){

    }

})

export default router