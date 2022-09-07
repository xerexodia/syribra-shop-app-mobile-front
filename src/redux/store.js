import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import cardReducer from "../redux/cardSlice";
import orederSlice from "../redux/checkoutSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    cart: cardReducer,
    orders: orederSlice,
  },
});
