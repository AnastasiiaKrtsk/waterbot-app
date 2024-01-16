import { useDispatch, useSelector } from "react-redux";
import { NormaBtnWrapper, NormaResultDiv, StyledEditBtn, StyledNormaTitle, StyledNormaVolume } from "./NormaWater.styled";
import { selectOpenModal } from "../../../redux/selectors";
import { setModalContent, setModalStatus } from "../../../redux/slice";
import DailyNorma from "../../Modals/DailyNorma/DailyNorma";

const NormaWater = () => {

  const dispatch = useDispatch();
  const modalStatus = useSelector(selectOpenModal);


  const handleEditNorma = () => {
    dispatch(setModalStatus(!modalStatus))
    dispatch(setModalContent(<DailyNorma />));
  };
  return (
    <NormaBtnWrapper>
      <StyledNormaTitle>My daily norma</StyledNormaTitle>
      <NormaResultDiv>
        <StyledNormaVolume>1.5 L</StyledNormaVolume>
        <StyledEditBtn onClick={handleEditNorma}> Edit</StyledEditBtn>
      </NormaResultDiv>
    </NormaBtnWrapper>
  );
};

export default NormaWater;
