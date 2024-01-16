import { Box, Button, Container, TextField } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import sprite from "../../../images/svg+logo/sprite.svg";
import {
  StyledButtonsWrapper,
  StyledCurrentValue,
  StyledEditSubTitle,
  StyledEditTitle,
  StyledIncreaseDecreaseBtn,
  StyledNewAmount,
  StyledNewAmountWrapper,
  StyledRecordingTimeWrapper,
  StyledTitle,
} from "./EditWaterForm.styled";
import moment from "moment";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const waterVolume = formData.get("waterVolume");
    const time = moment(formData.get("time"), "h:mm a").format();

    console.log({ waterVolume, time });
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <form onSubmit={handleSubmit}>
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
                      "& .MuiSvgIcon-root": { fill: "var(--dark-blue)" },
                      "& .MuiInputBase-root": {
                        border: "1px solid var(--light-blue-2)",
                        borderRadius: "6px",
                        color: "var(--dark-blue)",
                      },
                    }}
                    name="time"
                    views={["hours", "minutes"]}
                    format="hh:mm a"
                    timeSteps={{ minutes: 1 }}
                    ampm={true}
                    // value={formData.time ? new Date(`2000-01-01T${formData.time}`) : null}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </StyledRecordingTimeWrapper>

          <StyledEditSubTitle>
            Enter the value of the water used:
          </StyledEditSubTitle>

          <TextField
            name="waterVolume"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            inputProps={{
              min: 1,
              max: 15000,
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Save
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SimpleForm;
