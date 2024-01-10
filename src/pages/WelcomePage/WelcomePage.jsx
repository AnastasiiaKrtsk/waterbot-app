import ConsumTracker from "../../components/ConsumTracker/ConsumTracker";
import { Descr, H1 } from "./WelcomePage.styled";
const WelcomePage = () => {
  return (
    <div>
      <H1>Water consumption tracker</H1>
      <Descr>
        Record daily water <br />
        intake and track
      </Descr>
      <ConsumTracker />
    </div>
  );
};
export default WelcomePage;
