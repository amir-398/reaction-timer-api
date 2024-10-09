import express from "express";
import authController from "../controller/authController";
const router = express.Router();

router.route("/register").post(authController.register);

router.route("/login").post(authController.login);

router.route("/users/:userId").get(authController.getUserById);

router.route("/users/:userId").put(authController.updateUser);

router.route("/users/:userId").delete(authController.deleteUser);

router.route("/users").get(authController.getAllUsers);

export default router;
