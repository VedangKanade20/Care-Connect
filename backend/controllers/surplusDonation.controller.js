import surplusDonation from "../models/SurplusDonation.model";

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

  const donation = new surplusDonation({
    donorId,
    type,
    description,
    pickupPreference,
    fileUrl,
    status: "Pending",
  });

  const createdDonation = await donation.save();
  res.status(201).json(createdDonation);
};

const getSurplusDonation = async (req, res) => {};

const getSurplusDonationById = async (req, res) => {};

const updateSurplusDonation = async (req, res) => {};

const deleteSurplusDonation = async (req, res) => {};
export {
  createSurplusDonation,
  getSurplusDonation,
  getSurplusDonationById,
  updateSurplusDonation,
  deleteSurplusDonation,
};
