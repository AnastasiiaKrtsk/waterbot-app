import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logoIcon from "../../images/svg+logo/logo-icon.jpg";
import {
  DivWrapper,
  LogoContent,
  LogoText,
  SignIn,
  SignInImg,
  SignInText,
  WrapperHeader,
} from "./Layout.styled";
import sprite from "../../images/svg+logo/sprite.svg";

const Layout = () => {
  const handleSignIn = () => {};

  return (
    <div>
      <header>
        <WrapperHeader>
          <NavLink to="/" end>
            <DivWrapper>
              <img src={logoIcon} alt="" />
              <LogoContent>
                <LogoText>
                  Tracker <br /> of water
                </LogoText>
              </LogoContent>
            </DivWrapper>
          </NavLink>

          <SignIn onClick={handleSignIn}>
            <NavLink to="/signin" end>
              <DivWrapper>
                <SignInText>Sign in</SignInText>
                <SignInImg width="28" height="28">
                  <use href={`${sprite}#user`} />
                </SignInImg>
              </DivWrapper>
            </NavLink>
          </SignIn>
        </WrapperHeader>
      </header>

      <main>
        <Outlet />
      </main>

      <Suspense fallback={null}></Suspense>
    </div>
  );
};

export default Layout;
