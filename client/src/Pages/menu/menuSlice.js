import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsType: "",
  itemId: "",
};
const menuSlice = createSlice({
  initialState,
  name: "menu",
  reducers: {
    updateItemType(state, action) {
      state.itemsType = action.payload;
    },
    updateItemId(state, action) {
      state.itemId = action.payload;
    },
  },
});

export const { updateItemType, updateItemId } = menuSlice.actions;
export default menuSlice.reducer;
