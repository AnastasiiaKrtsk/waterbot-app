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
import logoIcon2 from "../../images/svg+logo/svgs/user.svg";

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
                <LogoText>Tracker of water</LogoText>
              </LogoContent>
            </DivWrapper>
          </NavLink>

          <SignIn onClick={handleSignIn}>
            <NavLink to="/" end>
              <DivWrapper>
                <SignInText>Sign in</SignInText>
                <SignInImg src={logoIcon2} alt="" width={28} />
              </DivWrapper>
            </NavLink>
          </SignIn>
        </WrapperHeader>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <Suspense fallback={null}></Suspense>
    </div>
  );
};

export default Layout;
