import sprite from "../../../images/svg+logo/sprite.svg";
import { useDispatch } from "react-redux";
import { logOutThunk } from "../../../redux/thunks";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";
import {
  LogOutBackdrop,
  LogOutBntDiv,
  LogOutCrossDiv,
  LogOutPar,
  LogOutTitle,
  StyledCancelButton,
  StyledLogOutButton,
  StyledModalWindow,
} from "./StyledLogOut";

const AreYouSureModal = ({
  handleClose,
  isModalOpen,
  title,
  message,
  firstButton,
  cancelButton,
}) => {
  const modalRoot = document.getElementById("modal");
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

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

  return isModalOpen
    ? createPortal(
        <LogOutBackdrop onClick={handleOverlayClick}>
          <StyledModalWindow className="container" isModalOpen={isModalOpen}>
            <LogOutCrossDiv>
              <LogOutTitle>{title}</LogOutTitle>
              <svg width="24" height="24" onClick={handleClose}>
                <use href={`${sprite}#icon-outline`} />
              </svg>
            </LogOutCrossDiv>
            <LogOutPar>{message}</LogOutPar>
            <LogOutBntDiv>
              <StyledLogOutButton onClick={handleLogOut}>
                {firstButton}
              </StyledLogOutButton>
              <StyledCancelButton onClick={handleClose}>
                {cancelButton}
              </StyledCancelButton>
            </LogOutBntDiv>
          </StyledModalWindow>
        </LogOutBackdrop>,
        modalRoot
      )
    : null;
};

AreYouSureModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};

export default AreYouSureModal;
