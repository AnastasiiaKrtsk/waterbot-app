import styled from "styled-components";

import bubbles from "../../images/desktop/Desk-Background-element-Main-Page@1x.png";
import bubblesTab from "../../images/tablet/Tablet-Background-element-Home-Screen@1x.png";
import bubblesMob from "../../images/mobile/Mobile-Background-element-Home-screen@1x.png";

export const HomePageWrapper = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${bubblesMob});

  @media screen and (min-width: 768px) {
    background-position: top center;
    background-image: url(${bubblesTab});
  }

  @media screen and (min-width: 1440px) {
    background-position: top center;
    background-image: url(${bubbles});
  }
`;
