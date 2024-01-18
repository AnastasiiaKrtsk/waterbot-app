import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { signInThunk, signUpThunk } from "../../redux/thunks";
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
} from "./UpdatePasswordPage.styled";
import { useState } from "react";

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

  const onSubmit = async ({ username, email, password }, e) => {
    e.preventDefault();

    try {
      await dispatch(signUpThunk({ username, email, password })).unwrap();

      await dispatch(signInThunk({ email, password }));

      reset();
      toast.success("Registration completed successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

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
                type={showPassword["password"] ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
                errors={!!errors.password}
              />
              <div onClick={() => togglePasswordVisibility("password")}>
                {showPassword["password"] ? (
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
