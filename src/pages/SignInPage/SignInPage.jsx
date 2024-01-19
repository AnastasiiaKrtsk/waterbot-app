import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInThunk } from "../../redux/thunks";
import { signInSchema } from "../../helpers/validation";
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
} from "./SignInPage.styled";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(signInSchema),
  });
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(signInThunk(data));
    reset();
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
          <Title>Sign In</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <WrapperInput>
              <Label>Enter your email</Label>
              <Input
                type="email"
                placeholder="E-mail"
                {...register("email")}
                errors={!!errors.email}
              />
              <Error>{errors.email?.message}</Error>
            </WrapperInput>
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
            <Btn type="submit">Sign In</Btn>
            <LinkBtn to="/forgot-password">Forgot password?</LinkBtn>
            <LinkBtn to="/signup">Sign Up</LinkBtn>
          </Form>
        </WrapperForm>
      </Bootle>
    </Bg>
  );
};

export default SignInPage;
