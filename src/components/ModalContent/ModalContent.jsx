import { useSelector } from "react-redux";
import EditAddWaterForm from "../Forms/EditAddWaterForm/EditAddWaterForm";
// import DeleteForm from "../Forms/DeleteForm/DeleteForm";
// import AddWaterForm from "../Forms/AddWaterForm/AddWaterForm";
import { selectModalContent } from "../../redux/selectors";
import DailyNorma from "../Modals/DailyNorma/DailyNorma";
import UserModal from "../Layout/UserModal/UserModal";
import UserSettings from "../Modals/UserSettings/UserSettings";
import AreYouSureModal from "../Modals/AreYouSure/AreYouSureModal";

const ModalContent = () => {
  const modalContent = useSelector(selectModalContent);

  switch (modalContent) {
    case "EditWaterForm":
      return <EditAddWaterForm action="edit" />;
    case "Add water":
      return <EditAddWaterForm action="add" />;
    case "DailyNorma":
      return <DailyNorma />;
    case "OpenUserModal":
      return <UserModal />;
    case "UserSettings":
      return <UserSettings />;
    case "LogOut":
      return (
        <AreYouSureModal
          title="Log out"
          message="Do you really want to leave?"
          buttonText="Log out"
          action="logOut"
        />
      );
    case "Delete":
      return (
        <AreYouSureModal
          title="Delete entry"
          message="Are you sure you want to delete the entry?"
          buttonText="Delete"
          action="delete"
        />
      );
    default:
      return null;
  }
};

export default ModalContent;
