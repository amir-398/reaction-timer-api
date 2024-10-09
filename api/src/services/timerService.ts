import Timer, { TimerProps } from "../models/timerModel";

class TimerService {
  async createTimer(data: { time: number; userId: string }) {
    const time = data.time;
    const userId = data.userId;
    const newTimer = new Timer({ user_id: userId, time });
    await newTimer.save();
    return { message: "Timer created" };
  }

  async getTimersByUserId(userId: string): Promise<TimerProps[]> {
    return await Timer.find({ user_id: userId });
  }

  async getAllTimers(): Promise<TimerProps[]> {
    return await Timer.find();
  }

  async getLoginUserTimers(userId: string): Promise<TimerProps[]> {
    return await Timer.find({ user_id: userId }).sort({ time: 1 });
  }
}

export default TimerService;
