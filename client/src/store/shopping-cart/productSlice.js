import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// get products products/
export const getProducts = createAsyncThunk(
  "foods",
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
// Post products admin/products/addproducts
export const addProducts = createAsyncThunk(
  "admin/products/addproducts",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const form = new FormData();
      form.append("id", data.id);
      form.append("title", data.title);
      form.append("price", data.price);
      form.append("category", data.category);
      form.append("desc", data.desc);
      form.append("image01", data.file);
      const res = await axios.post("/api/v1/admin/products/addproducts", form, {
        headers: { token: localStorage.getItem("token") },
      });
      return dispatch(getProducts());
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

export const productSlice = createSlice({
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
