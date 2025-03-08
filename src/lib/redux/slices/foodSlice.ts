import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

interface FoodState {
  items: FoodItem[];
}

const initialState: FoodState = {
  items: [], // Initialize as an empty array
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setFoodItems: (state, action: PayloadAction<FoodItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setFoodItems } = foodSlice.actions;
export default foodSlice.reducer;
