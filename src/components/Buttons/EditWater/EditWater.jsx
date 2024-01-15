import { useState } from "react";
import sprite from "../../../images/svg+logo/sprite.svg";
import { StyledEditWaterButton } from "./EditWater.styled";
import Modal from "../../Modals/Modal";

const EditWater = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <StyledEditWaterButton onClick={() => setOpenModal(true)}>
        <svg width={"16px"} height={"16px"}>
          <use href={sprite + "#icon-edit"}></use>
        </svg>
      </StyledEditWaterButton>
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        Edit water
      </Modal>
    </>
  );
};

export default EditWater;
