import { Request, Response } from "express";
import TimerService from "../services/timerService";

const timerService = new TimerService();

const addTimer = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const time = req.body.time;
    const result = await timerService.createTimer({ time, userId });
    res.status(201).json({ message: result.message });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getTimersByUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userid;
    const timers = await timerService.getTimersByUserId(userId);
    res.status(200).json(timers);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllTimers = async (req: Request, res: Response) => {
  try {
    const timers = await timerService.getAllTimers();
    res.status(200).json(timers);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getLoginUserTimers = async (req: Request, res: Response) => {
  try {
    const userId = req.body?.userId;
    const timers = await timerService.getLoginUserTimers(userId);
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
};
