import sprite from "../../../images/svg+logo/sprite.svg";
import { StyledEditWaterButton } from "./EditWater.styled";

const EditWater = ({ onClick }) => {
  return (
    <StyledEditWaterButton onClick={onClick}>
      <svg width={"16px"} height={"16px"}>
        <use href={sprite + "#icon-edit"}></use>
      </svg>
    </StyledEditWaterButton>
  );
};

export default EditWater;
