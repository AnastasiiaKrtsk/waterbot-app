import ConsumTracker from "../../components/ConsumTracker/ConsumTracker";
import WhyDrinkWater from "../../components/WhyDrinkWater/WhyDrinkWater";
import {
  Descr,
  H1,
  WelcomeBg,
  WelcomeBg2,
  WelcomePageWrapper,
} from "./WelcomePage.styled";

const WelcomePage = () => {
  return (
    <>
      <WelcomeBg>
        <WelcomeBg2>
          <WelcomePageWrapper>
            <div>
              <H1>Water consumption tracker</H1>
              <Descr>Record daily water intake and track</Descr>
              <ConsumTracker />
            </div>
            <div>
              <WhyDrinkWater />
            </div>
          </WelcomePageWrapper>
        </WelcomeBg2>
      </WelcomeBg>
    </>
  );
};
export default WelcomePage;
