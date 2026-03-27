import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload; // directly store user object
    },
    removeUser: (state, action) => {
      return null; // clear user when logged out
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
