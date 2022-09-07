import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// registerUser
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (dataInfo, { rejectWithValue }) => {
    try {
      const res = await axios.post("api/v1/users/register", dataInfo);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

// loginUser
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (info, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/v1/users/login", info);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);
// State
const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
    token: localStorage.getItem("token") || null,
    isAuth: Boolean(localStorage.getItem("isAuth")) || false,
    errors: null,
  },
  // reducer logout
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state.token = null;
      state.isAuth = false;
    },
  },
  // reducer : registerUser fulfilled
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("isAuth", true);
      state.isAuth = true;
      state.errors = null;
    },
    // reducer : registerUser rejected

    [registerUser.rejected]: (state, action) => {
      state.errors = action.payload;
    },

    // reducer : loginUser fulfilled

    [loginUser.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("isAuth", true);
      state.isAuth = true;
      state.errors = null;
    },

    // reducer : loginUser rejected
    [loginUser.rejected]: (state, action) => {
      state.errors = action.payload;
    },
  },
});
export default userSlice.reducer;
export const { logout } = userSlice.actions;
