import { useEffect, useMemo, useCallback } from "react";
import { createPortal } from "react-dom";
import { StyledBackdrop, StyledModalContent } from "./Modal.styled";
import { motion, AnimatePresence } from "framer-motion";

const modalRootElement = document.querySelector("#modal");

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0, duration: 0.5 },
  },
};

const Modal = ({ open, onClose, children }) => {
  const element = useMemo(() => document.createElement("div"), []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape" && open) {
        onClose();
      }
    },
    [open, onClose]
  );

  const handleBackdropClick = useCallback(
    (event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    modalRootElement.appendChild(element);

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      modalRootElement.removeChild(element);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [element, handleKeyDown, open]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <StyledBackdrop onClick={handleBackdropClick}>
            <StyledModalContent>{children}</StyledModalContent>
          </StyledBackdrop>
        </motion.div>
      )}
    </AnimatePresence>,
    element
  );
};

export default Modal;
