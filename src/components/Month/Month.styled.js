import styled from "styled-components";

export const StyledMonthTitle = styled.div`
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 16px;
`;

export const StyledMonthChanger = styled.div`
  display: flex;
  justify-content:flex-end;
  align-items:center;
`;

export const StyledMonthWaterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 22px;

  width: 544px;
`;

export const StyledWaterListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledMonthWaterItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  width: 34px;
  /* height: 34px; */
  border-radius: 50%;
  /* border: 1px solid blue; */
  background-color: var(--white);
`;

export const StyledPercentage = styled.div`
  color:var(--light-blue-3);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
