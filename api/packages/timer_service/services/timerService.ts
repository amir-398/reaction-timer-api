import Timer, { TimerProps } from "../models/timerModel";

class TimerService {
  async createTimer(data: { time: number; userId: string }) {
    const time = data.time;
    const userId = data.userId;
    const newTimer = new Timer({ user_id: userId, time });
    await newTimer.save();
    return { message: "Timer created" };
  }

  async getTimersByUserId(userId: string, adminId: string) {
    // const user = await Auth.findById(adminId);
    // if (user?.role) {
    //   return { message: "You are not authorized to perform this operation" };
    // }
    // return await Timer.find({ user_id: userId });
  }

  async getAllTimers(userId: string, query: any) {
    // const user = await Auth.findById(userId);
    const sort = query.sort;
    let sortDirection: any = 1;
    if (sort === "desc") {
      sortDirection = -1;
    }
    // if (user?.role) {
    //   return { message: "You are not authorized to perform this operation" };
    // }
    return await Timer.find()
      // .populate({
      //   path: "user",
      //   model: Auth,
      // })
      .sort({ time: sortDirection ?? 1 });
  }

  async getLoginUserTimers(userId: string): Promise<TimerProps[]> {
    console.log(userId);

    return await Timer.find({ user_id: userId }).sort({ time: 1 });
  }

  async deleteTimer(timerId: string, userId: string) {
    // const user = await Auth.findById(userId);
    const timer = await Timer.findById(timerId);
    if (!timer) {
      return { message: "Timer not found" };
    }
    // if (timer.user_id !== userId || user?.role) {
    //   return { message: "You are not authorized to perform this operation" };
    // }
    await Timer.findByIdAndDelete(timerId);
    return { message: "Timer deleted" };
  }
}

export default TimerService;
