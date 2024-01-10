import {
  BenefitsItems,
  BenefitsList,
  CalendarIcon,
  SettingsIcon,
  StatisticsIcon,
  SubTitle,
  TryTrackerBtn,
} from "./ConsumTracker.styled";
import { Link } from "react-router-dom";

const ConsumTracker = () => {
  return (
    <>
      <SubTitle>Tracker Benefits</SubTitle>
      <BenefitsList>
        <BenefitsItems>
          <CalendarIcon />
          Habit drive
        </BenefitsItems>
        <BenefitsItems>
          <StatisticsIcon />
          View statistics
        </BenefitsItems>
        <BenefitsItems>
          <SettingsIcon />
          Personal rate setting
        </BenefitsItems>
      </BenefitsList>
      <Link to="/homepage">
        <TryTrackerBtn type="button">Try tracker</TryTrackerBtn>
      </Link>
    </>
  );
};
export default ConsumTracker;
