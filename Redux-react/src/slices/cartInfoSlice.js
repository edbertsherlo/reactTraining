import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartInfo",
  initialState: {
    value: [],
  },
  reducers: {
   
    addToCart: (state, action) => {
      console.log("Action", action);
      let cartList = [];
      cartList.push(action.payload)
      cartList.push({name:'janet',age:27})
      state.value = cartList;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
