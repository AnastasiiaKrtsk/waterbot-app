import ConsumTracker from "../../components/ConsumTracker/ConsumTracker";
import WhyDrinkWater from "../../components/WhyDrinkWater/WhyDrinkWater";
import { Descr, Div, H1 } from "./WelcomePage.styled";
const WelcomePage = () => {
  const isModalOpen = () => {};
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

      <button type="button" onClick={isModalOpen}>
        Settings
      </button>
    </>
  );
};
export default WelcomePage;
