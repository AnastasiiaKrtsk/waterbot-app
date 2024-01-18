import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { signInThunk, signUpThunk } from "../../redux/thunks";
import { toast } from "react-toastify";
import { signUpSchema } from "../../helpers/validation";
import PasswordToggle from "../../components/PasswordToggle/PasswordToggle";
import {
  Bg,
  Bootle,
  Btn,
  Error,
  Form,
  Input,
  Label,
  LinkBtn,
  Title,
  WrapperForm,
  WrapperInput,
} from "./SignUpPage.styled";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(signUpSchema),
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

  const togglePasswordVisibility = () => {
    setShowPassword((prevVisibility) => !prevVisibility);
  };

  return (
    <Bg>
      <Bootle>
        <WrapperForm>
          <Title>Sign Up</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <WrapperInput>
              <Label>Enter your name</Label>
              <Input
                type="text"
                placeholder="Name"
                {...register("username")}
                errors={!!errors.username}
              />
              <Error>{errors.username?.message}</Error>
            </WrapperInput>
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
              <PasswordToggle
                isVisible={showPassword}
                onToggle={togglePasswordVisibility}
              />
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
              <PasswordToggle
                isVisible={showPassword}
                onToggle={togglePasswordVisibility}
              />
              <Error>{errors.passwordRepeat?.message}</Error>
            </WrapperInput>
            <Btn type="submit">Sign Up</Btn>
            <LinkBtn to="/signin">Sign In</LinkBtn>
          </Form>
        </WrapperForm>
      </Bootle>
    </Bg>
  );
};

export default SignUpPage;
