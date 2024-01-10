import styled from "styled-components";

export const StyledMonthTitle = styled.div`
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 16px;
`;

export const StyledMonthWaterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 22px;

  width:544px;
`;

export const StyledMonthWaterItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  width: 34px;
  /* height: 34px; */
  border-radius: 50%;
  border: 1px solid red;
`;
