import sprite from "../../../images/svg+logo/sprite.svg";
import {
  StyledButtonsWrapper,
  StyledCorrectDataWrapper,
  StyledCurrentValue,
  StyledEditFormWrapper,
  StyledEditSubTitle,
  StyledEditTitle,
  StyledIncreaseDecreaseBtn,
  StyledNewAmount,
  StyledNewAmountWrapper,
  StyledRecordingTimeWrapper,
  StyledSaveBtn,
  StyledTitle
} from "./EditWaterForm.styled";

const EditWaterForm = () => {
  return (
    <StyledEditFormWrapper>
      <StyledEditTitle>Edit the entered amount of water</StyledEditTitle>
      <StyledCurrentValue>
        <svg width={"36px"} height={"36px"}>
          <use href={sprite + "#icon-water-glass"}></use>
        </svg>
        <div>250 ml</div>
        <div>Time</div>
      </StyledCurrentValue>
      <StyledCorrectDataWrapper>
        <StyledEditSubTitle>Correct entered data:</StyledEditSubTitle>
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

          <StyledRecordingTimeWrapper>
            <StyledTitle>Recording time:</StyledTitle>
            {/* <TimePickerComponent/> */}
          </StyledRecordingTimeWrapper>
        </StyledNewAmountWrapper>
        <StyledEditSubTitle>Enter the value of the water used:</StyledEditSubTitle>
        <input></input>
      </StyledCorrectDataWrapper>

      <StyledSaveBtn>Save</StyledSaveBtn>
    </StyledEditFormWrapper>
  );
};

export default EditWaterForm;
