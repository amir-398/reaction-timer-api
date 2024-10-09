import mongoose, { Schema, Document } from "mongoose";

interface TimerProps extends Document {
  user_id: string;
  time: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const timerSchema: Schema = new Schema({
  user_id: { type: String, required: true },
  time: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Timer = mongoose.model<TimerProps>("timer", timerSchema);
export default Timer;
