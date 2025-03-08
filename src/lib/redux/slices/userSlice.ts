import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserProfile {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
}

const initialState: UserProfile = {
  id: "",
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserProfile>) => {
      return action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer; // ✅ Ensure it's a default export
