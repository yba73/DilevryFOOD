import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import userReducer from "./shopping-cart/userSlice";
import categoryReducer from "./shopping-cart/CategorySlice";
import headerReducer from "./shopping-cart/headerSlice";
import productReducer from "./shopping-cart/productSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    user: userReducer,
    category: categoryReducer,
    header: headerReducer,
    products: productReducer,
  },
});

export default store;
