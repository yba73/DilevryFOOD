import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import userReducer from "./shopping-cart/userSlice";
import productReducer from "./shopping-cart/productSlice";
import homeReducer from "./shopping-cart/homeSlice";
import CategoryReducer from "./shopping-cart/CategorySlice";
import cartReducer from "./shopping-cart/cartKhSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    user: userReducer,
    products: productReducer,
    home: homeReducer,
    cartkh: cartReducer,
    category: CategoryReducer,
  },
});

export default store;
