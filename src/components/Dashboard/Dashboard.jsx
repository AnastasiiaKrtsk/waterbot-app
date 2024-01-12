// import AddWater from "../Buttons/AddWater/AddWater"
import Month from "../Month/Month";
import Today from "../Today/Today";
import WaterProgress from "../WaterProgress/WaterProgress";
import { StyledDashboardWrapper, StyledWaterInfoWrapper } from "./Dashboard.styled";

const Dashboard = () => {
  return (
    <StyledDashboardWrapper>
      <WaterProgress />
      <StyledWaterInfoWrapper>
        <Today />
        <Month />
      </StyledWaterInfoWrapper>
    </StyledDashboardWrapper>
  );
};

export default Dashboard;
