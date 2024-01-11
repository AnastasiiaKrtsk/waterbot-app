import moment from "moment";
import { useEffect, useState } from "react";
import {
  StyledMonthChanger,
  StyledMonthName,
  StyledMonthTitle,
  StyledMonthWaterItem,
  StyledMonthWaterList,
  StyledMonthWrapper,
  StyledNextMonth,
  StyledPercentage,
  StyledPrevMonth,
  StyledWaterListItemWrapper,
} from "./Month.styled";

import sprite from "../../images/svg+logo/sprite.svg";

const Month = () => {
  const [shownDate, setShownDate] = useState(moment());
  const [daysInMonth, setDaysInMonth] = useState(moment().daysInMonth());
  const [isCurrentMonth, setIsCurrentMonth] = useState(false);

  useEffect(() => {
    setDaysInMonth(shownDate.daysInMonth());
    const currentMonth = moment();
    setIsCurrentMonth(shownDate.isSame(currentMonth, "month"));
  }, [shownDate]);

  const prevMonth = () => {
    setShownDate(shownDate.clone().subtract(1, "months"));
  };

  const nextMonth = () => {
    setShownDate(shownDate.clone().add(1, "months"));
  };

  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );
  return (
    <div>
      <StyledMonthWrapper>
        <StyledMonthTitle>Month</StyledMonthTitle>
        <StyledMonthChanger>
          <StyledPrevMonth onClick={prevMonth}>
            <svg width={"16px"} height={"16px"}>
              <use href={sprite + "#icon-left"}></use>
            </svg>
          </StyledPrevMonth>
          <StyledMonthName>{shownDate.format("MMMM YYYY")}</StyledMonthName>
          <StyledNextMonth onClick={nextMonth} disabled={isCurrentMonth}>
          <svg width={"16px"} height={"16px"}>
              <use href={sprite + "#icon-right"}></use>
            </svg>
          </StyledNextMonth>
        </StyledMonthChanger>
      </StyledMonthWrapper>
      <StyledMonthWaterList>
        {daysArray.map((day) => (
          <StyledWaterListItemWrapper key={day}>
            <StyledMonthWaterItem>{day}</StyledMonthWaterItem>
            <StyledPercentage>0%</StyledPercentage>
          </StyledWaterListItemWrapper>
        ))}
      </StyledMonthWaterList>
    </div>
  );
};

export default Month;
