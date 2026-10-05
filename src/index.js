import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env"
});

connectDB();

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
