import styled from "styled-components";
import WelcomeBgMobile from "../../images/mobile/Mobile-Background-Main-Page@2x.png";
import WelcomeBgTablet from "../../images/tablet/Tablet-Background-Main-Page@2x.png";
import WelcomeBgDesktop from "../../images/desktop/Desk-Background-Main-Page@2x.png";

export const WelcomePageWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const WelcomeBg = styled.div`
  position: absolute;
  z-index: -999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${WelcomeBgMobile});

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    background-image: url(${WelcomeBgTablet});
  }

  @media screen and (min-width: 1440px) {
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${WelcomeBgDesktop});
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
