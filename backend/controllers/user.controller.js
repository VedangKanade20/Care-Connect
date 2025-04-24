import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";
/**
 * @desc    Login user
 * @route   POST /api/users/login
 * @acces   public
 */
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    const isPasswordCorrect = await user.isPasswordCorrect(password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invaliddd Credentials" });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      staffType: user.staffType,
      token: generateToken(user._id),
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Login Failed Completely", error: error.message });
  }
}; //checked

const registerUser = async (req, res) => {
  const { name, email, password, role, staffType } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "Fields cannot be empty" });
    }

    const user = new User({
      name,
      email,
      password,
      role,
      staffType: role === "NGO_Staff" ? staffType : undefined,
    });

    await user.save();

    res.status(201).json({
      _id: user._id,
      name: user.name,
      role: user.role,
      staffType: user.staffType,
      token: generateToken(user._id),
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Registration failed", error: error.message });
  }
}; //checked

const logoutUser = async (req, res) => {
  // Note: Logout is typically handled client-side by clearing the token
  // Server-side, we can just return a success response
  res.json({ message: "Logged out successfully" });
}; //checked

const updateUserProfile = async (req, res) => {};

const getUser = async (req, res) => {};

export { loginUser, registerUser, logoutUser, updateUserProfile, getUser };
