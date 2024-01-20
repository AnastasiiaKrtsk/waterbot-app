import { useEffect, useState } from "react";
import sprite from "../../../images/svg+logo/sprite.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {
  SettingModalTitleH2,
  SettingsCrossDiv,
  StyledCloseSvg,
  StyledYourGenderTitle,
} from "../UserSettings/StyledSettingsUser";
import {
  Amount,
  CalcResult,
  DailyInputDiv,
  Errors,
  Formula,
  FormulaInfo,
  FormulaInfoText,
  FormulaInput,
  Formulas,
  Formulas1,
  Formulas2,
  ModalDailyNorma,
  SaveBtn,
  SaveBtnDiv,
  StyledResult,
} from "./DailyNorma.styled";
import { calculateV } from "./CalcNorma";
import { useDispatch, useSelector } from "react-redux";
import { selectChooseDate, selectUserGender } from "../../../redux/selectors";
import { setModalContent, setModalStatus } from "../../../redux/slice";
import { DailyNormaUsrInputSchema } from "../../../helpers/validation";
import {
  editDailyNormaThunk,
  getWaterMonthThunk,
  userCurrentThunk,
} from "../../../redux/thunks";
import moment from "moment";

const DailyNorma = () => {
  const dispatch = useDispatch();
  const handleCloseDailyNorma = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };

  const storedUserGender = useSelector(selectUserGender);
  const shownDate = useSelector(selectChooseDate);

  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [userGender, setUserGender] = useState(storedUserGender);

  useEffect(() => {
    if (!weight || !activity) {
      setResult(2);
    } else {
      setResult(calculateV(userGender, weight, activity));
    }
  }, [userGender, weight, activity]);

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
  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(editDailyNormaThunk(data));
    dispatch(userCurrentThunk);
    dispatch(
      getWaterMonthThunk({
        year: moment(shownDate).year().toString(),
        month: (moment(shownDate).month() + 1).toString().padStart(2, "0"),
      })
    );

    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
    reset();
  };

  const handleGenderChange = (event) => {
    setUserGender(event.target.value);
  };

  return (
    <ModalDailyNorma>
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
            <p>For woman:</p>
            <Formula>V=(M*0.03) + (T*0.4)</Formula>
          </Formulas1>
          <Formulas2>
            <p>For man:</p>
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

        <FormControl component="fieldset">
          <FormLabel id="demo-row-radio-buttons-group-label" />
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={userGender}
            onChange={handleGenderChange}
          >
            <FormControlLabel
              value="woman"
              control={
                <Radio
                  sx={{
                    color: "var(--dark-blue)",
                    "& .MuiSvgIcon-root": {
                      fontSize: "medium",
                    },
                  }}
                />
              }
              label="Woman"
              {...register("gender")}
            />
            <FormControlLabel
              value="man"
              control={
                <Radio
                  sx={{
                    color: "var(--dark-blue)",
                    "& .MuiSvgIcon-root": {
                      fontSize: "medium",
                    },
                  }}
                />
              }
              label="Man"
              {...register("gender")}
            />
          </RadioGroup>
        </FormControl>
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
        <DailyInputDiv>
          <FormulaInput
            name="dailyNorma"
            className="hide-number-arrows"
            type="number"
            step="0.01"
            autoComplete="off"
            id="amount"
            placeholder="0"
            onChange={(e) => setAmount(e.target.value)}
            {...register("dailyNorma")}
            errors={!!errors.dailyNorma}
          />
          <Errors>{errors.dailyNorma?.message}</Errors>
        </DailyInputDiv>
        <SaveBtnDiv>
          <SaveBtn>Save</SaveBtn>
        </SaveBtnDiv>
      </form>
    </ModalDailyNorma>
  );
};

export default DailyNorma;
