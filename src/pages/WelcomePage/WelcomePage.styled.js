import styled from "styled-components";

import bubbles from "../../images/desktop/Not-Found-Bg2@1x.png";
import bubblesTab from "../../images/tablet/Tablet-Background-Main-Page2bubble@1x.png";
import bubblesMob from "../../images/mobile/Mobile-Background-element-Sign-In@2x.png";
import wave from "../../images/desktop/Not-Found-Bg@1x.png";
import waveTab from "../../images/tablet/Tablet-Background-Main-Page2@1x.png";
import waveMob from "../../images/mobile/Mobile-Background-Main-Page2@1x.png";
import bottle from "../../images/mobile/Mobile-Bottle-home-screen@1x.png";

export const WelcomeBg2 = styled.div`
  background-size: auto;
  background-repeat: no-repeat;
  background-position: top, bottom;
  background-image: url(${bubblesMob}), url(${waveMob});
  width: 100vw;

  @media screen and (min-width: 768px) {
    background-image: url(${bubblesTab}), url(${waveTab});
    height: 89vh;
  }

  @media screen and (min-width: 1440px) {
    background-position: right bottom, top, bottom;
    background-size: auto, contain, contain;
    background-image: url(${bottle}), url(${bubbles}), url(${wave});
    height: 82.5vh;
  }
`;

export const WelcomePageWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 24px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    padding-left: 32px;
    padding-right: 32px;
    margin-bottom: 0;
  }
  @media only screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 150px;
    margin-top: 80px;
    margin-bottom: 100px;
  }
`;

export const H1 = styled.h1`
  font-size: 28px;
  font-weight: var(--bold);
  line-height: 1.14;
  margin-bottom: 16px;
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
