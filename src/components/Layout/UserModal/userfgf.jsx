// import {
//   BackdropUserMenu,
//   MenuBtnSvg,
//   MenuBtns,
//   ModalUserMenu,
// } from "./UserModal.styled";
// import sprite from "../../../images/svg+logo/sprite.svg";

// import AreYouSureModal from "../../Modals/AreYouSure/AreYouSureModal";
// import { useDispatch } from "react-redux";
// // import { selectOpenModal } from "../../../redux/selectors";
// import { setModalContent } from "../../../redux/slice";

// const UserModal = () => {
//   const dispatch = useDispatch();

//   const handleOpenUserModal = () => {
//     dispatch(setModalContent("UserSettings"));
//   };

//   return (
//     <BackdropUserMenu>
//       <ModalUserMenu>
//         <MenuBtns type="button" onClick={handleOpenUserModal}>
//           <MenuBtnSvg width="20" height="20">
//             <use href={`${sprite}#settings`} />
//           </MenuBtnSvg>
//           Settings
//         </MenuBtns>
//         <MenuBtns type="button">
//           <MenuBtnSvg width="17" height="17">
//             <use href={`${sprite}#exit`} />
//           </MenuBtnSvg>
//           Log Out
//         </MenuBtns>
//         <AreYouSureModal
//           title="Log out"
//           message="Do you really want to leave?"
//           firstButton="Log out"
//           cancelButton="Cancel"
//         />
//       </ModalUserMenu>
//     </BackdropUserMenu>
//   );
// };

// export default UserModal;
