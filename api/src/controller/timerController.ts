import { Request, Response } from "express";
import TimerService from "../services/timerService";
import { timeValidators } from "../validators/timeValidators";

const timerService = new TimerService();

const addTimer = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { time } = await timeValidators.validateAsync(req.body);
    const result = await timerService.createTimer({ time, userId });
    res.status(201).json({ message: result });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getTimersByUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userid;
    const adminId = req.user?.id;
    const timers = await timerService.getTimersByUserId(userId, adminId);
    res.status(200).json(timers);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllTimers = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const query = req.query;
    // verify if user is admin
    const timers = await timerService.getAllTimers(userId, query);
    res.status(200).json(timers);
  } catch (err) {
    res.status(500).json({ message: "une erreur s'est produite", error: err });
  }
};

const getLoginUserTimers = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const timers = await timerService.getLoginUserTimers(userId);
    res.status(200).json(timers);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUserTimers = async (req: Request, res: Response) => {
  try {
    const timerId = req.params.timerId;
    const userId = req.user?.id;
    const timers = await timerService.deleteTimer(timerId, userId);
    res.status(200).json(timers);
  } catch (err) {
    res.status(500).json(err);
  }
};

export default {
  addTimer,
  getTimersByUserId,
  getAllTimers,
  getLoginUserTimers,
  deleteUserTimers,
};
