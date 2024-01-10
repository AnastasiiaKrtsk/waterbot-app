import { WhyItem, WhyList, WhyText, WhyWrapper } from "./WhyDrinkWater.styled";

const WhyDrinkWater = () => {
  return (
    <>
      <WhyWrapper>
        <WhyText>Why drink water</WhyText>
        <WhyList>
          <WhyItem>Supply of nutrients to all organs</WhyItem>
          <WhyItem>Providing oxygen to the lungs</WhyItem>
          <WhyItem>Maintaining the work of the heart</WhyItem>
          <WhyItem>Release of processed substances</WhyItem>
          <WhyItem>Ensuring the stability of the internal environment</WhyItem>
          <WhyItem>Maintaining within the normal temperature</WhyItem>
          <WhyItem>
            Maintaining an immune system capable of resisting disease
          </WhyItem>
        </WhyList>
      </WhyWrapper>
    </>
  );
};
export default WhyDrinkWater;
