import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 20px 0;

  @media screen and (min-width: 768px) {
    margin: 16px 32px 0;
  }

  @media screen and (min-width: 1440px) {
    margin: 16px 112px 0;
  }
`;

export const P = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  color: var(--dark-blue);
  font-size: 12px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoContent = styled.div`
  flex-direction: column;
`;

export const SignIn = styled.div`
  display: flex;
  align-items: center;

  .signin-icon {
    display: block;
  }

  @media screen and (min-width: 768px) {
    .signin-icon {
      display: none;
    }
  }
`;
