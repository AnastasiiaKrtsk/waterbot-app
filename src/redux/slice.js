import { createSlice } from "@reduxjs/toolkit";
import {
  logOutThunk,
  signInThunk,
  signUpThunk,
  updateAvatarThunk,
} from "./thunks";

const initialState = {
  user: {
    username: null,
    email: null,
    avatarURL: null,
    gender: null,
    dailyNorma: null,
  },
  token: null,
  error: null,
  isSignedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      //=======signUp=========================//
      .addCase(signUpThunk.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        state.isSignedIn = true;
        state.isLoading = false;
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //=======signIn=========================//

      .addCase(signInThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        state.isSignedIn = true;
        state.isLoading = false;
      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //=======LogOut=========================//;
      .addCase(logOutThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(logOutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = false;
        state.error = action.payload;
      })

      //=========== Update AVATAR =================//

      .addCase(updateAvatarThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateAvatarThunk.fulfilled, (state, action) => {
        state.user = {
          ...state.user,
          avatarURL: action.payload.avatarURL,
        };
        state.isLoading = false;
      })
      .addCase(updateAvatarThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
