import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectedInstant = await mongoose.connect(
      `${process.env.MONGOODB_URL}/${DB_NAME}`
    );
    console.log(`\n DB is connected ${connectedInstant.connection.host}`);
  } catch (error) {
    console.log( "galt huai  DB is not connected !!",error);
  }
};

export default connectDB;