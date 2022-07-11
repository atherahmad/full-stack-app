import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import homeRoute from "./routes/homeRoute.js"

/* Loading environment variables */
dotenv.config()

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

/* Listening the server */
app.listen(PORT, ()=>console.log(`listening at port ${PORT}`))