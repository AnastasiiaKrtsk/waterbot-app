import { useDispatch, useSelector } from "react-redux";
import AddWaterBlue from "../Buttons/AddWater/AddWaterBlue";
import { selectOpenModal, selectTodayWater } from "../../redux/selectors";
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
import NormaWater from "./NormaWater/NormaWater";

const Dashboard = () => {
  const todayWater = useSelector(selectTodayWater);
  const dispatch = useDispatch();
  const modalStatus = useSelector(selectOpenModal);

  const handleAddWater = () => {
    dispatch(setModalStatus(!modalStatus));
    dispatch(setModalContent("Add water"));
  };

  const waterProgressBar =
    todayWater.percentDailyNormaUser > 100
      ? 100
      : todayWater.percentDailyNormaUser;

  return (
    <>
      <StyledDashboardWrapper>
        <StyledLeftPartWrapper>
          <NormaWater />
          <StyledProgressWrapper>
            <WaterProgress value={waterProgressBar} />
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
