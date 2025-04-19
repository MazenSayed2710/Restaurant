import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./Pages/menu/menuSlice";
import cartSlice from "./Pages/cart/cartSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    cart: cartSlice,
  },
});

export default store;
