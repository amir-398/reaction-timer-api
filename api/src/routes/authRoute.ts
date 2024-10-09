import express from "express";
import authController from "../controller/authController";
const router = express.Router();

router.route("/login").post(authController.login);

export default router;
