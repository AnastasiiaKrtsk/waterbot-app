import { TextField } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import moment from "moment";
import sprite from "../../../images/svg+logo/sprite.svg";
import {
  StyledButtonsWrapper,
  StyledCurrentValue,
  StyledEditSubTitle,
  StyledEditTitle,
  StyledForm,
  StyledIncreaseDecreaseBtn,
  StyledNewAmount,
  StyledNewAmountWrapper,
  StyledRecordingTimeWrapper,
  StyledSaveBtn,
  StyledTitle,
  StyledUsedWater,
} from "./EditWaterForm.styled";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const waterVolume = formData.get("waterVolume");
    const time = moment(formData.get("time"), "h:mm a").format();

    console.log({ waterVolume, time });
  };

  return (
    <>
      <>
        <StyledForm onSubmit={handleSubmit}>
          <StyledEditTitle>Edit the entered amount of water</StyledEditTitle>
          <StyledCurrentValue>
            <svg width={"36px"} height={"36px"}>
              <use href={sprite + "#icon-water-glass"}></use>
            </svg>
            <div>250 ml</div>
            <div>Time</div>
          </StyledCurrentValue>

          <StyledNewAmountWrapper>
            <StyledTitle>Amount of water:</StyledTitle>
            <StyledButtonsWrapper>
              <StyledIncreaseDecreaseBtn>
                <svg width={"36px"} height={"36px"}>
                  <use href={sprite + "#icon-minus"}></use>
                </svg>
              </StyledIncreaseDecreaseBtn>
              <StyledNewAmount>250ml</StyledNewAmount>
              <StyledIncreaseDecreaseBtn>
                <svg width={"36px"} height={"36px"}>
                  <use href={sprite + "#icon-plus"}></use>
                </svg>
              </StyledIncreaseDecreaseBtn>
            </StyledButtonsWrapper>
          </StyledNewAmountWrapper>

          <StyledRecordingTimeWrapper>
            <StyledTitle>Recording time:</StyledTitle>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["MobileTimePicker"]}>
                <DemoItem>
              <TimePicker
                sx={{
                  width: "544px",
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
                  "& .MuiTextField-root": {
                    borderColor: "var(--dark-blue)",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&:hover": { borderColor: "red" },
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
                      // background: "var(--Primery-Color-White, #FFF)",
                    },
                  },
                }}
                name="time"
                views={["hours", "minutes"]}
                format="hh:mm a"
                timeSteps={{ minutes: 1 }}
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
                width: "544px",
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
                    // background: "var(--Primery-Color-White, #FFF)",
                  },
                },
                "& .MuiInputBase-root": {
                  borderRadius: "6px",
                  color: "var(--dark-blue)",
                },
              }}
              name="waterVolume"
              // variant="outlined"
              // fullWidth
              // margin="normal"
              type="number"
              inputProps={{
                min: 1,
                max: 15000,
              }}
            />
          </StyledUsedWater>
          <StyledSaveBtn
            type="submit"
            // variant="contained"
            color="primary"
            // fullWidth
          >
            Save
          </StyledSaveBtn>
        </StyledForm>
      </>
    </>
  );
};

export default SimpleForm;
