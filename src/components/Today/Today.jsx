import AddWater from "../Buttons/AddWater/AddWater";
import DeleteWater from "../Buttons/DeleteWater/DeleteWater";
import EditWater from "../Buttons/EditWater/EditWater";
import Modal from "../Modals/Modal";

import EditWaterForm from "../Forms/EditWaterForm/EditWaterForm"
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
import { setModalStatus } from "../../redux/slice";
import { useState } from "react";

const Today = () => {
  const dispatch = useDispatch();
  const [modalContent, setModalContent] = useState(null);

  const modalStatus = useSelector(selectOpenModal);

  const handleEditWater = () => {
    dispatch(setModalStatus(!modalStatus))
    setModalContent(<EditWaterForm />);
  };
  const handleDeleteWater = () => {
    dispatch(setModalStatus(!modalStatus))
    setModalContent("Delete")
  };
  const handleAddWater = () => {
    dispatch(setModalStatus(!modalStatus));
    setModalContent("Add water");
  };

  const handleCloseModal = () => {
    dispatch(setModalStatus(false))
    setModalContent(null);
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

      <Modal open={modalStatus} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
    </StyledTodayWrapper>
  );
};

export default Today;
