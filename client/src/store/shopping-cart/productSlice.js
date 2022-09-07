import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProduts",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/v1/foods");
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

const productSlice = createSlice({
  name: "products",
  initialState: {
    ProductsState: "",
    ProductList: [],
    errors: null,
    loading: false,
  },
  reducers: {
    selectProducts: (state, action) => {
      state.categoryState = action.payload;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.ProductList = action.payload;
      state.errors = null;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export default productSlice.reducer;
export const { selectCategory } = productSlice.actions;
