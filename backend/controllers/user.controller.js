import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs";
/**
 * @desc    Login user
 * @route   POST /api/users/login
 * @acces   public
 */
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

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

/**
 * @desc    Register a new user
 * @route   POST /api/users/register
 * @access  public
 */
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

/**
 * @desc    Logout user
 * @route   POST /api/users/logout
 * @access  public
 */
const logoutUser = async (req, res) => {
  // Note: Logout is typically handled client-side by clearing the token
  // Server-side, we can just return a success response
  res.json({ message: "Logged out successfully" });
}; //checked

/**
 * @desc    Update user profile
 * @route   PUT /api/users/profile
 * @access  private
 */
const updateUserProfile = async (req, res) => {
  const { name, email, password } = req.body;
  const userId = req.user._id;

  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  user.name = name || user.name;
  user.email = email || user.email;
  if (password) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
  }

  await user.save();

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    staffType: user.staffType,
  });
}; //checked

/**
 * @desc    Get user profile
 * @route   GET /api/users/profile
 * @access  private
 */
const userProfile = async (req, res) => {
  const userId = req.user._id;

  const user = await User.findById(userId).select("-password");

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.json(user);
}; //chedked

/*
 * @desc    Get list of all users
 * @route   GET /api/users
 * @access  private (Admin only)
 */
const getListOfUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
}); //checked

/**
 * @desc    Delete a user
 * @route   DELETE /api/users/:id
 * @access  private (Admin only)
 */
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // Check if the requesting user is an Admin
  if (req.user.role !== "Admin") {
    res.status(403);
    throw new Error("Only admins can delete users");
  }

  await user.remove();
  res.json({ message: "User deleted successfully" });
});

export {
  loginUser,
  registerUser,
  logoutUser,
  updateUserProfile,
  userProfile,
  getListOfUsers,
  deleteUser,
};
