import { createSlice } from "@reduxjs/toolkit";

// slices of a the "global store"
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // actions, can be dispactched
    login: (state, action) => {
      // set the user as the result of payload
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
