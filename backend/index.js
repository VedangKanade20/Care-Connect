import dotenv from "dotenv";
import express from "express";
import connDB from "./database/db.js";
import app from "./app.js";


dotenv.config();

connDB()
  .then(() => {
    app.listen(process.env.PORT || 9000, () => {
      console.log(`⚙️ Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Something went wronggg");
  });
