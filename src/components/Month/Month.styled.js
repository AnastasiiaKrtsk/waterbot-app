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
  flex-wrap: wrap;
  gap: 20px 22px;
  width: 264px;

  @media screen and (min-width: 768px) {
    width: 100%;
    gap: 20px 34px;
  }
`;

export const StyledWaterListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor:pointer;
`;

export const StyledMonthWaterItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  /* border: 1px solid blue; */
  background-color: var(--white);
  /* border-radius: ${props => props.$borderMarker ? '20px' : null}; */
  outline: ${props => props.$borderMarker ? '1px solid var(--orange)' : null};
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
