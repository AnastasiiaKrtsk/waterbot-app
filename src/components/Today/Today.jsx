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
import { selectOpenModal, selectTodayWater } from "../../redux/selectors";
import { setModalContent, setModalStatus } from "../../redux/slice";
import moment from "moment";
import { useEffect } from "react";
import { getWaterDayThunk, getWaterMonthThunk } from "../../redux/thunks";

const Today = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWaterDayThunk());
    // dispatch(getWaterMonthThunk())
  }, []);

  const modalStatus = useSelector(selectOpenModal);
  const todayWater = useSelector(selectTodayWater);

  const handleEditWater = () => {
    dispatch(setModalStatus(!modalStatus));
    dispatch(setModalContent("EditWaterForm"));
  };
  const handleDeleteWater = () => {
    dispatch(setModalStatus(!modalStatus));
    dispatch(setModalContent("Delete"));
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
          {moment(date).format("LT")}
        </StyledWaterInfo>
        <StyledTodayButtonsWrapper>
          <EditWater onClick={handleEditWater} />
          <DeleteWater onClick={handleDeleteWater} />
        </StyledTodayButtonsWrapper>
      </StyledTodayWaterItem>
    )
  );

  //   _id(pin):"65a9194f061a6952026db88c"
  // waterVolume(pin):123
  // date(pin):"2024-01-18T01:02:00.000Z"
  // owner(pin):"65a835fe8acf942ad1efbfd5"
  // createdAt(pin):"2024-01-18T12:27:59.660Z"
  // updatedAt(pin):"2024-01-18T12:27:59.660Z"

  return (
    <StyledTodayWrapper>
      <StyledTodayTitle>Today</StyledTodayTitle>
      <StyledTodayWaterList>{waterDayListItems}</StyledTodayWaterList>
      <AddWater onClick={handleAddWater} />
    </StyledTodayWrapper>
  );
};

export default Today;
