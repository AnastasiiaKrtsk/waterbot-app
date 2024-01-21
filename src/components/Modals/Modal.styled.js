import styled from "styled-components";

export const StyledBackdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModalContent = styled.div`
  background: white;
  overflow: auto;

  border-radius: 10px;
`;
