import styled from "@emotion/styled";

export const LogOutBackdrop = styled.div`
  display: flex;
  justify-content: center;
  padding: 84px 20px;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  overflow: scroll;

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
  }
`;

export const StyledModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 32px 24px;
  width: fit-content;
  height: fit-content;
  border-radius: 10px;

  background-color: var(--white);

  @media screen and (min-width: 768px) {
    width: 592px;
  }
`;

export const LogOutCrossDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogOutTitle = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;

  color: var(--black);
`;

export const LogOutPar = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;

  color: var(--black);
`;

export const LogOutBntDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 24px;
  }
`;

export const StyledLogOutButton = styled.button`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  padding: 8px 30px;
  border: none;
  border-radius: 10px;
  background: var(--red);
  color: var(--white);
  &:hover {
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  }
  transition: box-shadow var(--transition);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    width: 160px;

    padding: 10px 30px;
  }
`;

export const StyledCancelButton = styled.button`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  padding: 8px 30px;

  color: var(--dark-blue);

  border: none;
  border-radius: 10px;
  background: var(--light-blue-2);
  &:hover {
    box-shadow: 0px 4px 4px 0px rgba(113, 113, 113, 0.2);
  }
  transition: box-shadow var(--transition);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    width: 160px;

    padding: 10px 30px;
  }
`;
export const CloseSvg = styled.svg`
  cursor: pointer;
`;
