const mongoose = require("mongoose");

const monetaryDonationSchema = new mongoose.Schema({
  donorId: {
    type: String,
    required: true,
    ref: "User",
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: "RS",
  },
  status: {
    type: String,
    enum: ["Pending", "Completed", "Failed"],
    default: "Pending",
  },
  transactionId: {
    type: String,
  }, // From Stripe we will get this
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("MonetaryDonation", monetaryDonationSchema);
