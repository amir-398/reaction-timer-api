import express from "express";
import authController from "../controller/authController";
import JwtMiddleware from "../middlewares/jwtMiddleware";
const router = express.Router();

router.route("/register").post(authController.register);

router.route("/login").post(authController.login);

router
  .route("/users/:userId")
  .get(JwtMiddleware.verifyToken, authController.getUserById);

router
  .route("/users/update")
  .put(JwtMiddleware.verifyToken, authController.updateUser);

router
  .route("/users/delete/:userId")
  .delete(JwtMiddleware.verifyToken, authController.deleteUser);

router
  .route("/users")
  .get(JwtMiddleware.verifyToken, authController.getAllUsers);

export default router;
