const express= require("express");
const cors=require("cors");
require('dotenv').config()
const connectDb=require('./config/connectDB')

const app=express()
app.use(cors({
    origin:process.env.FRONTEND_URL,
    Credentials:true
}))
const PORT=process.env.PORT || 8080
app.get('/',(request,response)=>{
    response.json({
        message:"server running at "+PORT
    })
})
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log("server running at  "+PORT)
    })
})
