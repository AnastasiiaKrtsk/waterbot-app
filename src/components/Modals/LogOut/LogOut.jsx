import sprite from "../../../images/svg+logo/sprite.svg";
import { useDispatch } from "react-redux";
import { logOutThunk } from "../../../redux/thunks";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const LogOutModal = ({ handleClose, isModalOpen }) => {
  const modalRoot = document.getElementById("modal");
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  const handleLogOutCloseModal = () => {
    handleClose();
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return isModalOpen
    ? createPortal(
        <div onClick={handleOverlayClick}>
          <div>
            <span onClick={handleLogOutCloseModal}>
              <svg width="24" height="24">
                <use href={`${sprite}#icon-outline`} />
              </svg>
            </span>
            <h2>Log out</h2>
            <p>Do you really want to leave?</p>
            <button onClick={handleLogOutCloseModal}>Cancel</button>
            <button onClick={handleLogOut}>Log out</button>
          </div>
        </div>,
        modalRoot
      )
    : null;
};

LogOutModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};

export default LogOutModal;
