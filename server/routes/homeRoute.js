import express from "express";
import { testController } from "../controllers/test.js";
const route = express.Router();

route.get("/",testController)

export default route;