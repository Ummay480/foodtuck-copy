import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[]; // ✅ Ensure `items` is an array
}

// ✅ Define initial state properly
const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
      }
    },
    removeOrderFromLocalStorage: (state) => {
      localStorage.removeItem("cart"); // ✅ Clear local storage
      state.items = []; // ✅ Reset cart state
    },
  },
});

// ✅ Export all Redux actions properly
export const { addToCart, removeFromCart, updateQuantity, removeOrderFromLocalStorage } = cartSlice.actions;
export default cartSlice.reducer;
