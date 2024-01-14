import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { signInThunk } from "../../redux/thunks";
import { signInSchema } from "../../helpers/validation";
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
} from "./SignInPage.styled";

const SignInPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(signInThunk(data));
    reset();
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
                type="password"
                placeholder="Password"
                {...register("password")}
                errors={!!errors.password}
              />
              <Error>{errors.password?.message}</Error>
            </WrapperInput>
            <Btn type="submit">Sign In</Btn>
            <LinkBtn to="/signup">Sign Up</LinkBtn>
          </Form>
        </WrapperForm>
      </Bootle>
    </Bg>
  );
};

export default SignInPage;
