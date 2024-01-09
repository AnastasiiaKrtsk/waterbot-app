import styled from "styled-components";

export const StyledEditWaterButton = styled.button`
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
    background-color: var(--light-blue-3);
  }
`;
