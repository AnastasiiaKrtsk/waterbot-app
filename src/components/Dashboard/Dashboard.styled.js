import styled from "styled-components";
import bootleDesktop from "../../images/desktop/Desk-Botle-Home-screen@1x.png";
import bootleTablet from "../../images/tablet/Tablet-Bottle-Home-Screen@1x.png";
import bottleMob from "../../images/mobile/Mobile-Bottle-home-screen@1x.png";

export const StyledDashboardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: flex;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    overflow: hidden;
    justify-content: center;
    // padding: 30px 112px;
    padding-top: 30px;
    gap: 36px;
    flex-direction: row;
  }
`;

export const StyledLeftPartWrapper = styled.div`
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 232px;

  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${bottleMob});

  @media screen and (min-width: 768px) {
    margin-top: 0;
    padding: 40px 32px;
    gap: 326px;

    background-position: center;
    background-image: url(${bootleTablet});
  }

  @media screen and (min-width: 1440px) {
    padding: 0px;
    gap: 446px;
    background-position: top;
    background-image: url(${bootleDesktop});
  }
`;

export const StyledWaterInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 32px 0 40px;

  padding: 24px 8px;
  width: 280px;

  border-radius: 10px;
  background: var(--light-blue-1);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    margin: 0px;
    margin-bottom: 44px;
    width: 704px;
    height: 688px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
  }
`;

export const StyledProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 43px;
  height: 90px;

  margin: auto 0 56px;

  @media screen and (min-width: 768px) {
    align-items: flex-end;
    flex-direction: row;
    margin: 0;
  }
`;
