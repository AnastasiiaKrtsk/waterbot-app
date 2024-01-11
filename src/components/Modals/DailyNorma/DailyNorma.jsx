import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import {
  Amount,
  BackdropDailyNorma,
  CalcBtn,
  CalcResult,
  Formula,
  FormulaInfo,
  FormulaInfoText,
  FormulaInput,
  Formulas1,
  Formulas2,
  FormulasText,
  ModalDilyNorma,
  StyledResult,
} from "./DailyNorma.styled";
import {
  InputRadioSettings,
  SettingGenderList,
  SettingModalTitleH2,
  SettingsCrossDiv,
  StyledCloseSvg,
  StyledRadioLabel,
  StyledYourGenderTitle,
} from "../UserSettings/StyledSettingsUser";
import sprite from "../../../images/svg+logo/sprite.svg";
import { calculateV } from "./CalcNorma";
const DailyNorma = ({ handleClose, isModalOpen }) => {
  const normaRoot = document.getElementById("norma");
  // *
  const [gender, setGender] = useState("woman");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("");
  const [result, setResult] = useState(null);

  // *MODAL SETUP

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape" && isModalOpen) {
        handleClose();
      }
    };
    const handleBodyOverflow = () => {
      document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    };
    handleBodyOverflow();
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose, isModalOpen]);
  // *MODAL SETUP

  return isModalOpen
    ? createPortal(
        <BackdropDailyNorma onClick={handleOverlayClick}>
          <ModalDilyNorma>
            <SettingsCrossDiv>
              <SettingModalTitleH2>My daily norma</SettingModalTitleH2>
              <StyledCloseSvg width="24" height="24" onClick={handleClose}>
                <use href={`${sprite}#icon-outline`} />
              </StyledCloseSvg>
            </SettingsCrossDiv>
            <Formulas1>
              <FormulasText>For woman:</FormulasText>
              <Formula>V=(M*0.03) + (T*0.4)</Formula>
            </Formulas1>
            <Formulas2>
              <FormulasText>For man:</FormulasText>
              <Formula>V=(M*0.04) + (T*0.6)</Formula>
            </Formulas2>
            <FormulaInfo>
              <FormulaInfoText>
                * V is the volume of the water norm in liters per day, M is your
                body weight, T is the time of active sports, or another type of
                activity commensurate in terms of loads (in the absence of
                these, you must set 0)
              </FormulaInfoText>
            </FormulaInfo>
            <StyledYourGenderTitle>Calculate your rate:</StyledYourGenderTitle>
            <SettingGenderList>
              <li>
                <StyledRadioLabel htmlFor="woman">
                  <InputRadioSettings
                    type="radio"
                    id="woman"
                    name="gender"
                    checked={gender === "woman"}
                    onChange={() => setGender("woman")}
                  />
                  For Woman
                </StyledRadioLabel>
              </li>
              <li>
                <StyledRadioLabel htmlFor="man">
                  <InputRadioSettings
                    type="radio"
                    id="man"
                    name="gender"
                    checked={gender === "man"}
                    onChange={() => setGender("man")}
                  />
                  For Man
                </StyledRadioLabel>
              </li>
            </SettingGenderList>
            <p>Your weight in kilograms:</p>
            <FormulaInput
              className="hide-number-arrows"
              type="number"
              id="weight"
              placeholder="0"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <p>
              The time of active participation in sports or other activities
              with a high physical. load in hours:
            </p>
            <FormulaInput
              className="hide-number-arrows"
              type="number"
              id="activity"
              placeholder="0"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            />
            <CalcBtn
              onClick={() => calculateV(gender, weight, activity, setResult)}
            >
              Calculate
            </CalcBtn>
            <CalcResult>
              <Amount>The required amount of water in liters per day:</Amount>
              {result !== null && (
                <StyledResult id="result">{result + " L"}</StyledResult>
              )}
            </CalcResult>
            <StyledYourGenderTitle>
              Write down how much water you will drink:
            </StyledYourGenderTitle>
            <FormulaInput
              className="hide-number-arrows"
              type="number"
              id="amount"
              placeholder="0"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            />
          </ModalDilyNorma>
        </BackdropDailyNorma>,
        normaRoot
      )
    : null;
};

//   return (
//     <>
//       <BackdropDailyNorma onClick={handleOverlayClick}>

//       </BackdropDailyNorma>
//     </>
//   );
// };

DailyNorma.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};

export default DailyNorma;
