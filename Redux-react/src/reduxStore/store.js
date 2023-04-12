import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice";
import cartInfoReducer from "../slices/cartInfoSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    cartInfo : cartInfoReducer
  },
});
