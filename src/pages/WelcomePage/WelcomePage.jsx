import { useState } from "react";
import ConsumTracker from "../../components/ConsumTracker/ConsumTracker";
import WhyDrinkWater from "../../components/WhyDrinkWater/WhyDrinkWater";
import { Descr, H1 } from "./WelcomePage.styled";
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
    <div>
      <H1>Water consumption tracker</H1>
      <Descr>
        Record daily water <br />
        intake and track
      </Descr>
      <ConsumTracker />
      <WhyDrinkWater />
      <button type="button" onClick={handleOpenModal}>
        Settings
      </button>
      <UserSettings handleClose={handleCloseModal} isModalOpen={isModalOpen} />
    </div>
  );
};
export default WelcomePage;
