import { createAsyncThunk } from "@reduxjs/toolkit";
import { logout, signin, signup, addAvatar } from "../service/authApi";

export const signUpThunk = createAsyncThunk(
  "auth/signup",
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
  "auth/signin",
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
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await logout();
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error._message);
    }
  }
);

export const updateAvatarThunk = createAsyncThunk(
  "users/avatars",
  async (data, thunkAPI) => {
    try {
      const response = await addAvatar(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
