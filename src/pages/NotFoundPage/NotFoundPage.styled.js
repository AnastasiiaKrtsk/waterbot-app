import styled from "@emotion/styled";
import bgMobile from "../../images/sign/bgMobile.png";
import bgTablet from "../../images/sign/bgTable.png";
import bgDesktop from "../../images/desktop/Not-Found-Bg2@1x.png";
import WelcomeBgMobile from "../../images/mobile/Mobile-Background-Main-Page2@1x.png";
import WelcomeBgTablet from "../../images/tablet/Not-Found-Page-Bg@1x.png";
import WelcomeBgDesktop from "../../images/desktop/Not-Found-Bg@1x.png";

export const NotFoundBg = styled.div`
  position: fixed;
  z-index: -999;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  background-image: url(${WelcomeBgMobile});
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 87vh;
    background-image: url(${WelcomeBgTablet});
  }

  @media screen and (min-width: 1440px) {
    background-position: bottom;
    background-size: contain;
    height: 83vh;
    background-image: url(${WelcomeBgDesktop});
  }
`;
export const NotFoundBg2 = styled.div`
  position: fixed;
  z-index: -999;
  width: 100vw;
  height: 100vh;
  top: 0;
  margin-top: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
  background-image: url(${bgMobile});

  @media screen and (min-width: 768px) {
    background-image: url(${bgTablet});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${bgDesktop});
  }
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`;
export const NotFound404 = styled.p`
  text-transform: uppercase;
  font-size: 80px;
  font-weight: var(--bold);
  color: var(--dark-blue);
  text-shadow: 3px 4px 4px #aebbd8;
  @media screen and (min-width: 768px) {
    text-shadow: 3px 4px 4px #8296c1;
  }
`;
export const NotFoundH1 = styled.p`
  text-transform: uppercase;
  font-size: 35px;
  font-weight: var(--bold);
  color: #5f5f5f;
  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

export const NotFoundText = styled.p`
  font-size: 12px;

  text-transform: uppercase;
  color: #797979;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
export const NotFoundHomeBtn = styled.button`
  margin-top: 16px;
  width: 100%;
  padding: 8px 30px;
  border: none;
  border-radius: 10px;
  background-color: var(--dark-blue);

  color: var(--white);
  text-transform: uppercase;
  font-size: 16px;
  font-style: normal;
  font-weight: var(--medium);
  line-height: calc(20 / 16);
  @media only screen and (min-width: 767px) {
    width: 200px;
    padding: 10px 30px;
  }
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    transition: box-shadow var(--transition);
  }
`;
