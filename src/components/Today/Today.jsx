import AddWater from "../Buttons/AddWater/AddWater";
import DeleteWater from "../Buttons/DeleteWater/DeleteWater";
import EditWater from "../Buttons/EditWater/EditWater";

import EditWaterForm from "../Forms/EditWaterForm/EditWaterForm";
import {
  StyledTodayButtonsWrapper,
  StyledTodayTitle,
  StyledTodayWaterItem,
  StyledTodayWaterList,
  StyledTodayWrapper,
  StyledWaterInfo,
  StyledWaterVolume,
} from "./Today.styled";

import { useDispatch, useSelector } from "react-redux";
import sprite from "../../images/svg+logo/sprite.svg";
import { selectOpenModal } from "../../redux/selectors";
import { setModalContent, setModalStatus } from "../../redux/slice";

const Today = () => {
  const dispatch = useDispatch();

  const modalStatus = useSelector(selectOpenModal);

  const handleEditWater = () => {
    dispatch(setModalStatus(!modalStatus));
    dispatch(setModalContent(<EditWaterForm />));
  };
  const handleDeleteWater = () => {
    dispatch(setModalStatus(!modalStatus));
    dispatch(setModalContent("Delete"));
  };
  const handleAddWater = () => {
    dispatch(setModalStatus(!modalStatus));
    dispatch(setModalContent("Add water"));
  };

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
            <EditWater onClick={handleEditWater} />
            <DeleteWater onClick={handleDeleteWater} />
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
            <EditWater onClick={handleEditWater} />
            <DeleteWater onClick={handleDeleteWater} />
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
            <EditWater onClick={handleEditWater} />
            <DeleteWater onClick={handleDeleteWater} />
          </StyledTodayButtonsWrapper>
        </StyledTodayWaterItem>
      </StyledTodayWaterList>

      <AddWater onClick={handleAddWater} />
    </StyledTodayWrapper>
  );
};

export default Today;
