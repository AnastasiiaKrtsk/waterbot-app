import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";

import {
  BackdropUserMenu,
  MenuBtnSvg,
  MenuBtns,
  ModalUserMenu,
} from "./UserModal.styled";
import sprite from "../../../images/svg+logo/sprite.svg";
import { useDispatch } from "react-redux";
import { logOutThunk } from "../../../redux/thunks";

const UserModal = ({ handleClose, isModalOpen }) => {
  const dispatch = useDispatch();
  const normaRoot = document.getElementById("modals");

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  // *MODAL SETUP
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape" && isModalOpen) {
        handleClose();
      }
    };
    const handleBodyOverflow = () => {
      document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    };
    handleBodyOverflow();
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose, isModalOpen]);
  // *MODAL SETUP

  return isModalOpen
    ? createPortal(
        <BackdropUserMenu onClick={handleOverlayClick}>
          <ModalUserMenu>
            <MenuBtns>
              <MenuBtnSvg width="20" height="20">
                <use href={`${sprite}#settings`} />
              </MenuBtnSvg>
              Settings
            </MenuBtns>
            <MenuBtns onClick={handleLogOut}>
              <MenuBtnSvg width="17" height="17">
                <use href={`${sprite}#exit`} />
              </MenuBtnSvg>
              Log Out
            </MenuBtns>
          </ModalUserMenu>
        </BackdropUserMenu>,
        normaRoot
      )
    : null;
};
UserModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};

export default UserModal;
