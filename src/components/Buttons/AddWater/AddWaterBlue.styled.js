import styled from "styled-components";

export const StyledAddWaterBtnBlue = styled.button`
  display: flex;
  padding: 10px 29px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;

  color: var(--white);

  border: none;
  border-radius: 10px;
  background: var(--dark-blue);
  width: 280px;
  height: 44px;
  /* margin-top: auto; */
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  transition: box-shadow var(--transition);

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 178px;
  }
`;
