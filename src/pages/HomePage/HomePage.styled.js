import styled from "styled-components";
import bootleDesktop from "../../images/desktop/Desk-Botle-Home-screen@1x.png";
import bootleTablet from "../../images/tablet/Tablet-Bottle-Home-Screen@1x.png";

import bubbles from "../../images/desktop/Desk-Background-element-Main-Page@1x.png";
import bubblesTab from "../../images/tablet/Tablet-Background-element-Home-Screen@1x.png";

export const HomePageWrapper = styled.div`
  background-size: auto;
  background-repeat: no-repeat;
  background-position: top left, top;

  @media screen and (min-width: 768px) {
    background-position: top center, top;
    // background-image: url(${bootleTablet}), url(${bubblesTab});
    background-image: url(${bubblesTab});
  }

  @media screen and (min-width: 1440px) {
    background-position: top left, top;
    // background-image: url(${bootleDesktop}), url(${bubbles});
    background-image: url(${bubbles});
  }
`;
