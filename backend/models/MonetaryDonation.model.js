import mongoose from "mongoose";

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
  // status: {
  //   type: String,
  //   enum: ["Pending", "Completed", "Failed"],
  //   default: "Pending",
  // },
  transactionId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MonetaryDonation = mongoose.model(
  "MonetaryDonation",
  monetaryDonationSchema
);

export default MonetaryDonation;
