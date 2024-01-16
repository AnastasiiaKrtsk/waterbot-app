// import React from 'react';
import { useForm } from "react-hook-form";
import sprite from "../../../images/svg+logo/sprite.svg";
import {
  StyledButtonsWrapper,
  StyledCurrentValue,
  StyledEditFormWrapper,
  StyledEditSubTitle,
  StyledEditTitle,
  StyledIncreaseDecreaseBtn,
  StyledNewAmount,
  StyledNewAmountWrapper,
  StyledRecordingTimeWrapper,
  StyledSaveBtn,
  StyledTitle,
} from "./EditWaterForm.styled";
import DigitalClockCustom from "../../TimePicker/TimePickerComponent";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <StyledEditFormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <DigitalClockCustom/>
        </StyledRecordingTimeWrapper>

        <StyledEditSubTitle>Enter the value of the water used:</StyledEditSubTitle>
        <input
          type="number"
          placeholder="Amount"
          {...register("amount", {
            required: true,
            max: 15000,
            min: 1,
            maxLength: 5,
          })}
        />

        <StyledSaveBtn type="submit">Save</StyledSaveBtn>
      </form>
    </StyledEditFormWrapper>
  );
}
