import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { updatePasswordThunk } from "../../redux/thunks";
import { toast } from "react-toastify";
import { updatePasswordSchema } from "../../helpers/validation";
import sprite from "../../images/svg+logo/sprite.svg";
import {
  Bg,
  Bootle,
  Btn,
  Error,
  EyeSvg,
  Form,
  Input,
  Label,
  LinkBtn,
  Title,
  WrapperForm,
  WrapperInput,
} from "../SignUpPage/SignUpPage.styled.js";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const UpdatePasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(updatePasswordSchema),
  });
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const resetToken = searchParams[0].get("resetToken");
  const navigate = useNavigate();

  function onSubmit({ newPassword }, e) {
    e.preventDefault();

    dispatch(updatePasswordThunk({ newPassword, resetToken }))
      .then((response) => {
        if (response.meta.requestStatus === "fulfilled") {
          navigate("/signin");
        }
      })
      .catch((error) => {
        toast.error("Error updating password:", error);
      });
    reset();
  }

  const togglePasswordVisibility = (inputId) => {
    setShowPassword((prevPasswords) => ({
      ...prevPasswords,
      [inputId]: !prevPasswords[inputId],
    }));
  };
  return (
    <Bg>
      <Bootle>
        <WrapperForm>
          <Title>Update password</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <WrapperInput>
              <Label>Enter your password</Label>
              <Input
                type={showPassword["newPassword"] ? "text" : "password"}
                placeholder="Password"
                {...register("newPassword")}
                errors={!!errors.password}
              />
              <div onClick={() => togglePasswordVisibility("newPassword")}>
                {showPassword["newPassword"] ? (
                  <EyeSvg width="16" height="16">
                    <use href={`${sprite}#vision`} />
                  </EyeSvg>
                ) : (
                  <EyeSvg width="16" height="16">
                    <use href={`${sprite}#vision-crossed`} />
                  </EyeSvg>
                )}
              </div>
              <Error>{errors.password?.message}</Error>
            </WrapperInput>
            <WrapperInput>
              <Label>Repeat password</Label>
              <Input
                type={showPassword["passwordRepeat"] ? "text" : "password"}
                placeholder="Repeat password"
                {...register("passwordRepeat")}
                errors={!!errors.passwordRepeat}
              />
              <div onClick={() => togglePasswordVisibility("passwordRepeat")}>
                {showPassword["passwordRepeat"] ? (
                  <EyeSvg width="16" height="16">
                    <use href={`${sprite}#vision`} />
                  </EyeSvg>
                ) : (
                  <EyeSvg width="16" height="16">
                    <use href={`${sprite}#vision-crossed`} />
                  </EyeSvg>
                )}
              </div>
              <Error>{errors.passwordRepeat?.message}</Error>
            </WrapperInput>
            <Btn type="submit">Update password</Btn>
            <LinkBtn to="/signin">Sign In</LinkBtn>
          </Form>
        </WrapperForm>
      </Bootle>
    </Bg>
  );
};

export default UpdatePasswordPage;
