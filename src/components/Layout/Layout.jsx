import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logoIcon from "../../images/svg+logo/logo-icon.jpg";
import { Logo, LogoContent, P, SignIn, Wrapper } from "./Layout.styled";
import logoIcon2 from "../../images/svg+logo/svgs/user.svg";
const Layout = () => {
  const handleSignIn = () => {};

  return (
    <div>
      <header>
        <Wrapper>
          <NavLink to="/" end>
            <Logo>
              <img src={logoIcon} alt="" />
              <LogoContent>
                <P>Tracker</P>
                <P>of water</P>
              </LogoContent>
            </Logo>
          </NavLink>

          <SignIn onClick={handleSignIn}>
            <NavLink to="/" end>
              <Logo>
                <p>Sign in</p>
                <img src={logoIcon2} alt="" />{" "}
              </Logo>
            </NavLink>
          </SignIn>
        </Wrapper>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <Suspense fallback={null}></Suspense>
    </div>
  );
};

export default Layout;
