import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logoIcon from "../../images/svg+logo/logo-icon.jpg";
import { useDispatch, useSelector } from "react-redux";

import {
  selectAvatarUrl,
  selectUsername,
  selectToken,
  selectOpenModal,
  selectModalContent,
} from "../../redux/selectors";

import {
  AvatarInMenu,
  AvatarWrapper,
  DivWrapper,
  DownSvg,
  DropMenuBtn,
  LogoContent,
  LogoText,
  SignIn,
  SignInImg,
  SignInText,
  WrapperHeader,
} from "./Layout.styled";
import sprite from "../../images/svg+logo/sprite.svg";
import Loader from "../Loader/Loader";
import { setModalContent, setModalStatus } from "../../redux/slice";

const Layout = () => {
  const token = useSelector(selectToken);
  const name = useSelector(selectUsername);
  const avatar = useSelector(selectAvatarUrl);

  const dispatch = useDispatch();

  const modalStatus = useSelector(selectOpenModal);

  const openModal = useSelector(selectOpenModal);
  const ModalContent = useSelector(selectModalContent);

  const handleOpenUserModal = () => {
    dispatch(setModalStatus(!modalStatus));
    dispatch(setModalContent("OpenUserModal"));
  };

  return (
    <>
      {token ? (
        <>
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

              <SignIn>
                <DivWrapper>
                  {name}
                  <AvatarWrapper>
                    <AvatarInMenu src={avatar} alt="" width={28} />
                  </AvatarWrapper>
                  <DropMenuBtn type="button" onClick={handleOpenUserModal}>
                    <DownSvg
                      width="18"
                      height="10"
                      $transform={
                        openModal === true && ModalContent === "OpenUserModal"
                      }
                    >
                      <use href={`${sprite}#arrow-down`} />
                    </DownSvg>
                  </DropMenuBtn>
                </DivWrapper>
              </SignIn>
            </WrapperHeader>
          </header>

          <main>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>
        </>
      ) : (
        <>
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

              <SignIn>
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
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>
        </>
      )}
    </>
  );
};

export default Layout;
