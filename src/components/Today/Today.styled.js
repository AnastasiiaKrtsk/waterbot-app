import styled from "styled-components";

export const StyledTodayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 544px;
  height: 260px;
`;

export const StyledTodayTitle = styled.div`
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 16px;
`;

export const StyledTodayWaterList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-bottom: 12px;

  //Firefox
  scrollbar-color: var(--light-blue-3) transparent;
  scrollbar-width: thin;

  //Chrome, Safari, Opera)
  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--light-blue-2);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--light-blue-3);
    border-radius: 4px;
  }
`;

export const StyledTodayWaterItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 99%;
  padding: 12px 4px;
  border-bottom: 1px solid var(--light-blue-2);
`;

export const StyledWaterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledWaterVolume = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: var(--dark-blue);
`;

export const StyledTodayButtonsWrapper = styled.div`
  display: flex;
  gap: 18px;
`;
