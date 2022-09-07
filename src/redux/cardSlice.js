import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    card: [],
  },
  reducers: {
    addToCard: {
      reducer(state, action) {
        const existingItem = state.card.find(
          (x) => x.item.id === action.payload.item.id
        );
        existingItem
          ? (existingItem.qte += 1)
          : state.card.push(action.payload);
      },
      prepare(item) {
        return {
          payload: {
            item,
            qte: 1,
          },
        };
      },
    },
    increaseQte: (state, action) => {
      const { itemId } = action.payload;
      const existingItem = state.card.find((x) => x.item.id === itemId);
      if (existingItem) {
        existingItem.qte += 1;
      }
    },
    decreaseQte: (state, action) => {
      const { itemId } = action.payload;
      const existingItem = state.card.find((x) => x.item.id === itemId);
      if (existingItem) {
        existingItem.qte -= 1;
      }
    },

    rmoveFromCard: (state, action) => {
      const { itemId } = action.payload;
      const existingItem = state.card.find((x) => x.item.id === itemId);
      const index = state.card.indexOf(existingItem);
      state.card.splice(index, 1);
    },
    clearCard: (state, action) => {
      state.card = [];
    },
  },
});

export const { addToCard, rmoveFromCard, increaseQte, decreaseQte, clearCard } =
  cardSlice.actions;
export const selectCard = (state) => state.cart.card;
export default cardSlice.reducer;
