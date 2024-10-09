import express from "express";
import timerController from "../controller/timerController";
import JwtMiddleware from "../middlewares/jwtMiddleware";

const router = express.Router();

router
  .route("/submit-reaction-time")
  .post(JwtMiddleware.verifyToken, timerController.addTimer);
router
  .route("/get-reaction-times/:userid")
  .get(JwtMiddleware.verifyToken, timerController.getTimersByUserId);

router
  .route("/get-all-reaction-times")
  .get(JwtMiddleware.verifyToken, timerController.getAllTimers);

router
  .route("/get-login-user-reaction-times")
  .get(JwtMiddleware.verifyToken, timerController.getLoginUserTimers);

router
  .route("/delete-reaction-time/:timerId")
  .delete(JwtMiddleware.verifyToken, timerController.deleteUserTimers);

export default router;
