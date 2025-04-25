import express from "express";
import {
  getListOfUsers,
  loginUser,
  logoutUser,
  registerUser,
  updateUserProfile,
  userProfile,
} from "../controllers/user.controller.js";
import { protect, restrictToAdmin } from "../middlewares/user.middleware.js";

const userRouter = express.Router();

// userRouter.post("/register", registerUser);
// userRouter.post("/login", loginUser);

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", logoutUser);
userRouter.put("/update-user", protect, updateUserProfile);
userRouter.get("/get-allUsers", protect, restrictToAdmin, getListOfUsers);
userRouter.get("/user-details", protect, userProfile);

export default userRouter;
