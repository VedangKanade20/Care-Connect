import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
/**
 * @desc    Login user
 * @route   POST /api/users/login
 * @acces   public
 */
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
};

const registerUser = async (req, res) => {};

const logoutUser = async (req, res) => {};

const updateUserProfile = async (req, res) => {};

const getUser = async (req, res) => {};

export default {
  loginUser,
  registerUser,
  logoutUser,
  updateUserProfile,
  getUser,
};
