const jwt = require("jsonwebtoken")
const user = require("../models/User")
const logger= require("../config/logger")



// Middleware to validate the token
const protect= async(req, res, next)=>{
    let token;

    if(req.headers.authorization && 
        req.headers.authorization.startsWith("Bearer")
    ){
        try{
            token = req.headers.authorization.split(" ")[1];
            const decode=jwt.verify(token, process.env.JWT_SECRET)
            req.user= await user.findById(decode.user.id).select("-password");
            next()
        }
        catch(err)
        {   
            logger.error(`Internal Error while token verification ${err}`)
            return res.status(401).json({
                message:"Token Expired or Invalid Token"
            })
        }
    }
    else{
        return res.status(401).json({
            message:"Please Provide token"
        })
    }
}

module.exports={protect}