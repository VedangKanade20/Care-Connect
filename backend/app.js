import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import surplusDonationRouter from "./routes/surplusDonation.routes.js";
import monetaryDonationRouter from "./routes/monetaryDonation.routes.js";
import cors from "cors";

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true, // if you are using cookies/session (optional for JWT)
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.get("/", (_, res) => {
  res.send("hello , world");
});

app.use("/api/users", userRouter);

app.use("/api/donations/surplus", surplusDonationRouter);
app.use("/api/donations/monetary", monetaryDonationRouter);

export default app;
