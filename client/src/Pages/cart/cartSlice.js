import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  numOfItems: 0,
  deleteItem: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateData(state, action) {
      state.data = [...action.payload];
    },
    updateNumOfItems(state, action) {
      state.numOfItems = action.payload;
    },
    updateDeleteItem(state, action) {
      state.deleteItem = action.payload;
    },
    clearItem(state) {
      state.data = [];
      state.numOfItems = 0;
    },
  },
});

export default cartSlice.reducer;
export const { updateData, updateNumOfItems, updateDeleteItem, clearItem } =
  cartSlice.actions;
