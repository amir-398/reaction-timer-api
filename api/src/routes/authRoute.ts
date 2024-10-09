import express from "express";
import authController from "../controller/authController";
const router = express.Router();

router.route("/register").post((req, res) => {
  console.log("ss", req.body);
  res.send(req.body);
});

router.route("/login").post(authController.login);

export default router;
