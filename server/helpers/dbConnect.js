import mongoose from "mongoose";

export const connectSync = ()=>{
    mongoose.connect(process.env.MONGO_URI)
        .then(()=>console.log("connectd to db with connectsync"))
        .catch(err=>console.log(err.message))
}

/* Async */
export const connectDB =  () => {
    try{
         mongoose.connect(process.env.MONGO_URI)
    }
    catch(err){
        console.log("Connection failed", err.message)
    }

}