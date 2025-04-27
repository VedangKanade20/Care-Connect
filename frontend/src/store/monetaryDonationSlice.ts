
import { createSlice } from "@reduxjs/toolkit";

const monetaryDonationSlice = createSlice({
  name: "monetaryDonation",
  initialState: {
    donations: [],
  },
  reducers: {
    setMonetaryDonations: (state, action) => {
      state.donations = action.payload;
    },
    addMonetaryDonation: (state, action) => {
      state.donations.push(action.payload);
    },
    clearMonetaryDonations: (state) => {
      state.donations = [];
    },
  },
});

export const { setMonetaryDonations, addMonetaryDonation, clearMonetaryDonations } = monetaryDonationSlice.actions;
export default monetaryDonationSlice.reducer;
