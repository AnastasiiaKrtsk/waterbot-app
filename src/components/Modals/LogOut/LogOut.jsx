import { useState } from "react";
import sprite from "../../../images/svg+logo/sprite.svg";

const ModalWithButtons = () => {
  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              <svg width="24" height="24">
                <use href={`${sprite}#icon-outline`} />
              </svg>
            </span>
            <h2>Log out</h2>
            <p>Do you really want to leave?</p>
            <button onClick={handleCloseModal}>Cancel</button>
            <button onClick={handleCloseModal}>Log out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalWithButtons;
