import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../types/user";

interface UserStateType {
  user?: null | UserType;
  loggedIn: boolean;
  lastRefreshed: number;
}

const initialState: UserStateType = {
  user: null,
  loggedIn: false,
  lastRefreshed: 0,
};

const userSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
      state.loggedIn = true;
    },
    setLastRefreshed: (state) => {
      state.lastRefreshed = Date.now();
    },
    setLoggedIn: (state) => {
      console.log("firing setLoggedIn");
      state.loggedIn = true;
    }
  },
});

export const { setUser, setLastRefreshed, setLoggedIn } = userSlice.actions;

export default userSlice.reducer;
