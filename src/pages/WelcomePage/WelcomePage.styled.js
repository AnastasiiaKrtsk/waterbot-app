import styled from "styled-components";

import bubbles from "../../images/desktop/Not-Found-Bg2@1x.png";
import bubblesTab from "../../images/tablet/Tablet-Background-Main-Page2bubble@1x.png";
import bubblesMob from "../../images/mobile/Mobile-Background-element-Sign-In@2x.png";
import wave from "../../images/desktop/Not-Found-Bg@1x.png";
import waveTab from "../../images/tablet/Tablet-Background-Main-Page2@1x.png";
import waveMob from "../../images/mobile/Mobile-Background-Main-Page2@1x.png";

export const WelcomeBg = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${bubblesMob});
  margin: auto;
  max-width: 320px;

  @media screen and (min-width: 768px) {
    background-image: url(${bubblesTab});
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    background-position: top;
    background-size: contain;
    background-image: url(${bubbles});
    max-width: 1440px;
  }
`;

export const WelcomeBg2 = styled.div`
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${waveMob});
  margin: auto;
  max-width: 320px;
  height: 950px;

  @media screen and (min-width: 768px) {
    background-image: url(${waveTab});
    max-width: 768px;
    max-height: 700px;
  }

  @media screen and (min-width: 1440px) {
    background-position: bottom;
    background-size: contain;
    background-image: url(${wave});

    max-width: 1440px;
    max-height: 660px;
  }
`;

export const WelcomePageWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 24px;
  margin-bottom: 40px;

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
