import ConsumTracker from "../../components/ConsumTracker/ConsumTracker";
import WhyDrinkWater from "../../components/WhyDrinkWater/WhyDrinkWater";
import {
  Descr,
  Div,
  H1,
  Welcome2Bg,
  WelcomeBg,
  WelcomePageWrapper,
} from "./WelcomePage.styled";

const WelcomePage = () => {
  return (
    <>
      <WelcomeBg />
      <Welcome2Bg />
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
