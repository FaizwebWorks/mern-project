import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getMessage, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.route("send/:id", isAuthenticated, sendMessage);
router.route("all/:id", isAuthenticated, getMessage);

export default router;
