import { useState } from "react";
import ConsumTracker from "../../components/ConsumTracker/ConsumTracker";
import WhyDrinkWater from "../../components/WhyDrinkWater/WhyDrinkWater";
import {
  Descr,
  Div,
  H1,
  WelcomeBg,
  WelcomePageWrapper,
} from "./WelcomePage.styled";
import DailyNorma from "../../components/Modals/DailyNorma/DailyNorma";
import DropDown from "../../components/Modals/DropDown/DropDown";
const WelcomePage = () => {
  const [isDailyNormaOpen, setIsDailyNormaOpen] = useState(false);

  const handleOpenDailyNorma = () => {
    setIsDailyNormaOpen(true);
  };

  const handleCloseDailyNorma = () => {
    setIsDailyNormaOpen(false);
  };
  return (
    <>
      <WelcomeBg />
      <WelcomePageWrapper>
        <Div>
          <div>
            <H1>Water consumption tracker</H1>
            <Descr>Record daily water intake and track</Descr>
            <ConsumTracker />
          </div>
          <div>
            <WhyDrinkWater />
          </div>
        </Div>
      </WelcomePageWrapper>
    </>
  );
};
export default WelcomePage;
