import styled from "styled-components";
export const H1 = styled.h1`
  font-size: 28px;
  font-weight: var(--bold);
  line-height: 1.14;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const Descr = styled.h2`
  font-size: 24px;
  font-weight: var(--regular);
  line-height: calc(30 / 24);
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 26);
  }
`;
export const Div = styled.div`
  @media only screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 81px;
  }
`;
