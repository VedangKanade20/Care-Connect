import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.get("/", (_, res) => {
  res.send("hello , world");
});

export default app;
