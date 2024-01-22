import { createSlice, isAnyOf } from "@reduxjs/toolkit";
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
  forgotPasswordThunk,
  updatePasswordThunk,
} from "./thunks";
import moment from "moment";

const initialState = {
  userData: {
    username: null,
    email: null,
    avatarURL: "V",
    gender: "woman",
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
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })
      //=======signIn=========================//
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })
      //=======LogOut=========================//;
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(logOutThunk.rejected, (state, action) => {
        state.isSignedIn = false;
      })
      //========== Current User ==================//
      .addCase(userCurrentThunk.fulfilled, (state, action) => {
        // state.userData = action.payload.user;
        state.userData = action.payload;
        state.isSignedIn = true;
        state.user = {
          ...state.user,
        };
      })
      //=========== Update AVATAR =================//
      .addCase(updateAvatarThunk.fulfilled, (state, action) => {
        state.userData = {
          ...state.userData,
          avatarURL: action.payload.avatarURL,
        };
      })
      //========== Update User Info =================//
      .addCase(updateUserInfoThunk.fulfilled, (state, action) => {
        state.userData = {
          ...state.userData,
          ...action.payload.result,
        };
      })
      //============== Water =============================//
      .addCase(addWaterThunk.fulfilled, (state, action) => {
        state.water.todayWater = action.payload.dayWaterUser;
        if (
          moment(state.chooseDate).year() === moment().year() &&
          moment(state.chooseDate).month() === moment().month() &&
          action.payload.monthWaterUser.length
        ) {
          state.water.monthWater = action.payload.monthWaterUser?.map(
            (day) => ({
              ...day,
              date: moment(day.date).date(),
            })
          );
        }
        state.openModal = false;
        state.modalContent = null;
      })
      .addCase(getWaterDayThunk.fulfilled, (state, action) => {
        state.water.todayWater = action.payload;
      })
      .addCase(getWaterMonthThunk.fulfilled, (state, action) => {
        if (action.payload.length) {
          state.water.monthWater = action.payload?.map((day) => ({
            ...day,
            date: moment(day.date).date(),
          }));
        } else {
          state.water.monthWater = action.payload;
        }
      })
      .addCase(editWaterThunk.fulfilled, (state, action) => {
        state.water.todayWater = action.payload.dayWaterUser;
        if (
          moment(state.chooseDate).year() === moment().year() &&
          moment(state.chooseDate).month() === moment().month() &&
          action.payload.monthWaterUser.length
        ) {
          state.water.monthWater = action.payload.monthWaterUser?.map(
            (day) => ({
              ...day,
              date: moment(day.date).date(),
            })
          );
        }
        state.openModal = false;
        state.modalContent = null;
      })
      .addCase(deleteWaterThunk.fulfilled, (state, action) => {
        state.water.todayWater = action.payload.data.dayWaterUser;
        if (
          moment(state.chooseDate).year() === moment().year() &&
          moment(state.chooseDate).month() === moment().month() &&
          action.payload.data.monthWaterUser.length
        ) {
          state.water.monthWater = action.payload.data.monthWaterUser?.map(
            (day) => ({
              ...day,
              date: moment(day.date).date(),
            })
          );
        }
        state.openModal = false;
      })
      // ========== Update Daily Norma =================//
      .addCase(editDailyNormaThunk.fulfilled, (state, action) => {
        state.userData = {
          ...state.userData,
          dailyNorma: action.payload.dailyNorma,
        };

        state.water.todayWater.percentDailyNormaUser =
          action.payload.dayWaterUserPercentage;

        if (state.water.monthWater.length) {
          state.water.monthWater?.map((item) => {
            if (item.date === moment().date()) {
              return {
                ...item,
                percentDailyNorm: action.payload.dayWaterUserPercentage,
              };
            }
          });
        }
      })

      .addMatcher(
        isAnyOf(
          signUpThunk.pending,
          signInThunk.pending,
          logOutThunk.pending,
          forgotPasswordThunk.pending,
          updatePasswordThunk.pending,
          userCurrentThunk.pending,
          updateAvatarThunk.pending,
          updateUserInfoThunk.pending,
          addWaterThunk.pending,
          getWaterDayThunk.pending,
          getWaterMonthThunk.pending,
          editWaterThunk.pending,
          deleteWaterThunk.pending,
          editDailyNormaThunk.pending
        ),
        (state) => {
          state.error = null;
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.fulfilled,
          signInThunk.fulfilled,
          logOutThunk.fulfilled,
          forgotPasswordThunk.fulfilled,
          updatePasswordThunk.fulfilled,
          userCurrentThunk.fulfilled,
          updateAvatarThunk.fulfilled,
          updateUserInfoThunk.fulfilled,
          addWaterThunk.fulfilled,
          getWaterDayThunk.fulfilled,
          getWaterMonthThunk.fulfilled,
          editWaterThunk.fulfilled,
          deleteWaterThunk.fulfilled,
          editDailyNormaThunk.fulfilled
        ),
        (state) => {
          state.error = null;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.rejected,
          signInThunk.rejected,
          logOutThunk.rejected,
          forgotPasswordThunk.rejected,
          updatePasswordThunk.rejected,
          userCurrentThunk.rejected,
          updateAvatarThunk.rejected,
          updateUserInfoThunk.rejected,
          addWaterThunk.rejected,
          getWaterDayThunk.rejected,
          getWaterMonthThunk.rejected,
          editWaterThunk.rejected,
          deleteWaterThunk.rejected,
          editDailyNormaThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const {
  setModalStatus,
  setModalContent,
  setIdForEditDelete,
  setChooseDate,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
