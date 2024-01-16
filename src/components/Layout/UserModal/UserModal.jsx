import {
  BackdropUserMenu,
  MenuBtnSvg,
  MenuBtns,
  ModalUserMenu,
} from "./UserModal.styled";
import sprite from "../../../images/svg+logo/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { setModalContent, setModalStatus } from "../../../redux/slice";

const UserModal = () => {
  const dispatch = useDispatch();

  const handleOpenUserSettings = () => {
    dispatch(setModalContent("UserSettings"));
  };

  const handleOpenLogOut = () => {
    dispatch(setModalContent("LogOut"));
  };

  return (
    <ModalUserMenu>
      <MenuBtns type="button" onClick={handleOpenUserSettings}>
        <MenuBtnSvg width="20" height="20">
          <use href={`${sprite}#settings`} />
        </MenuBtnSvg>
        Settings
      </MenuBtns>
      <MenuBtns type="button" onClick={handleOpenLogOut}>
        <MenuBtnSvg width="17" height="17">
          <use href={`${sprite}#exit`} />
        </MenuBtnSvg>
        Log Out
      </MenuBtns>
    </ModalUserMenu>
  );
};

export default UserModal;
