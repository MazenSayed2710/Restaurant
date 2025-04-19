// // menuSlice.js
// import { configureStore, createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   itemType: "",
// };
// const menuSlice = createSlice({
//   name: "menu",
//   initialState,
//   reducers: {
//     updateItemType(state, action) {
//       state.itemType = action.payload;
//     },
//   },
// });
// export const { updateItemType } = menuSlice.actions;
// export default menuSlice.reducer;

// // store.js
// const store = configureStore({
//     reducer: {
//         menu:menuSlice
//     }
// })
// export default store

// // main.js
// <Provider store={store}>
//       <App />
// </Provider >

// // -----------------------------------
// const itemType = useSelector((state) => state.menu.itemsType);

// const dispatch = useDispatch();
// const navigate = useNavigate();
// function handleClick(type) {
//     dispatch(updateItemType(type));
//     navigate("/menu/content");
// }
