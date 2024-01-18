import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { signInThunk } from "../../redux/thunks";
import { toast } from "react-toastify";
import { updatePasswordSchema } from "../../helpers/validation";
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
} from "./UpdatePasswordPage.styled";
import { useState } from "react";
import PasswordToggle from "../../components/PasswordToggle/PasswordToggle";

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

  const onSubmit = async ({ password }, e) => {
    e.preventDefault();

    try {
      await dispatch(updatePasswordThunk({ password })).unwrap();

      await dispatch(signInThunk({ email, password }));

      reset();
      toast.success("Update password successfully");
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
            <Btn type="submit">Update password</Btn>
            <LinkBtn to="/signin">Sign In</LinkBtn>
          </Form>
        </WrapperForm>
      </Bootle>
    </Bg>
  );
};

export default UpdatePasswordPage;
