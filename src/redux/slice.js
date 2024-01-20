import { createSlice } from "@reduxjs/toolkit";
import {
  addWaterThunk,
  deleteWaterThunk,
  editWaterThunk,
  getWaterDayThunk,
  getWaterMonthThunk,
  editDailyNormaThunk,
  logOutThunk,
  signInThunk,
  signUpThunk,
  updateAvatarThunk,
  updateUserInfoThunk,
  userCurrentThunk,
} from "./thunks";
import moment from "moment";

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
  idForEditDelete: null,
  water: {
    todayWater: [],
    monthWater: [],
  },
  chooseDate: moment().toISOString(),
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
    setIdForEditDelete: (state, action) => {
      state.idForEditDelete = action.payload;
    },
    setChooseDate: (state, action) => {
      state.chooseDate = action.payload;
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
        state.openModal = false;
        state.modalContent = null;
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
        state.water.todayWater = action.payload;
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
        if (action.payload.length) {
          // TODO при полном удалении за день идет ошибка
          state.water.monthWater = action.payload?.map((day) => ({
            ...day,
            date: moment(day.date).date(),
          }));
          state.isLoading = false;
        }
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
        state.openModal = false;
        state.modalContent = null;
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
        state.openModal = false;
        state.modalContent = null;
      })
      .addCase(deleteWaterThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // ========== Update Daily Norma =================//
      .addCase(editDailyNormaThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editDailyNormaThunk.fulfilled, (state, action) => {
        state.userData = {
          ...state.userData,
          dailyNorma: action.payload.dailyNorma,
        };
        state.isLoading = false;
      })
      .addCase(editDailyNormaThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setModalStatus,
  setModalContent,
  setDailyNorma,
  setIdForEditDelete,
  setChooseDate,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
