import MonetaryDonation from "../models/MonetaryDonation.model.js";
import asyncHandler from "express-async-handler";

/**
 * @desc    Create a new monetary donation
 * @route   POST /api/donations/monetary
 * @access  private (Donor)
 */
const createMonetaryDonation = async (req, res) => {
  const { amount, currency, transactionId } = req.body;
  const donorId = req.user.id;

  if (!amount) {
    res.status(400);
    throw new Error("Amount is required");
  }

  const donation = new MonetaryDonation({
    donorId,
    amount,
    currency: currency || "RS",
    transactionId,
  });

  const createdDonation = await donation.save();
  res.status(201).json(createdDonation);
};

/**
 * @desc    Get all monetary donations
 * @route   GET /api/donations/monetary
 * @access  private (Admin, NGO_Staff)
 */
const getMonetaryDonation = asyncHandler(async (req, res) => {
  const donations = await MonetaryDonation.find().populate(
    "donorId",
    "name email"
  );
  res.json(donations);
});

/**
 * @desc    Get monetary donation by ID
 * @route   GET /api/donations/monetary/:id
 * @access  private (Admin, NGO_Staff)
 */
const getMonetaryDonationById = asyncHandler(async (req, res) => {
  const donation = await MonetaryDonation.findById(req.params.id).populate(
    "donorId",
    "name email"
  );

  if (!donation) {
    res.status(404);
    throw new Error("Donation not found");
  }

  res.json(donation);
});

/**
 * @desc    Get donor's own monetary donations
 * @route   GET /api/donations/monetary/mine
 * @access  private (Donor)
 */
const getMyMonetaryDonations = asyncHandler(async (req, res) => {
  const donations = await MonetaryDonation.find({
    donorId: req.user.id,
  }).populate("donorId", "name email");
  res.json(donations);
});

export {
  createMonetaryDonation,
  getMonetaryDonation,
  getMonetaryDonationById,
  getMyMonetaryDonations,
};
