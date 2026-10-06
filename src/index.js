import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 1000, () => {
      console.log(`Server running on port ${process.env.PORT || 1000}`);
    });
  })
  .catch((err) => {
    console.log(err, "MONGODB Failed !!!!!");
  });
// import express from "express";
// const app = express ;
// ( async () => {
//     try{
//      await  mongoose.connect(`${process.env.MONGOODB_URL}/${DB_NAME}`)
//      app.on("error", (error) => {
//         console.log(error)
//      })
//      app.listen(process.env.PORT)
//     }catch (err) {
//         console.log(err)
//     }
// })
