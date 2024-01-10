import AddWater from "../Buttons/AddWater/AddWater";
import DeleteWater from "../Buttons/DeleteWater/DeleteWater";
import EditWater from "../Buttons/EditWater/EditWater";
import {
  StyledTodayButtonsWrapper,
  StyledTodayTitle,
  StyledTodayWaterItem,
  StyledTodayWaterList,
  StyledTodayWrapper,
  StyledWaterInfo,
  StyledWaterVolume,
} from "./Today.styled";

import sprite from "../../images/svg+logo/sprite.svg";

const Today = () => {
  return (
    <StyledTodayWrapper>
      <StyledTodayTitle>Today</StyledTodayTitle>
      <StyledTodayWaterList>
        <StyledTodayWaterItem>
          <StyledWaterInfo>
            <svg width={"36px"} height={"36px"}>
              <use href={sprite + "#icon-water-glass"}></use>
            </svg>
            <StyledWaterVolume>250ml</StyledWaterVolume> Time
          </StyledWaterInfo>
          <StyledTodayButtonsWrapper>
            <EditWater />
            <DeleteWater />
          </StyledTodayButtonsWrapper>
        </StyledTodayWaterItem>
        <StyledTodayWaterItem>
          <StyledWaterInfo>
            <svg width={"36px"} height={"36px"}>
              <use href={sprite + "#icon-water-glass"}></use>
            </svg>
            <StyledWaterVolume>250ml</StyledWaterVolume> Time
          </StyledWaterInfo>
          <StyledTodayButtonsWrapper>
            <EditWater />
            <DeleteWater />
          </StyledTodayButtonsWrapper>
        </StyledTodayWaterItem>
        <StyledTodayWaterItem>
          <StyledWaterInfo>
            <svg width={"36px"} height={"36px"}>
              <use href={sprite + "#icon-water-glass"}></use>
            </svg>
            <StyledWaterVolume>250ml</StyledWaterVolume> Time
          </StyledWaterInfo>
          <StyledTodayButtonsWrapper>
            <EditWater />
            <DeleteWater />
          </StyledTodayButtonsWrapper>
        </StyledTodayWaterItem>
        <StyledTodayWaterItem>
          <StyledWaterInfo>
            <svg width={"36px"} height={"36px"}>
              <use href={sprite + "#icon-water-glass"}></use>
            </svg>
            <StyledWaterVolume>250ml</StyledWaterVolume> Time
          </StyledWaterInfo>
          <StyledTodayButtonsWrapper>
            <EditWater />
            <DeleteWater />
          </StyledTodayButtonsWrapper>
        </StyledTodayWaterItem>

      </StyledTodayWaterList>
      <AddWater />
    </StyledTodayWrapper>
  );
};

export default Today;
