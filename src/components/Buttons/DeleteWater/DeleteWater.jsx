import { useState } from "react";
import sprite from "../../../images/svg+logo/sprite.svg";
import Modal from "../../Modals/Modal";
import { StyledDeleteWaterButton } from "./DeleteWater.styled";

const DeleteWater = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
    <StyledDeleteWaterButton onClick={()=>setOpenModal(true)}>
      <svg width={"16px"} height={"16px"}>
        <use href={sprite + "#trash"}></use>
      </svg>
    </StyledDeleteWaterButton>
    <Modal open={openModal} onClose={()=>{setOpenModal(false)}}>
      Delete water
    </Modal>
    </>
    
  );
};

export default DeleteWater;
