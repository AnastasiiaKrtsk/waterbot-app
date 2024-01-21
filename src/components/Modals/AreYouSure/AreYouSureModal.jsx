import sprite from "../../../images/svg+logo/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteWaterThunk, logOutThunk } from "../../../redux/thunks";
import { motion, AnimatePresence } from "framer-motion";
import {
  LogOutBntDiv,
  LogOutCrossDiv,
  LogOutPar,
  LogOutTitle,
  StyledCancelButton,
  StyledLogOutButton,
  StyledModalWindow,
} from "./StyledAreYouSure";
import { setModalContent, setModalStatus } from "../../../redux/slice";
import {
  selectChooseDate,
  selectIdForEditDelete,
} from "../../../redux/selectors";
import moment from "moment";
import { StyledCloseSvg } from "../UserSettings/StyledSettingsUser";
import { containerVariants } from "../Modal";

const AreYouSureModal = ({ title, message, buttonText, action }) => {
  const id = useSelector(selectIdForEditDelete);
  const dispatch = useDispatch();

  const handleCloseUserModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };

  const handleButtonConfirm = () => {
    action === "logOut"
      ? dispatch(logOutThunk())
      : dispatch(deleteWaterThunk(id));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <StyledModalWindow className="container">
            <LogOutCrossDiv>
              <LogOutTitle>{title}</LogOutTitle>
              <StyledCloseSvg onClick={handleCloseUserModal}>
                <use href={`${sprite}#icon-outline`} />
              </StyledCloseSvg>
            </LogOutCrossDiv>
            <LogOutPar>{message}</LogOutPar>
            <LogOutBntDiv>
              <StyledLogOutButton onClick={handleButtonConfirm}>
                {buttonText}
              </StyledLogOutButton>
              <StyledCancelButton onClick={handleCloseUserModal}>
                Cancel
              </StyledCancelButton>
            </LogOutBntDiv>
          </StyledModalWindow>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AreYouSureModal;
