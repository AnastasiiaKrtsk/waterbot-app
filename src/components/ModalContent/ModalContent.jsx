import { useSelector } from "react-redux";
import EditWaterForm3 from "../Forms/EditWaterForm/EditWaterForm3";
// import DeleteForm from "../Forms/DeleteForm/DeleteForm";
// import AddWaterForm from "../Forms/AddWaterForm/AddWaterForm";
import { selectModalContent } from "../../redux/selectors";
import DailyNorma from "../Modals/DailyNorma/DailyNorma";

const ModalContent = () => {
  const modalContent = useSelector(selectModalContent);

  switch (modalContent) {
    case "EditWaterForm":
      return <EditWaterForm3 />;
    case "Delete":
      return "Delete";
    case "Add water":
      return '<AddWaterForm />';
    case "DailyNorma":
      return <DailyNorma />;
    default:
      return null;
  }
};

export default ModalContent;
