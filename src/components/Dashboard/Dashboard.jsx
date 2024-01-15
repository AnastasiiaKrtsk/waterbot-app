// import AddWater from "../Buttons/AddWater/AddWater"
import AddWaterBlue from "../Buttons/AddWater/AddWaterBlue";
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
  return (
    <>
      <NormaBtn />
      <StyledDashboardWrapper className="container">
        <StyledProgressWrapper>
          <WaterProgress />
          <AddWaterBlue />
        </StyledProgressWrapper>
        <StyledWaterInfoWrapper>
          <Today />
          <Month />
        </StyledWaterInfoWrapper>
      </StyledDashboardWrapper>
    </>
  );
};

export default Dashboard;
