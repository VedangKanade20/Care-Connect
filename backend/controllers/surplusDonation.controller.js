import SurplusDonation from "../models/SurplusDonation.model.js";
import asyncHandler from "express-async-handler";

/**
 * @desc    Create a new surplus donation
 * @route   POST /api/donations/surplus
 * @access  private (Donor)
 */
const createSurplusDonation = async (req, res) => {
  const { type, description, pickupPreference } = req.body;
  const fileUrl = req.file ? `/backend/uploads/${req.file.fileName}` : null;
  const donorId = req.user._id;

  if (!type || !description || !pickupPreference) {
    res.status(400);
    throw new Error(
      "All fields (type, description, pickupPreference) are required"
    );
  }

  const donation = new SurplusDonation({
    donorId,
    type,
    description,
    pickupPreference,
    fileUrl,
    status: "Pending",
  });

  const createdDonation = await donation.save();
  res.status(201).json(createdDonation);
}; //checked

/**
 * @desc    Get all surplus donations
 * @route   GET /api/donations/surplus
 * @access  private (Admin, NGO_Staff)
 */
const getSurplusDonation = asyncHandler(async (req, res) => {
  const donations = await SurplusDonation.find().populate(
    "donorId",
    "name email"
  );
  res.json(donations);
}); //checked

/**
 * @desc    Get surplus donation by ID
 * @route   GET /api/donations/surplus/:id
 * @access  private (Admin, NGO_Staff)
 */
const getSurplusDonationById = asyncHandler(async (req, res) => {
  const donation = await SurplusDonation.findById(req.params.id).populate(
    "donorId",
    "name email"
  );

  if (!donation) {
    res.status(404);
    throw new Error("Donation not found");
  }

  res.json(donation);
}); //checked

/**
 * @desc    Update surplus donation
 * @route   PUT /api/donations/surplus/:id
 * @access  private (NGO_Staff with core, Admin)
 */
const updateSurplusDonation = async (req, res) => {
  const { status } = req.body;
  const donation = await SurplusDonation.findById(req.params.id);

  if (!donation) {
    res.status(404);
    throw new Error("Donation not found");
  }

  donation.status = status || donation.status;

  const updatedDonation = await donation.save();
  res.json(updatedDonation);
}; //checked

/**
 * @desc    Delete surplus donation
 * @route   DELETE /api/donations/surplus/:id
 * @access  private (Admin)
 */
const deleteSurplusDonation = async (req, res) => {
  const donation = await SurplusDonation.findById(req.params.id);

  if (!donation) {
    res.status(404);
    throw new Error("Donation not found");
  }

  if (req.user.role !== "Admin") {
    res.status(403);
    throw new Error("Not authorized to delete donation");
  }

  await donation.remove();
  res.json({ message: "Donation removed" });
}; //checked

/**
 * @desc    Get donor's own surplus donations
 * @route   GET /api/donations/surplus/mine
 * @access  private (Donor)
 */
const getMySurplusDonations = asyncHandler(async (req, res) => {
  const donations = await SurplusDonation.find({
    donorId: req.user.id,
  }).populate("donorId", "name email");
  res.json(donations);
}); //checked

export {
  createSurplusDonation,
  getSurplusDonation,
  getSurplusDonationById,
  updateSurplusDonation,
  deleteSurplusDonation,
  getMySurplusDonations,
};
