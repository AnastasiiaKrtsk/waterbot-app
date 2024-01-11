import moment from "moment";
import { useEffect, useState } from "react";
import {
  StyledMonthChanger,
  StyledMonthTitle,
  StyledMonthWaterItem,
  StyledMonthWaterList,
  StyledPercentage,
  StyledWaterListItemWrapper,
} from "./Month.styled";

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
      <StyledMonthTitle>Month</StyledMonthTitle>
      <StyledMonthChanger>
        <button onClick={prevMonth}>-</button>
        <div>{shownDate.format("MMMM YYYY")}</div>
        <button onClick={nextMonth} disabled={isCurrentMonth}>
          +
        </button>
      </StyledMonthChanger>
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
