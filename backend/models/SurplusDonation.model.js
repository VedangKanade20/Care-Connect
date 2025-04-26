const mongoose = require("mongoose");

const surplusDonationSchema = new mongoose.Schema({
  donorId: {
    type: String,
    required: true,
    ref: "User",
  },
  type: {
    type: String,
    enum: ["Food", "Clothes"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pickupPreference: {
    type: String,
    required: true,
  },
  fileUrl: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected", "Scheduled", "Delivered"],
    default: "Pending",
  },
  deliveryStaffId: {
    type: String,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const surplusDonation = mongoose.model(
  "surplusDonation",
  surplusDonationSchema
);

export default surplusDonation;
