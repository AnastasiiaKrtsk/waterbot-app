import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  padding: 24px 12px;

  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  border-radius: 10px;
  background: #fff;

  /* width: 592px; */
  position: relative;
  @media screen and (min-width: 320px) {
    padding: 32px 24px;
  }
`;

export const StyledSvg = styled.svg`
  position: absolute;
  right: 24px;
  top: 36px;
  cursor: pointer;

  &:hover {
    transform: rotate(85deg);
    transition: transform 0.5s ease-in-out;
  }
`;

export const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledEditTitle = styled.h2`
  color: var(--black);

  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;

export const StyledCurrentValue = styled.div`
  display: flex;
  padding: 8px 24px;
  align-items: center;
  gap: 12px;

  width: 254px;

  border-radius: 10px;
  background: var(--light-blue-1);
`;

export const StyledCorrectDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledEditSubTitle = styled.h3`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  width: auto;
  @media only screen and (min-width: 320px) {
    width: 240px;
  }
`;

export const StyledNewAmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledTitle = styled.h4`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;

  width: 194px;
`;

export const StyledIncreaseDecreaseBtn = styled.button`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 44px;
  height: 44px;

  border-radius: 30px;
  border: 1px solid var(--light-blue-3);
  background: #fff;
  background-color: transparent;

  &:hover {
    box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
  }
  transition: box-shadow var(--transition);
`;

export const StyledNewAmount = styled.div`
  display: flex;
  padding: 10px 25px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 40px;
  background: var(--light-blue-2);

  color: var(--dark-blue);

  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const StyledRecordingTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledRecordingTimeTitle = styled.div``;

export const StyledUsedWater = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledSaveBtn = styled.button`
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 18);

  color: var(--white);
  border: none;
  border-radius: 10px;
  background: var(--dark-blue);
  width: 256px;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    transition: box-shadow 0.5s ease-in-out;
  }
  @media only screen and (min-width: 767px) {
    width: 160px;
  }
`;
// @media screen and (min-width: 768px) {
//     padding-left: 32px;
//     padding-right: 32px;
//   }
export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self: center;

  gap: 24px;
  @media only screen and (min-width: 768px) {
    align-self: flex-end;
    flex-direction: row;
  }
`;

export const StyledSpan = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  color: var(--dark-blue);
`;

export const StyledMainParagraphEdit = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: var(--dark-blue);
`;

export const StyledSecondaryParagraphEdit = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;

  color: var(--black);
`;
