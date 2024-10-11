import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb://${process.env.USER_SERVICE_DB_NAME}/user_db`
    );
    console.log(`Connected to MongoDB ${process.env.USER_SERVICE_DB_NAME}`);
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

export default connectDB;
