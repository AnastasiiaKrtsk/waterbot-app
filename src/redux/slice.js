import { createSlice } from "@reduxjs/toolkit";
import {
  addWaterThunk,
  deleteWaterThunk,
  editWaterThunk,
  getWaterDayThunk,
  getWaterMonthThunk,
  logOutThunk,
  signInThunk,
  signUpThunk,
  updateAvatarThunk,
  updateUserInfoThunk,
  userCurrentThunk,
} from "./thunks";

const initialState = {
  userData: {
    username: null,
    email: null,
    avatarURL: "V",
    gender: "woman" || "man",
    dailyNorma: 1.8,
  },
  token: null,
  error: null,
  isSignedIn: false,
  isLoading: false,
  openModal: false,
  modalContent: null,
  water: {
    todayWater: [],
    monthWater: [],
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setModalStatus: (state, action) => {
      state.openModal = action.payload;
    },
    setModalContent: (state, action) => {
      state.modalContent = action.payload;
    },
    setDailyNorma: (state, action) => {
      state.userData.dailyNorma = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //=======signUp=========================//
      .addCase(signUpThunk.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
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
        state.userData = action.payload.user;
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

      //========== Current User ==================//

      .addCase(userCurrentThunk.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(userCurrentThunk.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.error = null;
        state.isLoading = false;
        state.userData = action.payload;
        state.isSignedIn = true;
        state.user = {
          ...state.user,
        };
      })
      .addCase(userCurrentThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //=========== Update AVATAR =================//

      .addCase(updateAvatarThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateAvatarThunk.fulfilled, (state, action) => {
        state.userData = {
          ...state.userData,
          avatarURL: action.payload.avatarURL,
        };
        state.isLoading = false;
      })
      .addCase(updateAvatarThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //========== Update User Info =================//
      .addCase(updateUserInfoThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserInfoThunk.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUserInfoThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //============== Water =============================//

      .addCase(addWaterThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addWaterThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getWaterDayThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getWaterDayThunk.fulfilled, (state, action) => {
        state.water.todayWater.push(action.payload);
        state.isLoading = false;
      })
      .addCase(getWaterDayThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getWaterMonthThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getWaterMonthThunk.fulfilled, (state, action) => {
        state.water.monthWater.push(action.payload);
        state.isLoading = false;
      })
      .addCase(getWaterMonthThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editWaterThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(editWaterThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteWaterThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteWaterThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setModalStatus, setModalContent, setDailyNorma } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
