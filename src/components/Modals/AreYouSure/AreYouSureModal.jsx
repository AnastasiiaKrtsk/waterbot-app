import sprite from "../../../images/svg+logo/sprite.svg";
import { useDispatch } from "react-redux";
import { logOutThunk } from "../../../redux/thunks";
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

const AreYouSureModal = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <LogOutBackdrop>
      <StyledModalWindow className="container">
        <LogOutCrossDiv>
          <LogOutTitle>Log out</LogOutTitle>
          <svg width="24" height="24">
            <use href={`${sprite}#icon-outline`} />
          </svg>
        </LogOutCrossDiv>
        <LogOutPar>Do you really want to leave?</LogOutPar>
        <LogOutBntDiv>
          <StyledLogOutButton onClick={handleLogOut}>
            Log out
          </StyledLogOutButton>
          <StyledCancelButton>Cancel</StyledCancelButton>
        </LogOutBntDiv>
      </StyledModalWindow>
    </LogOutBackdrop>
  );
};

export default AreYouSureModal;
