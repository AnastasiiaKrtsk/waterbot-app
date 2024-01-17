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
  overflow: scroll;

  /* @media only screen and (min-width: 767px) {
    padding: 44px 24px;
  } */
`;
export const ModalDilyNorma = styled.div`
  padding: 32px 12px;
  /* position: fixed; */
  display: inline-flex;
  flex-direction: column;
  border-radius: 10px;
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
`;
export const Formulas2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-bottom: 12px;
`;
export const FormulasText = styled.p``;
export const Formula = styled.p`
  color: var(--dark-blue);
  font-size: 18px;
  font-weight: 400;
  line-height: calc(24 / 18);
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
  padding: 12px 10px;
  margin: 8px 0 16px;
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
  /* Common styles for both cases */
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
  @media only screen and (min-width: 767px) {
    width: 160px;
  }
`;
// export const Formulas = styled.div``;
// export const Formulas = styled.div``;
// export const Formulas = styled.div``;
// export const Formulas = styled.div``;
// export const Formulas = styled.div``;
