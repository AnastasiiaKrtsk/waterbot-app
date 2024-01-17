import sprite from "../../../images/svg+logo/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { logOutThunk } from "../../../redux/thunks";
import {
  LogOutBntDiv,
  LogOutCrossDiv,
  LogOutPar,
  LogOutTitle,
  StyledCancelButton,
  StyledLogOutButton,
  StyledModalWindow,
} from "./StyledLogOut";
import { setModalContent, setModalStatus } from "../../../redux/slice";

const AreYouSureModal = ({title, message, buttonText, action}) => {
  const dispatch = useDispatch();

  const handleCloseUserModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };

  

  const handleButtonConfirm = () => {
    // TODO сделать thunk
    action === 'logOut' ? dispatch(logOutThunk()) : 'dispatch("deleteWaterThunk")'
  };

  return (
    <StyledModalWindow className="container">
      <LogOutCrossDiv>
        <LogOutTitle>{title}</LogOutTitle>
        <svg width="24" height="24" onClick={handleCloseUserModal}>
          <use href={`${sprite}#icon-outline`} />
        </svg>
      </LogOutCrossDiv>
      <LogOutPar>{message}</LogOutPar>
      <LogOutBntDiv>
        <StyledLogOutButton onClick={handleButtonConfirm}>{buttonText}</StyledLogOutButton>
        <StyledCancelButton onClick={handleCloseUserModal}>
          Cancel
        </StyledCancelButton>
      </LogOutBntDiv>
    </StyledModalWindow>
  );
};

export default AreYouSureModal;
