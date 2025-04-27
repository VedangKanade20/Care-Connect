import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createSurplusDonationAPI,
  getSurplusDonationsAPI,
//   getSurplusDonationByIdAPI,
//   updateSurplusDonationAPI,
//   deleteSurplusDonationAPI,
  getMySurplusDonationsAPI,
} from "../../services/surplusService";

const initialState = {
  surplusDonations: [],
  mySurplusDonations: [],
  loading: false,
  error: null,
};

// Thunks
export const createSurplusDonation = createAsyncThunk("surplus/create", async (payload, thunkAPI) => {
  try {
    const response = await createSurplusDonationAPI(payload);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error?.response?.data?.message || "Failed to create surplus donation"
    );
  }
});

export const fetchSurplusDonations = createAsyncThunk("surplus/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await getSurplusDonationsAPI();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error?.response?.data?.message || "Failed to fetch surplus donations"
    );
  }
});

export const fetchMySurplusDonations = createAsyncThunk("surplus/fetchMy", async (_, thunkAPI) => {
  try {
    const response = await getMySurplusDonationsAPI();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error?.response?.data?.message || "Failed to fetch my surplus donations"
    );
  }
});

// Slice
const surplusDonationSlice = createSlice({
  name: "surplusDonation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSurplusDonation.pending, (state) => {
        state.loading = true;
      })
      .addCase(createSurplusDonation.fulfilled, (state, action) => {
        state.loading = false;
        state.mySurplusDonations.push(action.payload);
      })
      .addCase(createSurplusDonation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchSurplusDonations.fulfilled, (state, action) => {
        state.surplusDonations = action.payload;
      })

      .addCase(fetchMySurplusDonations.fulfilled, (state, action) => {
        state.mySurplusDonations = action.payload;
      });
  },
});

export default surplusDonationSlice.reducer;