import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@db/${process.env.DB_NAME}?authSource=admin`
    );
    console.log(`Connected to MongoDB ${process.env.DB_NAME}`);
  } catch (err) {
    console.error(`MongoDB connection error: ${process.env.DB_NAME}`, err);
  }
};

export default connectDB;
