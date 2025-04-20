const mongoose = require("mongoose");

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
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


userSchema.methods.generateAuthToken = function (){
  const token = 
}



module.exports = mongoose.model("User", userSchema);
