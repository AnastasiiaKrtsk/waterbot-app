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

const AreYouSureModal = () => {
  const dispatch = useDispatch();

  const handleCloseUserModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <StyledModalWindow className="container">
      <LogOutCrossDiv>
        <LogOutTitle>Log out</LogOutTitle>
        <svg width="24" height="24" onClick={handleCloseUserModal}>
          <use href={`${sprite}#icon-outline`} />
        </svg>
      </LogOutCrossDiv>
      <LogOutPar>Do you really want to leave?</LogOutPar>
      <LogOutBntDiv>
        <StyledLogOutButton onClick={handleLogOut}>Log out</StyledLogOutButton>
        <StyledCancelButton onClick={handleCloseUserModal}>
          Cancel
        </StyledCancelButton>
      </LogOutBntDiv>
    </StyledModalWindow>
  );
};

export default AreYouSureModal;
