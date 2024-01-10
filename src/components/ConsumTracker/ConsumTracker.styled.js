import styled from "styled-components";
import CalendarSvg from "../../images/svg+logo/svgs/calendar.svg";
import PresentationSvg from "../../images/svg+logo/svgs/presentation.svg";
import ToolsSvg from "../../images/svg+logo/svgs/tools.svg";

export const SubTitle = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: var(--medium);
  line-height: calc(20 / 18);
  margin-bottom: 18px;
`;
export const BenefitsList = styled.ul`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const BenefitsItems = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const CalendarIcon = styled.img.attrs({ src: CalendarSvg })`
  margin-right: 8px;
  @media only screen and (max-width: 767px) {
    height: 32px;
    width: 32px;
  }
`;

export const StatisticsIcon = styled.img.attrs({ src: PresentationSvg })`
  margin-right: 8px;
  @media only screen and (max-width: 767px) {
    height: 32px;
    width: 32px;
  }
`;

export const SettingsIcon = styled.img.attrs({ src: ToolsSvg })`
  margin-right: 8px;
  @media only screen and (max-width: 767px) {
    height: 32px;
    width: 32px;
  }
`;
export const TryTrackerBtn = styled.button`
  margin-bottom: 40px;
  width: 100%;
  padding: 8px 30px;
  border: none;
  border-radius: 10px;
  background-color: var(--dark-blue);

  color: var(--white);
  font-size: 16px;
  font-style: normal;
  font-weight: var(--medium);
  line-height: calc(20 / 16);
  @media only screen and (min-width: 767px) {
    width: 336px;
    padding: 10px 30px;
  }
`;
