import sprite from "../../../images/svg+logo/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteWaterThunk, logOutThunk } from "../../../redux/thunks";
import {
  CloseSvg,
  LogOutBntDiv,
  LogOutCrossDiv,
  LogOutPar,
  LogOutTitle,
  StyledCancelButton,
  StyledLogOutButton,
  StyledModalWindow,
} from "./StyledLogOut";
import { setModalContent, setModalStatus } from "../../../redux/slice";
import { selectIdForEditDelete } from "../../../redux/selectors";

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
    <StyledModalWindow className="container">
      <LogOutCrossDiv>
        <LogOutTitle>{title}</LogOutTitle>
        <CloseSvg width="24" height="24" onClick={handleCloseUserModal}>
          <use href={`${sprite}#icon-outline`} />
        </CloseSvg>
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
  );
};

export default AreYouSureModal;
