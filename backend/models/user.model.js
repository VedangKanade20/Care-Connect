import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Donor", "NGO_Staff", "Admin"],
    required: true,
  },
  staffType: {
    type: String,
    enum: ["core", "delivery"],
    required: function () {
      return this.role == "NGO_Staff";
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.virtual("isAdmin").get(function () {
  return this.role === "Admin";
});


userSchema.methods.isNGOStaffWithType = function (staffType) {
  return this.role === "NGO_Staff" && this.staffType === staffType;
};

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
