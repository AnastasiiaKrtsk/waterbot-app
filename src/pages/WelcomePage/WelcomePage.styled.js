import styled from "styled-components";
export const H1 = styled.h1`
  font-size: 28px;
  font-weight: var(--bold);
  line-height: 1.14;
  margin-bottom: 16px;
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
