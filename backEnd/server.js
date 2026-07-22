//************************ Importing the packages.. ************************ 
const express= require("express")
const cors= require("cors")
const dotenv= require("dotenv")
const connectDB = require("./config/db")
const userRoutes=require("./routes/userRoutes")


// *************************** Configurations... *****************************
dotenv.config()
connectDB()

//************************** Variables Declaration ****************************** 
const app= express();
const PORT=process.env.PORT



//************************ Middlewares Layer ************************ 
app.use(express.json())
app.use(cors())

// ********************   API Routes:  ********************
app.use("/api/users", userRoutes)

app.get("/",(req,res)=>{
    console.log("[info] backend is functinal")
    res.send("Welcome to rabbit API")
})






//************************ Listening the server... ************************ 
app.listen(PORT, ()=>{
    console.log(`Server is listening on http://localhost:${PORT}`)
})