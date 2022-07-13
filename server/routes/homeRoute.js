import express from "express";
import { storeData, testController } from "../controllers/test.js";
const   router = express.Router();

router.get("/dashboard",testController);
router.post("/newuser", storeData)

export default router;