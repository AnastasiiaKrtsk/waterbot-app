import styled from "styled-components";

export const ModalUserMenu = styled.div`
  position: absolute;
  right: 20px;
  top: 60px;
  padding: 16px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  background: var(--Primery-Color-White, #fff);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  @media screen and (min-width: 1440px) {
    right: 112px;
  }
`;

export const BackdropUserMenu = styled.div`
  display: flex;
  justify-content: center;
  padding: 44px 20px;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  overflow: scroll;
`;

export const MenuBtns = styled.button`
  padding: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  background-color: transparent;
  color: var(--dark-blue);
  &:hover {
    color: var(--orange);
  }
  transition: color var(--transition);
`;

export const MenuBtnSvg = styled.svg`
  &:hover {
    stroke: var(--orange);
  }
`;
// export const SettingsBtn = styled.button``;
