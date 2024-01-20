import { TextField } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sprite from "../../../images/svg+logo/sprite.svg";
import {
  selectChooseDate,
  selectIdForEditDelete,
  selectTodayWater,
} from "../../../redux/selectors";
import { setModalContent, setModalStatus } from "../../../redux/slice";
import { addWaterThunk, editWaterThunk } from "../../../redux/thunks";
import {
  StyledButtonsWrapper,
  StyledCurrentValue,
  StyledEditSubTitle,
  StyledEditTitle,
  StyledForm,
  StyledIncreaseDecreaseBtn,
  StyledMainParagraphEdit,
  StyledNewAmount,
  StyledNewAmountWrapper,
  StyledRecordingTimeWrapper,
  StyledSaveBtn,
  StyledSecondaryParagraphEdit,
  StyledSpan,
  StyledSvg,
  StyledTitle,
  StyledUsedWater,
  StyledWrapper,
} from "./EditAddWaterForm.styled";

const EditAddWaterForm = ({ action }) => {
  const dispatch = useDispatch();
  const shownDate = useSelector(selectChooseDate);
  const id = useSelector(selectIdForEditDelete);
  const todayWaterArray = useSelector(selectTodayWater);

  const waterAmount =
    action === "edit"
      ? todayWaterArray.userWaterDay.find((item) => item._id === id).waterVolume
      : 250;

  const shownTime =
    action === "edit"
      ? moment(
          todayWaterArray.userWaterDay.find((item) => item._id === id).date
        ).utc()
      : moment().utc();

  const [value, setValue] = useState(shownTime);

  const [volume, setVolume] = useState(waterAmount);
  const [customVolume, setCustomVolume] = useState(null);

  const handleCloseUserModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const waterVolume = +(customVolume ? customVolume : volume);
    const date = moment(formData.get("date"), "hh:mm a").format(
      "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
    );

    const chooseDate = {
      year: moment(shownDate).year().toString(),
      month: (moment(shownDate).month() + 1).toString().padStart(2, 0),
    };

    if (action === "edit") {
      dispatch(
        editWaterThunk({ chooseDate, id, water: { waterVolume, date } })
      );
    } else {
      dispatch(addWaterThunk({ chooseDate, water: { waterVolume, date } }));
    }
  };

  const handleTimeChange = (newTime) => {
    setValue(newTime);
  };

  const handleIncreaseVolume = (e) => {
    e.preventDefault();
    setVolume(volume <= 15000 ? volume + 50 : 15000);
  };
  const handleDecreaseVolume = (e) => {
    e.preventDefault();
    setVolume(volume > 50 ? volume - 50 : 50);
  };

  const handleChangeVolume = (e) => {
    setCustomVolume(e.target.value);
  };

  return (
    <>
      <>
        <StyledForm onSubmit={handleSubmit}>
          <StyledSvg width="24" height="24" onClick={handleCloseUserModal}>
            <use href={`${sprite}#icon-outline`} />
          </StyledSvg>
          {action === "edit" ? (
            <>
              <StyledEditTitle>
                Edit the entered amount of water
              </StyledEditTitle>

              <StyledCurrentValue>
                <svg width={"36px"} height={"36px"}>
                  <use href={sprite + "#icon-water-glass"}></use>
                </svg>
                <StyledMainParagraphEdit>
                  {waterAmount} ml
                </StyledMainParagraphEdit>
                <StyledSecondaryParagraphEdit>
                  {moment(
                    todayWaterArray.userWaterDay.find((item) => item._id === id)
                      .date
                  )
                    .utc()
                    .format("LT")}
                </StyledSecondaryParagraphEdit>
              </StyledCurrentValue>
            </>
          ) : (
            <StyledEditTitle>Add water</StyledEditTitle>
          )}

          <StyledNewAmountWrapper>
            {action === "edit" ? (
              <StyledEditSubTitle>Correct entered data:</StyledEditSubTitle>
            ) : (
              <StyledEditSubTitle>Choose a value:</StyledEditSubTitle>
            )}
            <StyledTitle>Amount of water:</StyledTitle>
            <StyledButtonsWrapper>
              <StyledIncreaseDecreaseBtn
                onClick={handleDecreaseVolume}
                type="button"
              >
                <svg width={"36px"} height={"36px"}>
                  <use href={sprite + "#icon-minus"}></use>
                </svg>
              </StyledIncreaseDecreaseBtn>
              <StyledNewAmount>{volume}ml</StyledNewAmount>
              <StyledIncreaseDecreaseBtn
                onClick={handleIncreaseVolume}
                type="button"
              >
                <svg width={"36px"} height={"36px"}>
                  <use href={sprite + "#icon-plus"}></use>
                </svg>
              </StyledIncreaseDecreaseBtn>
            </StyledButtonsWrapper>
          </StyledNewAmountWrapper>

          <StyledRecordingTimeWrapper>
            <StyledTitle>Recording time:</StyledTitle>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DemoContainer components={["TimePicker"]}>
                <DemoItem>
                  <TimePicker
                    sx={{
                      width: "150px",
                      "@media screen and (min-width: 768px)": {
                        width: "656px",
                      },
                      "@media screen and (min-width: 1440px)": {
                        width: "544px",
                      },
                      "& .MuiInputBase-input:hover": { borderColor: "red" },
                      "& .MuiTextField-root": {
                        "&:hover": {
                          borderColor: "var(--dark-blue)",
                        },
                      },
                      "& .MuiSvgIcon-root": { fill: "var(--dark-blue)" },
                      "& .MuiOutlinedInput-notchedOutline": {
                        "&:hover": {
                          borderColor: "var(--dark-blue)",
                        },
                      },
                      "& .MuiInputBase-root": {
                        borderRadius: "6px",
                        color: "var(--dark-blue)",
                      },
                      // ----------------
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "var(--light-blue-3)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--dark-blue)",
                        },
                        "&.Mui-focused fieldset": {
                          borderRadius: "6px",
                          border: "1.5px solid var(--dark-blue)",
                          color: "var(--dark-blue)",
                        },
                      },
                    }}
                    name="date"
                    views={["hours", "minutes"]}
                    format="hh:mm a"
                    timeSteps={{ minutes: 1 }}
                    value={value}
                    onChange={handleTimeChange}
                    ampm={true}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </StyledRecordingTimeWrapper>

          <StyledUsedWater>
            <StyledEditSubTitle>
              Enter the value of the water used:
            </StyledEditSubTitle>
            <TextField
              sx={{
                width: "150px",
                "@media screen and (min-width: 768px)": {
                  width: "656px",
                },
                "@media screen and (min-width: 1440px)": {
                  width: "544px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "var(--light-blue-3)",
                  },
                  "&:hover fieldset": {
                    borderColor: "var(--dark-blue)",
                  },
                  "&.Mui-focused fieldset": {
                    borderRadius: "6px",
                    border: "1.5px solid var(--dark-blue)",
                    color: "var(--dark-blue)",
                  },
                  "& .MuiInputBase-input[type='number']": {
                    "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button":
                      {
                        WebkitAppearance: "none",
                        margin: 0,
                      },
                    MozAppearance: "textfield",
                  },
                },
                "& .MuiInputBase-root": {
                  borderRadius: "6px",
                  color: "var(--dark-blue)",
                },
              }}
              name="waterVolume"
              onChange={handleChangeVolume}
              type="number"
              inputProps={{
                min: 1,
                max: 15000,
              }}
            />
          </StyledUsedWater>
          <StyledWrapper>
            <StyledSpan>{customVolume ? customVolume : volume}ml</StyledSpan>
            <StyledSaveBtn type="submit" color="primary">
              Save
            </StyledSaveBtn>
          </StyledWrapper>
        </StyledForm>
      </>
    </>
  );
};

export default EditAddWaterForm;
