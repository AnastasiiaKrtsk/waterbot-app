// import AddWater from "../Buttons/AddWater/AddWater"
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddWaterBlue from "../Buttons/AddWater/AddWaterBlue";
// import Modal from "../Modals/Modal";
import { selectOpenModal } from "../../redux/selectors";
import { setModalContent, setModalStatus } from "../../redux/slice";
import Month from "../Month/Month";
import Today from "../Today/Today";
import WaterProgress from "../WaterProgress/WaterProgress";
import {
  StyledDashboardWrapper,
  StyledLeftPartWrapper,
  StyledProgressWrapper,
  StyledWaterInfoWrapper,
} from "./Dashboard.styled";
import NormaWater from "./NormaBtn/NormaWater";

const Dashboard = () => {
  const dispatch = useDispatch();
  const modalStatus = useSelector(selectOpenModal);

  const handleAddWater = () => {
    dispatch(setModalStatus(!modalStatus))
    dispatch(setModalContent("Add water"));
  };



  return (
    <>
      <StyledDashboardWrapper className="container">
        <StyledLeftPartWrapper>
          <NormaWater />
          <StyledProgressWrapper>
            <WaterProgress />
            <AddWaterBlue onClick={handleAddWater} />
          </StyledProgressWrapper>
        </StyledLeftPartWrapper>
        <StyledWaterInfoWrapper>
          <Today />
          <Month />
        </StyledWaterInfoWrapper>
      </StyledDashboardWrapper>
    </>
  );
};

export default Dashboard;
