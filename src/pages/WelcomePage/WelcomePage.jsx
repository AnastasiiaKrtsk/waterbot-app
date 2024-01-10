import { useState } from "react";
import ConsumTracker from "../../components/ConsumTracker/ConsumTracker";
import WhyDrinkWater from "../../components/WhyDrinkWater/WhyDrinkWater";
import { Descr, Div, H1 } from "./WelcomePage.styled";
import UserSettings from "../../components/Modals/UserSettings/UserSettings";
const WelcomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
      <UserSettings handleClose={handleCloseModal} isModalOpen={isModalOpen} />
    </>
  );
};
export default WelcomePage;
