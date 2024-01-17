import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  currentUser,
  editDailyNorma,
  logout,
  setToken,
  signin,
  signup,
  updateAvatar,
  updateUserInfo,
} from "../service/api";
import { toast } from "react-toastify";

export const signUpThunk = createAsyncThunk(
  "auth/signup",
  async (userData, thunkAPI) => {
    try {
      const response = await signup(userData);
      return response;
    } catch (error) {
      toast.error(`Email is already in use`);
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
      toast.error(`Incorrect email or password`);
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
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error._message);
    }
  }
);

export const userCurrentThunk = createAsyncThunk(
  "users/current",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    setToken(token);
    try {
      if (!token) {
        throw new Error("Token is missing");
      }
      const response = await currentUser();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue("Token is missing");
    }
  }
);

export const updateAvatarThunk = createAsyncThunk(
  "user/updateAvatar",
  async (data, thunkAPI) => {
    try {
      const response = await updateAvatar(data);
      console.log("Avatar updated successfully:", response);
      return response;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserInfoThunk = createAsyncThunk(
  "users/updateInfo",
  async (data, thunkAPI) => {
    try {
      const response = await updateUserInfo(data);
      return response;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//dailyNorma

export const editDailyNormaThunk = createAsyncThunk(
  "users/editDailyNorma",
  async (data, thunkAPI) => {
    try {
      const sum = Number(data.dailyNorma) * 1000;
      const response = await editDailyNorma({ dailyNorma: sum });
      return response;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
