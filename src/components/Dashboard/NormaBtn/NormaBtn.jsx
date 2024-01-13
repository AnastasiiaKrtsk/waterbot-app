import { NormaBtnWrapper, NormaResultDiv } from "./NormaBtn.styled";

const NormaBtn = () => {
  return (
    <NormaBtnWrapper>
      <p>My daily norma</p>
      <NormaResultDiv>
        <p>1.5 L</p>
        <button>Edit</button>
      </NormaResultDiv>
    </NormaBtnWrapper>
  );
};

export default NormaBtn;
