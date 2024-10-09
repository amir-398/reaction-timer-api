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

export default { addTimer };
