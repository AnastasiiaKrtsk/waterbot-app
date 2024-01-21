import styled from "styled-components";
import WelcomeBgMobile from "../../images/mobile/Mobile-Background-Main-Page2@1x.png";
import WelcomeBgMobile2 from "../../images/mobile/Mobile-Background-element-Sign-In@1x.png";
import WelcomeBgTablet from "../../images/tablet/Tablet-Background-Main-Page2@1x.png";
import WelcomeBgTablet2 from "../../images/tablet/Tablet-Background-Main-Page2bubble@1x.png";
import WelcomeBgDesktop from "../../images/desktop/Desk-Background-Main-Page2@1x.png";
import WelcomeBgDesktop2 from "../../images/desktop/Desk-Background-element-Main-Page@1x.png";

export const WelcomePageWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const WelcomeBg = styled.div`
  position: fixed;
  z-index: -999;
  width: 100vw;
  height: 91vh;
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
export const Welcome2Bg = styled.div`
  position: fixed;
  z-index: -999;
  top: 0;
  width: 100vw;
  height: 87vh;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-image: url(${WelcomeBgMobile2});
  overflow: hidden;

  @media screen and (min-width: 768px) {
    background-image: url(${WelcomeBgTablet2});
  }

  @media screen and (min-width: 1440px) {
    background-size: contain;

    background-image: url(${WelcomeBgDesktop2});
  }
`;
export const H1 = styled.h1`
  font-size: 28px;
  font-weight: var(--bold);
  line-height: 1.14;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const Descr = styled.h2`
  width: 197px;
  font-size: 24px;
  font-weight: var(--regular);
  line-height: calc(30 / 24);
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 26);
  }
`;

export const Div = styled.div`
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
  @media only screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 81px;
    margin-top: 80px;
  }
`;
