const express= require("express")
const User= require("../models/User")
const jwt= require("jsonwebtoken")



const router= express.Router();

router.post("/register", async(req,res)=>{
    const {name, email, password}=req.body;

    try{
        res.send({name,email,password});
    }
    catch(error){
       res.status(500).send("Server Error")
    }
})

module.exports=router