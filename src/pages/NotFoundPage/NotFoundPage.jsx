import { Link } from "react-router-dom";
import {
  NotFound404,
  NotFoundBg,
  NotFoundBg2,
  NotFoundH1,
  NotFoundHomeBtn,
  NotFoundText,
  NotFoundWrapper,
} from "./NotFoundPage.styled";
const NotFoundPage = () => {
  return (
    <>
      <NotFoundBg />
      <NotFoundWrapper>
        <NotFound404>404</NotFound404>
        <NotFoundH1>page not found</NotFoundH1>
        <NotFoundText>
          the page you requested could not be found :/{" "}
        </NotFoundText>
        <Link to="/">
          <NotFoundHomeBtn type="button">home</NotFoundHomeBtn>
        </Link>
      </NotFoundWrapper>
      <NotFoundBg2 />
    </>
  );
};
export default NotFoundPage;
