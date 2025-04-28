import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginAPI,
  registerAPI,
  fetchProfileAPI,
} from "../services/authService";

// Safely load from localStorage
let authUserFromStorage = null;
const storedUser = localStorage.getItem("authUser");

if (storedUser && storedUser !== "undefined") {
  try {
    authUserFromStorage = JSON.parse(storedUser);
  } catch (error) {
    console.error("Error parsing authUser from storage:", error);
    authUserFromStorage = null;
  }
}

const tokenFromStorage = localStorage.getItem("token") || null;

const initialState = {
  authUser: authUserFromStorage,
  token: tokenFromStorage,
  loading: false,
  error: null,
};

// Thunks
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await loginAPI({ email, password });
      console.log("Login API Response:", response.data); // Log the API response
      return response.data;
    } catch (error) {
      console.error("Login API Error:", error);
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (payload, thunkAPI) => {
    try {
      const response = await registerAPI(payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    }
  }
);

export const fetchProfile = createAsyncThunk(
  "auth/fetchProfile",
  async (_, thunkAPI) => {
    try {
      const response = await fetchProfileAPI();
      console.log("Fetch Profile API Response:", response.data); // Log the API response
      return response.data;
    } catch (error) {
      console.error("Fetch Profile API Error:", error);
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Failed to fetch profile"
      );
    }
  }
);

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.authUser = null;
      state.token = null;
      state.loading = false;
      state.error = null;

      localStorage.removeItem("authUser");
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.authUser = action.payload.user; // Ensure this is not undefined
        state.token = action.payload.token;

        // Save to localStorage only if authUser is valid
        if (action.payload.user) {
          console.log("Saving authUser to localStorage:", action.payload.user); // Log the saved data
          localStorage.setItem("authUser", JSON.stringify(action.payload.user));
          localStorage.setItem("token", action.payload.token);
        } else {
          console.error("User data is missing in login response.");
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.authUser = action.payload; // Ensure this is correct
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
