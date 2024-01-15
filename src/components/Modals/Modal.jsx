import { useEffect, useMemo, useCallback } from "react";
import { createPortal } from "react-dom";
import { StyledBackdrop, StyledModalContent } from "./Modal.styled";

const modalRootElement = document.querySelector("#modal");

const Modal = (props) => {
  const { open, onClose } = props;
  const element = useMemo(() => document.createElement("div"), []);

  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape" && open) {
      onClose();
    }
  }, [open, onClose]);

  useEffect(() => {
    modalRootElement.appendChild(element);

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      modalRootElement.removeChild(element);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [element, handleKeyDown]);

  if (open) {
    return createPortal(
      <StyledBackdrop onClick={onClose}>
        <StyledModalContent>{props.children}</StyledModalContent>
      </StyledBackdrop>,
      element
    );
  }
  return null;
};

export default Modal;
