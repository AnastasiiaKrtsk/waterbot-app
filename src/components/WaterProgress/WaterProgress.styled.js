import styled from "styled-components";

export const StyledWaterProgressWrapper = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 280px;
  /* margin-bottom: 56px; */

  @media screen and (min-width: 768px) {
    width: 356px;
  }
`;

export const StyledProgressTitle = styled.div`
  color: var(--dark-blue);

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
