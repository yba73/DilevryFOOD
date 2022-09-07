import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getHeader = createAsyncThunk(
  "header/getHeader",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/v1/headers");
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

const headerSlice = createSlice({
  name: "Header",
  initialState: {
    HeaderState: "",
    headerList: [],
    errors: null,
    loading: false,
  },
  reducers: {
    selectHeader: (state, action) => {
      state.HeaderState = action.payload;
    },
  },
  extraReducers: {
    [getHeader.pending]: (state) => {
      state.loading = true;
    },
    [getHeader.fulfilled]: (state, action) => {
      state.loading = false;
      state.headerList = action.payload;
      state.errors = null;
    },
    [getHeader.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export default headerSlice.reducer;
export const { selectHeader } = headerSlice.actions;
