import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env"
});

connectDB()
.then(() => {
  app.listen(process.env.PROT || 1000) 
})
.catch((err) => {
  console.log(err, "MONGODB Failed !!!!!")
})
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
