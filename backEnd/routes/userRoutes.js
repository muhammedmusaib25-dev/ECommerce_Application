const express= require("express")
const User= require("../models/User")
const jwt= require("jsonwebtoken")



const router= express.Router();

router.post("/register", async(req,res)=>{
    const {name, email, password}=req.body;

    try{

        // Check user Alredy exists or not 
        // if exists then 400 
        let user = await User.findOne({email})
        if(user) return res.status(400).json({message:"User Already exists..."})
        
        // If does not exists then create a new user
        console.log({name , email, password})
        user= new User({
            name, email, password
        })
        res.status(201).json({message:"User Created Sucessfully",
            user:{
                _id:user.id,
                name:user.name,
                email:user.email,
                role:user.role
            }
        })
    }

    catch(error){
        console.log("Error", error)
       res.status(500).send("Server Error")
    }
})

module.exports=router