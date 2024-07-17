const mongoose=require('mongoose');

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        const connection=mongoose.connection

        connection.on("connected",()=>{
            console.log("connected to db");
        })
        connection.on('error',(error)=>{
            console.log("something went wrong",error);
        })
    }
    catch(error){
        console.log("something went wrong",error);
    }


}
module.exports=connectDB;