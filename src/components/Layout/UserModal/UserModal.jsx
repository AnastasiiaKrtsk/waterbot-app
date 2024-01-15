import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import {
  BackdropUserMenu,
  MenuBtnSvg,
  MenuBtns,
  ModalUserMenu,
} from "./UserModal.styled";
import sprite from "../../../images/svg+logo/sprite.svg";
import UserSettings from "../../../components/Modals/UserSettings/UserSettings";
import AreYouSureModal from "../../Modals/AreYouSure/AreYouSureModal";

const UserModal = ({ handleClose, isModalOpen }) => {
  const [isModalSettingsOpen, setIsModalSettingsOpen] = useState(false);
  const [isLogOutOpen, setIsLogoutModalOpen] = useState(false);

  const normaRoot = document.getElementById("modal");

  // *Settings Modal

  const handleOpenModal = () => {
    setIsModalSettingsOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalSettingsOpen(false);
  };

  // *Log Out

  const handleLogOutOpenModal = () => {
    setIsLogoutModalOpen(true);
  };

  const handleLogOutCloseModal = () => {
    setIsLogoutModalOpen(false);
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
            <MenuBtns type="button" onClick={handleOpenModal}>
              <MenuBtnSvg width="20" height="20">
                <use href={`${sprite}#settings`} />
              </MenuBtnSvg>
              Settings
            </MenuBtns>
            <UserSettings
              isModalOpen={isModalSettingsOpen}
              handleClose={handleCloseModal}
            />
            <MenuBtns type="button" onClick={handleLogOutOpenModal}>
              <MenuBtnSvg width="17" height="17">
                <use href={`${sprite}#exit`} />
              </MenuBtnSvg>
              Log Out
            </MenuBtns>
            <AreYouSureModal
              isModalOpen={isLogOutOpen}
              handleClose={handleLogOutCloseModal}
              title="Log out"
              message="Do you really want to leave?"
              firstButton="Log out"
              cancelButton="Cancel"
            />
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
