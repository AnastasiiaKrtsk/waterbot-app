import styled from "styled-components";

export const StyledMonthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const StyledMonthTitle = styled.div`
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;

export const StyledMonthChanger = styled.div`
  display: flex;
  /* justify-content: flex-end; */
  align-items: center;
  gap: 12px;
`;

export const StyledMonthWaterList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px 26px;
  width: 264px;

  @media screen and (min-width: 768px) {
    width: 100%;
    gap: 20px 34px;
  }
  @media screen and (min-width: 1440px) {
    gap: 20px 22px;
  }
`;

export const StyledWaterListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const StyledMonthWaterItem = styled.li`
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  margin-bottom: 4px;

  border-radius: 50%;
  /* border: 1px solid blue; */
  background-color: var(--white);
  /* border-radius: ${(props) => (props.$borderMarker ? "20px" : null)}; */
  outline: ${(props) =>
    props.$borderMarker ? "1px solid var(--orange)" : null};

  @media screen and (min-width: 1440px) {
    width: 34px;
    height: 34px;
  }
`;

export const StyledPercentage = styled.div`
  color: var(--light-blue-3);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const StyledMonthName = styled.div`
  color: var(--dark-blue);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const StyledPrevMonth = styled.button`
  /* display: flex;
  align-items: center;
  justify-content: center; */

  border: none;
  background-color: transparent;
  width: 14px;
  height: 14px;
  padding: 0;
`;
export const StyledNextMonth = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;
  width: 14px;
  height: 14px;
  padding: 0;
`;

export const StyledDateParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  display: flex;
  justify-content: space-between;

  color: var(--dark-blue);
`;

export const StyledMonthParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

export const StylesBlueSpan = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;

  margin-left: 6px;

  color: var(--dark-blue);
`;

export const StyledDayToolTipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 254px;

  @media screen and (min-width: 768px) {
    width: 262px;
  }
`;
