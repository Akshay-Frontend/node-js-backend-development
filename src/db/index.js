import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      process.env.MONGOODB_URL
    );

    console.log(
      `DB is connected ${connectionInstance.connection.host}`
    );

    return connectionInstance;
  } catch (error) {
    console.log("MongoDB connection failed:", error);
    throw error;
  }
};

export default connectDB;