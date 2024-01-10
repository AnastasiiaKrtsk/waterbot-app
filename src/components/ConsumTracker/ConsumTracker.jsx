import {
  BenefitsItems,
  BenefitsList,
  CalendarIcon,
  SettingsIcon,
  StatisticsIcon,
  SubTitle,
  TryTrackerBtn,
} from "./ConsumTracker.styled";
const ConsumTracker = () => {
  const handleToAuth = () => {};
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
      <TryTrackerBtn type="button" onClick={handleToAuth}>
        Try tracker
      </TryTrackerBtn>
    </>
  );
};
export default ConsumTracker;
