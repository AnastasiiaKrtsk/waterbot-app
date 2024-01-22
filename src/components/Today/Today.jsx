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

import { useDispatch, useSelector } from "react-redux";
import sprite from "../../images/svg+logo/sprite.svg";
import {
  selectChooseDate,
  selectOpenModal,
  selectTodayWater,
} from "../../redux/selectors";
import {
  setIdForEditDelete,
  setModalContent,
  setModalStatus,
} from "../../redux/slice";
import moment from "moment";
import { useEffect } from "react";
import { getWaterDayThunk, getWaterMonthThunk } from "../../redux/thunks";

const Today = () => {
  const dispatch = useDispatch();
  const toDay = useSelector(selectChooseDate);
  const monthYear = {
    year: moment(toDay).year().toString(),
    month: (moment(toDay).month() + 1).toString().padStart(2, 0),
  };

  useEffect(() => {
    dispatch(getWaterDayThunk());
    dispatch(getWaterMonthThunk(monthYear));
  }, []);

  const modalStatus = useSelector(selectOpenModal);
  const todayWater = useSelector(selectTodayWater);

  const handleEditWater = (id) => {
    dispatch(setModalStatus(!modalStatus));
    dispatch(setModalContent("EditWaterForm"));
    dispatch(setIdForEditDelete(id));
  };
  const handleDeleteWater = (id) => {
    dispatch(setModalStatus(!modalStatus));
    dispatch(setModalContent("Delete"));
    dispatch(setIdForEditDelete(id));
  };
  const handleAddWater = () => {
    dispatch(setModalStatus(!modalStatus));
    dispatch(setModalContent("Add water"));
  };

  const waterDayListItems = todayWater.userWaterDay?.map(
    ({ _id, waterVolume, date }) => (
      <StyledTodayWaterItem key={_id}>
        <StyledWaterInfo>
          <svg width={"36px"} height={"36px"}>
            <use href={sprite + "#icon-water-glass"}></use>
          </svg>
          <StyledWaterVolume>{waterVolume} ml</StyledWaterVolume>{" "}
          {moment(date).utc().format("LT")}
        </StyledWaterInfo>
        <StyledTodayButtonsWrapper>
          <EditWater onClick={() => handleEditWater(_id)} />
          <DeleteWater onClick={() => handleDeleteWater(_id)} />
        </StyledTodayButtonsWrapper>
      </StyledTodayWaterItem>
    )
  );

  return (
    <StyledTodayWrapper>
      <StyledTodayTitle>Today</StyledTodayTitle>
      <StyledTodayWaterList>{waterDayListItems}</StyledTodayWaterList>
      <AddWater onClick={handleAddWater} />
    </StyledTodayWrapper>
  );
};

export default Today;
