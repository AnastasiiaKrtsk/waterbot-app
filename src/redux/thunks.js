import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addWater,
  currentUser,
  deleteWater,
  getWaterDay,
  getWaterMonth,
  editDailyNorma,
  logout,
  setToken,
  signin,
  signup,
  updateAvatar,
  updateUserInfo,
  editWater,
  forgotPassword,
  updatePassword,
} from "../service/api";
import { toast } from "react-toastify";
import moment from "moment";

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
      // thunkAPI.dispatch(getWaterDayThunk());
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

      return response;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserInfoThunk = createAsyncThunk(
  "users/updateInfo",
  async ({ endpoint, data }, thunkAPI) => {
    try {
      const response = await updateUserInfo({ endpoint, data });
      return response;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//============== Water =============================//

export const addWaterThunk = createAsyncThunk(
  "waters/addWater",
  async (water, thunkAPI) => {
    try {
      const response = await addWater(water);
      return response;
    } catch (error) {
      toast.error("Error add water:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getWaterDayThunk = createAsyncThunk(
  "waters/getWaterDay",
  async (_, thunkAPI) => {
    try {
      const response = await getWaterDay();
      return response;
    } catch (error) {
      toast.error("Error get water for this day:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getWaterMonthThunk = createAsyncThunk(
  "waters/getWaterMonth",
  async (monthYear, thunkAPI) => {
    try {
      const response = await getWaterMonth(monthYear);
      return response;
    } catch (error) {
      toast.error("Error get water for this month", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editWaterThunk = createAsyncThunk(
  "waters/editWater",
  async ({ id, water }, thunkAPI) => {
    try {
      const response = await editWater({ id, water });
      return response;
    } catch (error) {
      toast.error("Error edit water:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWaterThunk = createAsyncThunk(
  "waters/deleteWater",
  async (id, thunkAPI) => {
    try {
      const response = await deleteWater(id);
      return response;
    } catch (error) {
      toast.error("Error delete water:", error);
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

export const forgotPasswordThunk = createAsyncThunk(
  "auth/forgotPassword",
  async (email, thunkAPI) => {
    try {
      const response = await forgotPassword(email);
      toast.success("Email sent successfully");
      return response;
    } catch (error) {
      toast.error("Incorrect email");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePasswordThunk = createAsyncThunk(
  "auth/updatePassword",
  async (newPassword, thunkAPI) => {
    try {
      const response = await updatePassword(newPassword);
      toast.success("Update password successfully");
      return response;
    } catch (error) {
      toast.error("Incorrect password");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
