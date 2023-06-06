import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  quantity: 0,
};

const STORAGE_KEY = "cartItems";
const storedItems = Cookies.get(STORAGE_KEY);

if (storedItems) {
  initialState.cartItems = JSON.parse(storedItems);
  initialState.totalAmount = initialState.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  initialState.quantity = initialState.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
}

console.log(initialState.cartItems)

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isExisted = state.cartItems.find((item) => item.id === payload.id);
      if (isExisted) {
        return state;
      } else {
        state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];

        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + item.price,
          0
        );
        state.quantity = state.cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );

        Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id != payload.id);

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.price,
        0
      );
      state.quantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );

      Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
    },
    increaseQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });

      state.totalAmount += payload.price;

      state.quantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );

      Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
    },
    decreaseQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });

      state.totalAmount -= payload.price;
      state.quantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );

      Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
