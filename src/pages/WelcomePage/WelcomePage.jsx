import { useState } from "react";
import ConsumTracker from "../../components/ConsumTracker/ConsumTracker";
import WhyDrinkWater from "../../components/WhyDrinkWater/WhyDrinkWater";
import { Descr, Div, H1 } from "./WelcomePage.styled";
import UserSettings from "../../components/Modals/UserSettings/UserSettings";
import DailyNorma from "../../components/Modals/DailyNorma/DailyNorma";
import DropDown from "../../components/Modals/DropDown/DropDown";
const WelcomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDailyNormaOpen, setIsDailyNormaOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  //*

  const handleOpenDailyNorma = () => {
    setIsDailyNormaOpen(true);
  };

  const handleCloseDailyNorma = () => {
    setIsDailyNormaOpen(false);
  };
  return (
    <>
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
      <button type="button" onClick={handleOpenModal}>
        Settings
      </button>
      <button type="button" onClick={handleOpenDailyNorma}>
        Norma
      </button>
      <UserSettings handleClose={handleCloseModal} isModalOpen={isModalOpen} />
      <DailyNorma
        handleClose={handleCloseDailyNorma}
        isModalOpen={isDailyNormaOpen}
      />
      <DropDown />
    </>
  );
};
export default WelcomePage;
