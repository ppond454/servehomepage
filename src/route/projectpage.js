import express from "express";
import db from "../config/firebase"

let router = express.Router()

router.get("/project/:id", async(req,res)=>{

    let { id }  = req.params
    const pid = Number(id)
    try {
      const dataRef = db.collection("project")
      const snap = await dataRef.where("id", "==", pid).get()
      
      if (snap.empty) {
        return res.status(400).json({ message: "No matching documents." })
      } else {
        const project = snap.docs.map((doc) => doc.data())
        return res.status(200).json({ project })
      }
    } catch (e) {
      return res.status(500).json({ error: id })
    }

})

export default router