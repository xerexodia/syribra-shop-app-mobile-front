import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectCard } from "./cardSlice";

const orederSlice = createSlice({
  name: "orders",
  initialState: {
    adress: null,
    payment: null,
    products: null,
  },
  reducers: {
    addAdress: (state, action) => {
      state.adress = action.payload;
    },
    addPayment: (state, action) => {
      state.payment = action.payload;
    },
    addProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addAdress, addPayment, addProducts } = orederSlice.actions;
export const selectOrder = (state) => state.orders;
export default orederSlice.reducer;
