import ConsumTracker from "../../components/ConsumTracker/ConsumTracker";
import WhyDrinkWater from "../../components/WhyDrinkWater/WhyDrinkWater";
import { Descr, H1 } from "./WelcomePage.styled";
const WelcomePage = () => {
  const isModalOpen = () => {};
  return (
    <div>
      <H1>Water consumption tracker</H1>
      <Descr>
        Record daily water <br />
        intake and track
      </Descr>
      <ConsumTracker />
      <WhyDrinkWater />
      <button type="button" onClick={isModalOpen}>
        Settings
      </button>
    </div>
  );
};
export default WelcomePage;
