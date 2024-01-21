import styled from "@emotion/styled";

export const BackdropDailyNorma = styled.div`
  display: flex;
  justify-content: center;
  padding: 44px 20px;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(6, 33, 54, 0.4);
  overflow: auto;
`;

export const ModalDailyNorma = styled.div`
  padding: 32px 12px;
  display: inline-flex;
  flex-direction: column;
  border-radius: 10px;
  width: 290px;
  background: var(--white);

  @media only screen and (min-width: 767px) {
    padding: 32px 24px;
    width: 592px;
  }
`;

export const Formulas1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-bottom: 16px;
  margin-right: 24px;

  gap: 4px;
`;
export const Formulas2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-bottom: 12px;

  gap: 4px;
`;

export const Formula = styled.p`
  color: var(--dark-blue);
  font-size: 16px;
  font-weight: 400;
  line-height: calc(24 / 18);

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const FormulaInfo = styled.div`
  border-radius: 10px;
  border: 1px solid var(--light-blue-2);
  padding: 10px;
  margin-bottom: 24px;
`;
export const FormulaInfoText = styled.p`
  color: var(--grey);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(16 / 12);
`;

export const FormulaInput = styled.input`
  width: 100%;
  padding: 12px 10px;
  margin: 8px 0 18px;
  color: var(--dark-blue);
  border: 1px solid var(--light-blue-2);
  font-size: 16px;
  border-radius: 6px;
  &.hide-number-arrows::-webkit-inner-spin-button,
  &.hide-number-arrows::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  &.hide-number-arrows {
    -moz-appearance: textfield;
  }

  &:hover {
    transition: var(--transition);
    box-shadow: 3px 2px 10px 0px rgba(64, 123, 255, 0.2);
  }

  &::placeholder {
    color: var(--dark-blue);
  }
`;

export const CalcBtn = styled.button`
  margin-bottom: 16px;
  width: 100%;
  padding: 8px 30px;
  border: none;
  border-radius: 10px;
  background-color: var(--dark-blue);

  color: var(--white);
  font-size: 16px;
  font-style: normal;
  font-weight: var(--medium);
  line-height: calc(20 / 16);
  @media only screen and (min-width: 767px) {
    width: 336px;
    padding: 10px 30px;
  }
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  transition: box-shadow var(--transition);
`;

export const CalcResult = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const ResultParagraph = styled.p`
  color: var(--dark-blue);
  font-weight: bold;
`;
export const StyledResult = styled(ResultParagraph)``;

export const Amount = styled.p`
  width: 190px;
  @media only screen and (min-width: 767px) {
    width: 328px;
    margin-right: 6px;
  }
`;
export const Formulas = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 767px) {
    flex-direction: row;
  }
`;
export const SaveBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 767px) {
    justify-content: right;
  }
`;
export const SaveBtn = styled.button`
  width: 100%;
  padding: 10px 30px;
  border: none;
  background-color: var(--dark-blue);
  color: var(--white);
  border-radius: 10px;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  transition: box-shadow var(--transition);
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  transition: box-shadow var(--transition);
  @media only screen and (min-width: 767px) {
    width: 160px;
  }
`;

export const DailyInputDiv = styled.div`
  position: relative;
`;

export const Errors = styled.p`
  position: absolute;
  font-size: 10px;
  color: red;
  bottom: 0;
`;

export const SettingDailyGenderList = styled.ul`
  display: flex;
  gap: 24px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
`;
