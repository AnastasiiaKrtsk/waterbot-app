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
  useEffect(() => {
    dispatch(getWaterDayThunk());
    // dispatch(getWaterMonthThunk())
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
          {moment(date).format("LT")}
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
