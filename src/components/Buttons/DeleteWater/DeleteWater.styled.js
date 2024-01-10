import styled from "styled-components";

export const StyledDeleteWaterButton = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  width: 16px;
  height: 16px;

  &:hover::after {
    content: "";
    position: absolute;
    left: 5px;
    bottom: -6px;
    width: 100%;
    height: 1px;
    background-color: var(--red);
    border-radius: 1px;
  }
`;
