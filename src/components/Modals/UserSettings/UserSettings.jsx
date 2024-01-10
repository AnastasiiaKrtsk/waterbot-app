import { createPortal } from "react-dom";
import {
  BackdropSettingModal,
  BtnSettingSave,
  ImgDownloadIcon,
  ModalSettingWindow,
  NameSettingInput,
  PasswordSettingInput,
  PasswordSettingLabel,
  SettingAvatarImg,
  SettingModalTitleH2,
  SettingNameEmailDiv,
  SettingNameEmailWrapper,
  SettingPhotoWrapper,
  StyledCloseSvg,
  StyledParagraphUploadPhoto,
  StyledRadioLabel,
  StyledSettingModalH3,
  StyledSettingsPasswordDiv,
} from "./StyledSettingsUser";
import downloadSvg from "../../../images/svg+logo/svgs/send.svg";
import sprite from "../../../images/svg+logo/sprite.svg";
const UserSettings = () => {
  const modalRoot = document.getElementById("modals");

  return createPortal(
    <BackdropSettingModal>
      <ModalSettingWindow className="container">
        <StyledCloseSvg width="24" height="24">
          <use href={`${sprite}#icon-outline`} />
        </StyledCloseSvg>
        <SettingModalTitleH2>Setting</SettingModalTitleH2>
        <StyledSettingModalH3>Your photo</StyledSettingModalH3>
        <SettingPhotoWrapper>
          <SettingAvatarImg src="#" />
          <ImgDownloadIcon src={downloadSvg} alt="Download Icon" />
          <StyledParagraphUploadPhoto>
            Upload a photo
          </StyledParagraphUploadPhoto>
        </SettingPhotoWrapper>
        <StyledSettingModalH3>Your gender identity</StyledSettingModalH3>
        <ul>
          <li>
            <StyledRadioLabel htmlFor="woman">
              <input type="radio" id="woman" name="radioGroup" />
              Woman
            </StyledRadioLabel>
          </li>
          <li>
            <StyledRadioLabel htmlFor="man">
              <input type="radio" id="man" name="radioGroup" />
              Man
            </StyledRadioLabel>
          </li>
        </ul>
        <form>
          <SettingNameEmailWrapper>
            <SettingNameEmailDiv>
              <StyledSettingModalH3>Your name</StyledSettingModalH3>
              <NameSettingInput placeholder="Name" type="text" name="name" />
            </SettingNameEmailDiv>

            <SettingNameEmailDiv>
              <StyledSettingModalH3>E-mail</StyledSettingModalH3>
              <NameSettingInput placeholder="Email" type="email" name="email" />
            </SettingNameEmailDiv>
          </SettingNameEmailWrapper>

          <StyledSettingsPasswordDiv>
            <StyledSettingModalH3>Password</StyledSettingModalH3>
            <PasswordSettingLabel htmlFor="old-password">
              Outdated password:
            </PasswordSettingLabel>
            <PasswordSettingInput
              placeholder="Password"
              type="password"
              id="old-password"
              name="oldPassword"
            />

            <PasswordSettingLabel htmlFor="new-password">
              New Password:
            </PasswordSettingLabel>
            <PasswordSettingInput
              placeholder="Password"
              type="password"
              id="new-password"
              name="newPassword"
            />

            <PasswordSettingLabel htmlFor="repeat-password">
              Repeat new password:
            </PasswordSettingLabel>
            <PasswordSettingInput
              placeholder="Password"
              type="password"
              id="repeat-password"
              name="repeatPassword"
            />
          </StyledSettingsPasswordDiv>

          <BtnSettingSave type="submit">Save</BtnSettingSave>
        </form>
      </ModalSettingWindow>
    </BackdropSettingModal>,
    modalRoot
  );
};

export default UserSettings;
