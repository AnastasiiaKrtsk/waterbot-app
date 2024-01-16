import styled from "styled-components";

export const NormaBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
  flex-direction: column;
  gap: 12px;
  padding: 8px 20px;
  border-radius: 10px;
  border: 1px solid var(--light-blue-2);
  background: var(--white);
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
  width: 164px;
`;
export const NormaResultDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const StyledNormaTitle = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  width: 124px;
`;

export const StyledNormaVolume = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  color: var(--dark-blue);
  width: 54px;
`;

export const StyledEditBtn = styled.button`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--light-blue-4);
  border: none;
  background: transparent;
  padding: 0;
`;
