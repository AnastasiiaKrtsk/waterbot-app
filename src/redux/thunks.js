import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  currentUser,
  logout,
  setToken,
  signin,
  signup,
  updateAvatar,
} from "../service/authApi";

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

export const userCurrentThunk = createAsyncThunk(
  "users/current",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().user.accessToken;
    setToken(token);

    try {
      if (!token) {
        throw new Error();
      }
      const response = await currentUser();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatarThunk = createAsyncThunk(
  "user/updateAvatar",
  async (avatar, thunkAPI) => {
    try {
      const response = await updateAvatar(avatar);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
