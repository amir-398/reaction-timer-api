import mongoose, { Schema, Document } from "mongoose";

interface TimerProps extends Document {
  email: string;
  password: string;
  role: boolean;
}

const timerSchema: Schema = new Schema({
  user_id: { type: String, required: true },
  time: { type: String, required: true },
});

const Timer = mongoose.model<TimerProps>("auth", timerSchema);
export default Timer;
