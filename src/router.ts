import { Router } from "express";
import express from "express";
import messageController from "./controllers/messageController";

const router: Router = express.Router();

router.use("/message", messageController);

export default router;
