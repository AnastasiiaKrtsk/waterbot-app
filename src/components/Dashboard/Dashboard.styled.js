import styled from "styled-components";

export const StyledDashboardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledWaterInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 20px 0 40px;
  /* margin-left: auto; */

  padding: 32px 24px;
  width: 592px;

  border-radius: 10px;
  background: var(--light-blue-1);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
`;

export const StyledProgressWrapper = styled.div`
  display: flex;
  gap: 43px;
  height: 90px;
  align-items: flex-end;
  margin: auto 0 56px;
`;
