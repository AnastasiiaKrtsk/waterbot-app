import { StyledAddWaterBtnBlue } from "./AddWaterBlue.styled";
import sprite from "../../../images/svg+logo/sprite.svg";

const AddWaterBlue = () => {
  return (
    <StyledAddWaterBtnBlue>
      <svg width={"24px"} height={"24px"}>
        <use href={sprite + "#icon-plus"}></use>
      </svg>
      Add Water
    </StyledAddWaterBtnBlue>
  );
};

export default AddWaterBlue;
