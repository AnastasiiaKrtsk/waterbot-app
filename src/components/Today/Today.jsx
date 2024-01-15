import { useState } from "react";
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
import Modal from "../Modals/Modal";

import sprite from "../../images/svg+logo/sprite.svg";

const Today = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleEditWater = () => {
    setModalContent("Edit water form");
    setOpenModal(true);
  };
  const handleDeleteWater = () => {
    setModalContent("Delete water");
    setOpenModal(true);
  };
  const handleAddWater = () => {
    setModalContent("Add water");
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setOpenModal(false);
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

      <AddWater onClick={handleAddWater}/>

      <Modal open={openModal} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
    </StyledTodayWrapper>
  );
};

export default Today;
