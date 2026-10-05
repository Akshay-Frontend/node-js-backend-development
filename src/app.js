import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// TO Way use in cors
// app.use(cors);

app.use(cors({
    origin: process.env.CORSE_ORIGIN,
    credentials: true,
  }));

app.use(
  express.json({
    limit: "16kb",
  }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("../public"))
app.use(cookieParser())

export { app };
