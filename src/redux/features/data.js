import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../ProductsData";

export const counterSlice = createSlice({
  name: "appData",
  initialState: {
    value: { data: productsData, wishlist: [], cart: [], filterData: [] },
    wishlist: [],
    cart: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const abc = state.value.wishlist;
	  console.log(abc);
      state.value.wishlist = [...abc,action.payload];
    },
    removeFromWishList: (state, action) => {
      const wishlistedData = state.value.wishlist.filter(
        ({ id }) => id !== action.payload.id
      );
	  console.log(wishlistedData);
      state.value.wishlist = wishlistedData;

    },
    addToCart: (state, action) => {
      
      const abc = state.value.cart;
      state.cart = abc.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const cartData = state.value.cart.filter(({ id }) => id !== action.payload.id);
      state.value.cart = cartData;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {
  incrementByAmount,
  addToWishlist,
  removeFromWishList,
  addToCart,
  removeFromCart,
} = counterSlice.actions;

export default counterSlice.reducer;
