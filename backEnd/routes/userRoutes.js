// **************************************** IMPORTS **************************************//
const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const logger = require("../config/logger");
const {protect}= require("../middlewares/authMiddleware")

const router = express.Router();

// **************************************** END POINTS ****************************************//

// Register..
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  logger.info(`/register end point called for ${email}`);

  try {

    let user = await User.findOne({ email });

    // return if user exists
    if (user) {
      logger.warn(`/register called for ${email}`);
      return res.status(409).json({ message: "User Already exists..." });
    }
    
    // register new user if user doesnt exists
    user = new User({name,password,email});
    const resp=await user.save()
    // Create a JWT Payload
    const payload={user:{id:user._id , role:user.role}} 

    // Sign and return the token along with user data
    jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"40h"},(err,token)=>{
        if(err) throw err;
        // Send the user and token in response
        res.status(201).json({
            message:"User Created Successfully",
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
                role:user.role
            },
            token,
        })
    })

   
  } 
  catch (error) {
    logger.error(`Exception in /register ${error}`);
    res.status(500).json({
        message:"Internal Server Error"
    });
  }
});

// Login..
router.post("/login", async (req, res)=>{
    const {email, password}= req.body;
    logger.info(`/login called for ${email}`)

    try{
        let user= await User.findOne({email});

        if(!user){
            logger.warn(`Invalid user ${email}`)
            return res.status(401).json({
                "message":"User not exist"
            })
        }

        const isMatch= await user.matchPassword(password, user.password)
        console.log(isMatch, "Match result", password, user.password)
        
        if(!isMatch){
            return res.status(401).json({
                message:"Invalid Id or Password"
            })
        }

        // if Every thing is fine then create a jwt token and send it to the user
        const payload= {user:{id:user._id, role:user.role}}

        // Sign the payload and send the token to the user
        jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"40h"},
            (err, token)=>{
                if (err) {
                    logger.error(`Something went wrong in token validation ${err}`)
                    throw err
                };
                // else
                    logger.info(`Login in sucessfull ${email}`)
                res.status(200).json({
                    message:"Logged In",
                    token
                })
            }
        )

    }
    catch(error){
        logger.warn(`/login something went wrong ${error}`)
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
})

// Profile..
router.get("/profile", protect, async(req, res, next)=>{
    res.json({
        user:req.user
    })
})




module.exports = router;
