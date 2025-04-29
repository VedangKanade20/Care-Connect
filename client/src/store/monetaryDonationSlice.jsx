import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createMonetaryDonationAPI,
  getMonetaryDonationsAPI,
  getMyMonetaryDonationsAPI,
} from "../services/monetaryService";

// Initial state
const initialState = {
  monetaryDonations: [],
  myMonetaryDonations: [],
  loading: false,
  error: null,
};

// Thunks
export const createMonetaryDonation = createAsyncThunk(
  "monetary/",
  async (payload, thunkAPI) => {
    try {
      const response = await createMonetaryDonationAPI(payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchMonetaryDonations = createAsyncThunk(
  "monetary/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await getMonetaryDonationsAPI();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchMyMonetaryDonations = createAsyncThunk(
  "monetary/my-donations",
  async (_, thunkAPI) => {
    try {
      const response = await getMyMonetaryDonationsAPI();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// Slice
const monetaryDonationSlice = createSlice({
  name: "monetaryDonation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createMonetaryDonation.pending, (state) => {
        state.loading = true;
      })
      .addCase(createMonetaryDonation.fulfilled, (state, action) => {
        state.loading = false;
        state.myMonetaryDonations.push(action.payload);
      })
      .addCase(createMonetaryDonation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMonetaryDonations.fulfilled, (state, action) => {
        state.monetaryDonations = action.payload;
      })
      .addCase(fetchMyMonetaryDonations.fulfilled, (state, action) => {
        state.myMonetaryDonations = action.payload;
      });
  },
});

export default monetaryDonationSlice.reducer;
