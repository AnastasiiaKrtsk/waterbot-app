import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { forgotPasswordSchema } from "../../helpers/validation";
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
} from "../SignUpPage/SignUpPage.styled.js";
import { forgotPasswordThunk } from "../../redux/thunks";

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(forgotPasswordSchema),
  });
  const dispatch = useDispatch();

  const onSubmit = (email, e) => {
    e.preventDefault();
    dispatch(forgotPasswordThunk(email));
    reset();
  };

  return (
    <Bg>
      <Bootle>
        <WrapperForm>
          <Title>Forgot password</Title>
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
            <Btn type="submit">Send</Btn>
            <LinkBtn to="/signin">Sign In</LinkBtn>
          </Form>
        </WrapperForm>
      </Bootle>
    </Bg>
  );
};

export default ForgotPasswordPage;
