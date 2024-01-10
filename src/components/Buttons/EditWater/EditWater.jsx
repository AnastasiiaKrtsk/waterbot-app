import sprite from "../../../images/svg+logo/sprite.svg";
import { StyledEditWaterButton } from "./EditWater.styled";
const EditWater = () => {
  return (
    <StyledEditWaterButton>
      <svg width={"16px"} height={"16px"}>
        <use href={sprite + "#icon-edit"}></use>
      </svg>
    </StyledEditWaterButton>
  );
};

export default EditWater;
