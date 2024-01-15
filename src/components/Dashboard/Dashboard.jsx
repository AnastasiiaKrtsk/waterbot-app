// import AddWater from "../Buttons/AddWater/AddWater"
import { useState } from "react";
import AddWaterBlue from "../Buttons/AddWater/AddWaterBlue";
import Modal from "../Modals/Modal";
import Month from "../Month/Month";
import Today from "../Today/Today";
import WaterProgress from "../WaterProgress/WaterProgress";
import {
  StyledDashboardWrapper,
  StyledProgressWrapper,
  StyledWaterInfoWrapper,
} from "./Dashboard.styled";
import NormaBtn from "./NormaBtn/NormaBtn";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleAddWater = () => {
    setModalContent("Add water");
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setOpenModal(false);
  };

  return (
    <>
      <NormaBtn />
      <StyledDashboardWrapper className="container">
        <StyledProgressWrapper>
          <WaterProgress />
          <AddWaterBlue onClick={handleAddWater}/>
        </StyledProgressWrapper>
        <StyledWaterInfoWrapper>
          <Today />
          <Month />
        </StyledWaterInfoWrapper>
      </StyledDashboardWrapper>
      <Modal open={openModal} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
    </>
  );
};

export default Dashboard;
