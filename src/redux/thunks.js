import { createAsyncThunk } from "@reduxjs/toolkit";
import { logout, signin, signup } from "../service/authApi";

export const signUpThunk = createAsyncThunk(
  "auth/signUp",
  async (userData, thunkAPI) => {
    try {
      const response = await signup(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  "auth/signIn",
  async (userData, thunkAPI) => {
    try {
      const response = await signin(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logOut",
  async (_, thunkAPI) => {
    try {
      await logout();
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error._message);
    }
  }
);
