import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import homeRoute from "./routes/homeRoute.js"
import {connectDB, connectSync} from "./helpers/dbConnect.js"
import mongoose from "mongoose";
import userRouter from "./routes/users.js"

/* Loading environment variables */
dotenv.config();
connectDB();

mongoose.connection.on("open", ()=>{
    console.log("connected to db")
});
mongoose.connection.on("error", err=>console.log("my error",err.message))

/* Creating instance of express */
const app = express();

/* using Middleware */

// Converting json Object into javascript Object
app.use(express.json()) 

//Protecting access from other sources. if we dont provide values it will be available for everyone. 
app.use(cors()) 

const PORT = process.env.PORT || 5000

/* Routes */

app.use("/api/home", homeRoute)
app.use("/api/users", userRouter)

/* Listening the server */
app.listen(PORT, ()=>console.log(`listening at port ${PORT}`))