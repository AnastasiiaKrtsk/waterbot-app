import { useEffect, useState } from "react";
import sprite from "../../../images/svg+logo/sprite.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  InputRadioSettings,
  SettingGenderList,
  SettingModalTitleH2,
  SettingsCrossDiv,
  StyledCloseSvg,
  StyledRadioLabel,
  StyledYourGenderTitle,
} from "../UserSettings/StyledSettingsUser";
import {
  Amount,
  CalcResult,
  Formula,
  FormulaInfo,
  FormulaInfoText,
  FormulaInput,
  Formulas,
  Formulas1,
  Formulas2,
  FormulasText,
  ModalDilyNorma,
  SaveBtn,
  SaveBtnDiv,
  StyledResult,
} from "./DailyNorma.styled";
import { calculateV } from "./CalcNorma";
import { useDispatch, useSelector } from "react-redux";
import { selectDailyNorma } from "../../../redux/selectors";
import {
  setDailyNorma,
  setModalContent,
  setModalStatus,
} from "../../../redux/slice";
import { DailyNormaUsrInputSchema } from "../../../helpers/validation";
import { editDailyNormaThunk } from "../../../redux/thunks";
// import { setDailyNorma } from "../../../redux/slice";
const DailyNorma = () => {
  const dispatch = useDispatch();
  const handleCloseDailyNorma = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };
  const dailyNorma = useSelector(selectDailyNorma);

  console.log("daily", dailyNorma);

  const [gender, setGender] = useState("woman");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!weight || !activity) {
      setResult("1.8");
    } else {
      setResult(calculateV(gender, weight, activity));
    }
  }, [gender, weight, activity]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(DailyNormaUsrInputSchema),
  });
  //*
  const onSubmit = ({ dailyNorma }, e) => {
    e.preventDefault();
    dispatch(editDailyNormaThunk({ dailyNorma }));
    // dispatch(setDailyNorma(null));
    reset();
  };
  return (
    <ModalDilyNorma>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SettingsCrossDiv>
          <SettingModalTitleH2>My daily norma</SettingModalTitleH2>
          <StyledCloseSvg
            onClick={handleCloseDailyNorma}
            width="24"
            height="24"
          >
            <use href={`${sprite}#icon-outline`} />
          </StyledCloseSvg>
        </SettingsCrossDiv>
        <Formulas>
          <Formulas1>
            <FormulasText>For woman:</FormulasText>
            <Formula>V=(M*0.03) + (T*0.4)</Formula>
          </Formulas1>
          <Formulas2>
            <FormulasText>For man:</FormulasText>
            <Formula>V=(M*0.04) + (T*0.6)</Formula>
          </Formulas2>
        </Formulas>
        <FormulaInfo>
          <FormulaInfoText>
            * V is the volume of the water norm in liters per day, M is your
            body weight, T is the time of active sports, or another type of
            activity commensurate in terms of loads (in the absence of these,
            you must set 0)
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
          The time of active participation in sports or other activities with a
          high physical. load in hours:
        </p>
        <FormulaInput
          className="hide-number-arrows"
          type="number"
          id="activity"
          placeholder="0"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />

        <CalcResult>
          <Amount>The required amount of water in liters per day:</Amount>
          <StyledResult id="result">{result} L</StyledResult>
        </CalcResult>

        <StyledYourGenderTitle>
          Write down how much water you will drink:
        </StyledYourGenderTitle>
        <div>
          <FormulaInput
            name="dailyNorma"
            className="hide-number-arrows"
            type="number"
            autoComplete="off"
            id="amount"
            placeholder="0"
            onChange={(e) => setAmount(e.target.value)}
            {...register("dailyNorma")}
            errors={!!errors.dailyNorma}
          />
          <p>{errors.dailyNorma?.message}</p>
        </div>
        <SaveBtnDiv>
          <SaveBtn>Save</SaveBtn>
        </SaveBtnDiv>
      </form>
    </ModalDilyNorma>
  );
};

export default DailyNorma;
