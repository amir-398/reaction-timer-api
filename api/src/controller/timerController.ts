import Timer from "../models/timerModel";
import { Request, Response } from "express";

const addTimer = async (req: Request, res: Response) => {
  try {
    const newTimer = new Timer(req.body);
    const timer = await newTimer.save();
    res.status(201).json({ message: `Timer created ${timer}` });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getTimersByUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const timers = await Timer.findById(userId);
    res.status(200).json(timers);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllTimers = async (req: Request, res: Response) => {
  try {
    const timers = await Timer.find();
    res.status(200).json(timers);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getLoginUserTimers = async (req: Request, res: Response) => {
  try {
    const userId = req.body?.userId;
    const timers = await Timer.find({ userId }).sort({ time: 1 });
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
