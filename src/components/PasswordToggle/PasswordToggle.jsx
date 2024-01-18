import sprite from "../../images/svg+logo/sprite.svg";
import { EyeSvg } from "../../pages/SignUpPage/SignUpPage.styled";

const PasswordToggle = ({ isVisible, onToggle }) => {
  return (
    <div onClick={onToggle}>
      {isVisible ? (
        <EyeSvg width="16" height="16">
          <use href={`${sprite}#vision`} />
        </EyeSvg>
      ) : (
        <EyeSvg width="16" height="16">
          <use href={`${sprite}#vision-crossed`} />
        </EyeSvg>
      )}
    </div>
  );
};

export default PasswordToggle;
