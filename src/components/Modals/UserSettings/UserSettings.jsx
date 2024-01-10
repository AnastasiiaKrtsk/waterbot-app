import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import {
  BackdropSettingModal,
  BtnSettingSave,
  ImgDownloadIcon,
  InputRadioSettings,
  ModalSettingWindow,
  NameSettingInput,
  PasswordSettingInput,
  PasswordSettingLabel,
  SettingAvatarImg,
  SettingGenderList,
  SettingModalTitleH2,
  SettingNameEmailDiv,
  SettingNameEmailWrapper,
  SettingPhotoWrapper,
  SettingsCrossDiv,
  StyledCloseSvg,
  StyledParagraphUploadPhoto,
  StyledRadioLabel,
  StyledSettingModalH3,
  StyledSettingsPasswordDiv,
  StyledYourGenderTitle,
  YourPhotoTitleH3,
} from "./StyledSettingsUser";
import downloadSvg from "../../../images/svg+logo/svgs/send.svg";
import sprite from "../../../images/svg+logo/sprite.svg";
import { useEffect } from "react";
const UserSettings = ({ handleClose, isModalOpen }) => {
  const modalRoot = document.getElementById("modals");

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape" && isModalOpen) {
        handleClose();
      }
    };

    const handleBodyOverflow = () => {
      document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    };

    handleBodyOverflow();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose, isModalOpen]);

  return isModalOpen
    ? createPortal(
        <BackdropSettingModal onClick={handleOverlayClick}>
          <ModalSettingWindow className="container" isModalOpen={isModalOpen}>
            <SettingsCrossDiv>
              <SettingModalTitleH2>Setting</SettingModalTitleH2>
              <StyledCloseSvg width="24" height="24" onClick={handleClose}>
                <use href={`${sprite}#icon-outline`} />
              </StyledCloseSvg>
            </SettingsCrossDiv>
            <YourPhotoTitleH3>Your photo</YourPhotoTitleH3>
            <SettingPhotoWrapper>
              <SettingAvatarImg src="#" />
              <ImgDownloadIcon src={downloadSvg} alt="Download Icon" />
              <StyledParagraphUploadPhoto>
                Upload a photo
              </StyledParagraphUploadPhoto>
            </SettingPhotoWrapper>
            <StyledYourGenderTitle>Your gender identity</StyledYourGenderTitle>

            <SettingGenderList>
              <li>
                <StyledRadioLabel htmlFor="woman">
                  <InputRadioSettings
                    type="radio"
                    id="woman"
                    name="radioGroup"
                  />
                  Woman
                </StyledRadioLabel>
              </li>
              <li>
                <StyledRadioLabel htmlFor="man">
                  <InputRadioSettings type="radio" id="man" name="radioGroup" />
                  Man
                </StyledRadioLabel>
              </li>
            </SettingGenderList>

            <form>
              <SettingNameEmailWrapper>
                <SettingNameEmailDiv>
                  <StyledSettingModalH3>Your name</StyledSettingModalH3>
                  <NameSettingInput
                    placeholder="Name"
                    type="text"
                    name="name"
                  />
                </SettingNameEmailDiv>

                <SettingNameEmailDiv>
                  <StyledSettingModalH3>E-mail</StyledSettingModalH3>
                  <NameSettingInput
                    placeholder="Email"
                    type="email"
                    name="email"
                  />
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
      )
    : null;
};

UserSettings.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};

export default UserSettings;
