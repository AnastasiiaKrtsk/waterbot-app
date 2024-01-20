import styled from "styled-components";

export const DownSvg = styled.svg`
  transform: ${(props) => (props.$transform ? "rotate(180deg)" : null)};
  transition: transform 0.5s ease-in-out;
`;

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 20px 0px;

  @media screen and (min-width: 768px) {
    margin: 16px 32px 0px;
  }

  @media screen and (min-width: 1440px) {
    margin: 16px 112px 0px;
  }
`;

export const LogoText = styled.p`
  text-transform: uppercase;
  font-weight: var(--bold);
  color: var(--dark-blue);
  font-size: 12px;
`;
export const SignInText = styled.p`
  color: var(--dark-blue);
  font-size: 16px;
  font-weight: var(--regular);
`;
export const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    ${SignInText} {
      color: var(--orange);
    }
  }
  transition: color var(--transition);
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
export const SignInImg = styled.svg`
  margin-left: 4px;
`;

export const DropMenuBtn = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
`;
export const AvatarInMenu = styled.img``;

export const AvatarWrapper = styled.div`
  overflow: hidden;
  border-radius: 50%;
`;
export const NameBtn = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
`;
// export const DropMenuBtn = styled.button``;
