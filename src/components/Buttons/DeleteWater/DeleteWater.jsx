import sprite from "../../../images/svg+logo/sprite.svg";

import { StyledDeleteWaterButton } from "./DeleteWater.styled";

const DeleteWater = ({ onClick }) => {
  return (
      <StyledDeleteWaterButton onClick={onClick}>
        <svg width={"16px"} height={"16px"}>
          <use href={sprite + "#trash"}></use>
        </svg>
      </StyledDeleteWaterButton>
  );
};

export default DeleteWater;
