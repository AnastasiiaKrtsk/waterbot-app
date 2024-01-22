import moment from "moment";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  StyledDateParagraph,
  StyledDayToolTipWrapper,
  StyledMonthChanger,
  StyledMonthName,
  StyledMonthParagraph,
  StyledMonthTitle,
  StyledMonthWaterItem,
  StyledMonthWaterList,
  StyledMonthWrapper,
  StyledNextMonth,
  StyledPercentage,
  StyledPrevMonth,
  StyledWaterListItemWrapper,
  StylesBlueSpan,
} from "./Month.styled";

import { StyledCloseSvg } from "../Modals/UserSettings/StyledSettingsUser.js";

import sprite from "../../images/svg+logo/sprite.svg";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectChooseDate,
  selectDailyNorma,
  selectMonthWater,
} from "../../redux/selectors";
import { setChooseDate } from "../../redux/slice";
import { getWaterMonthThunk } from "../../redux/thunks";

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    width: 292,
    height: 188,
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 4px 0px rgba(64, 123, 255, 0.30)",
    display: "flex",
    padding: "24px 16px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "16px",
    color: "var(--dark-blue)",
  },
  "@media screen and (min-width: 320px)": {
    [`& .${tooltipClasses.tooltip}`]: {
      width: 280,
      padding: "24px 13px",
    },
  },
});

const Month = () => {
  const shownDate = useSelector(selectChooseDate);
  const monthWaterArray = useSelector(selectMonthWater);
  const dailyNorma = useSelector(selectDailyNorma);

  const dispatch = useDispatch();
  const [daysInMonth, setDaysInMonth] = useState(moment().daysInMonth());
  const [isCurrentMonth, setIsCurrentMonth] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(null);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleItemClick = (day) => {
    setIsTooltipOpen(isTooltipOpen === day ? null : day);
  };

  const handleTooltipClose = () => {
    setIsTooltipOpen(null);
  };

  useEffect(() => {
    setDaysInMonth(moment(shownDate).daysInMonth());
    const currentMonth = moment();
    setIsCurrentMonth(currentMonth.isSame(shownDate, "month"));
    dispatch(
      getWaterMonthThunk({
        year: moment(shownDate).year().toString(),
        month: (moment(shownDate).month() + 1).toString().padStart(2, "0"),
      })
    );
  }, [shownDate,dailyNorma]);

  const prevMonth = () => {
    const newDate = moment(shownDate)
      .clone()
      .subtract(1, "months")
      .toISOString();
    dispatch(setChooseDate(newDate));
  };

  const nextMonth = () => {
    const newDate = moment(shownDate).clone().add(1, "months").toISOString();
    dispatch(setChooseDate(newDate));
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
          <StyledMonthName>
            {moment(shownDate).format("MMMM YYYY")}
          </StyledMonthName>
          <StyledNextMonth onClick={nextMonth} disabled={isCurrentMonth}>
            <svg width={"16px"} height={"16px"}>
              <use href={sprite + "#icon-right"}></use>
            </svg>
          </StyledNextMonth>
        </StyledMonthChanger>
      </StyledMonthWrapper>
      <StyledMonthWaterList>
        {daysArray.map((day) => {
          let percentage = 0;
          let consumptionCount = 0;

          if (monthWaterArray.length) {
            let recordExist = monthWaterArray.find((item) => item.date === day);
            percentage = recordExist ? recordExist.percentDailyNorm : 0;
          }

          const isCenteredDay =
            isMobile && [3, 8, 13, 18, 23, 28].includes(day);

          const placement = isMobile
            ? isCenteredDay
              ? "top"
              : [1, 2, 3, 7, 11, 12, 13, 17, 21, 22, 23, 27, 31].includes(day)
              ? "top-start"
              : "top-end"
            : [1, 2, 3, 4, 11, 12, 13, 14, 21, 22, 23, 24, 31].includes(day)
            ? "top-start"
            : "top-end";

          return (
            <CustomWidthTooltip
              disableHoverListener
              title={
                <StyledDayToolTipWrapper>
                  <StyledDateParagraph>
                    {day + ", " + moment(shownDate).format("MMMM")}
                    <StyledCloseSvg
                      width="24"
                      height="24"
                      onClick={handleTooltipClose}
                    >
                      <use href={`${sprite}#icon-outline`} />
                    </StyledCloseSvg>
                  </StyledDateParagraph>
                  <StyledMonthParagraph>
                    Daily norma:
                    <StylesBlueSpan>
                      {(dailyNorma / 1000).toFixed(1)}
                      <StylesBlueSpan>L</StylesBlueSpan>
                    </StylesBlueSpan>
                  </StyledMonthParagraph>

                  <StyledMonthParagraph>
                    Fulfillment of the daily norm:
                    <StylesBlueSpan>{percentage}%</StylesBlueSpan>
                  </StyledMonthParagraph>

                  <StyledMonthParagraph>
                    How many servings of water:
                    <StylesBlueSpan>{consumptionCount}</StylesBlueSpan>
                  </StyledMonthParagraph>
                </StyledDayToolTipWrapper>
              }
              key={day}
              placement={placement}
              open={isTooltipOpen === day}
              onClose={() => setIsTooltipOpen(null)}
            >
              <StyledWaterListItemWrapper
                key={day}
                onClick={() => handleItemClick(day)}
              >
                <StyledMonthWaterItem $borderMarker={percentage < 100}>
                  {day}
                </StyledMonthWaterItem>
                <StyledPercentage>{percentage}%</StyledPercentage>
              </StyledWaterListItemWrapper>
            </CustomWidthTooltip>
          );
        })}
      </StyledMonthWaterList>
    </div>
  );
};

export default Month;
