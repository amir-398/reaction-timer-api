import express from "express";
import timerController from "../controller/timerController";
import JwtMiddleware from "../middlewares/JwtMiddleware";

const router = express.Router();

router
  .route("/submit-reaction-time")
  .post(JwtMiddleware.verifyToken, timerController.addTimer);
router
  .route("/get-reaction-times/:userid")
  .get(timerController.getTimersByUserId);

router.route("/get-all-reaction-times").get(timerController.getAllTimers);

router
  .route("/get-login-user-reaction-times")
  .post(timerController.getLoginUserTimers);

export default router;
