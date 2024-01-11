import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  BackdropSettingModal,
  BtnSettingSave,
  EyeSvg,
  ImgDownloadIcon,
  InputRadioSettings,
  ModalSettingWindow,
  NameSettingInput,
  PasswordSettingInput,
  PasswordSettingLabel,
  PhotoInputUpload,
  PhotoInputUploadLabel,
  SettingAvatarImg,
  SettingGenderList,
  SettingModalTitleH2,
  SettingNameEmailDiv,
  SettingNameEmailWrapper,
  SettingPhotoWrapper,
  SettingsCrossDiv,
  SettingsPasswordSvgDiv,
  StyledCloseSvg,
  StyledRadioLabel,
  StyledSettingModalH3,
  StyledSettingsPasswordDiv,
  StyledYourGenderTitle,
  YourPhotoTitleH3,
} from "./StyledSettingsUser";
import downloadSvg from "../../../images/svg+logo/svgs/send.svg";
import sprite from "../../../images/svg+logo/sprite.svg";

const UserSettings = ({ handleClose, isModalOpen }) => {
  const modalRoot = document.getElementById("modals");

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (inputId) => {
    setShowPassword((prevPasswords) => ({
      ...prevPasswords,
      [inputId]: !prevPasswords[inputId],
    }));
  };
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
            <form>
              <SettingsCrossDiv>
                <SettingModalTitleH2>Setting</SettingModalTitleH2>
                <StyledCloseSvg width="24" height="24" onClick={handleClose}>
                  <use href={`${sprite}#icon-outline`} />
                </StyledCloseSvg>
              </SettingsCrossDiv>

              <YourPhotoTitleH3>Your photo</YourPhotoTitleH3>
              <SettingPhotoWrapper>
                <SettingAvatarImg src="#" />

                <PhotoInputUploadLabel
                  id="customFileUpload"
                  htmlFor="photoInput"
                >
                  <ImgDownloadIcon src={downloadSvg} alt="Download Icon" />
                  Upload a photo
                </PhotoInputUploadLabel>
                <PhotoInputUpload
                  type="file"
                  id="photoInput"
                  name="photo"
                  accept="image/*"
                />
              </SettingPhotoWrapper>

              <StyledYourGenderTitle>
                Your gender identity
              </StyledYourGenderTitle>

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
                    <InputRadioSettings
                      type="radio"
                      id="man"
                      name="radioGroup"
                    />
                    Man
                  </StyledRadioLabel>
                </li>
              </SettingGenderList>

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
                <SettingsPasswordSvgDiv>
                  <PasswordSettingInput
                    placeholder="Password"
                    type={showPassword["old-password"] ? "text" : "password"}
                    id="old-password"
                    name="oldPassword"
                  />
                  <div onClick={() => togglePasswordVisibility("old-password")}>
                    {showPassword["old-password"] ? (
                      <EyeSvg>
                        <use href={`${sprite}#vision`} />
                      </EyeSvg>
                    ) : (
                      <EyeSvg>
                        <use href={`${sprite}#vision-crossed`} />
                      </EyeSvg>
                    )}
                  </div>
                </SettingsPasswordSvgDiv>

                <PasswordSettingLabel htmlFor="new-password">
                  New Password:
                </PasswordSettingLabel>
                <SettingsPasswordSvgDiv>
                  <PasswordSettingInput
                    placeholder="Password"
                    type={showPassword["new-password"] ? "text" : "password"}
                    id="new-password"
                    name="newPassword"
                  />
                  <div onClick={() => togglePasswordVisibility("new-password")}>
                    {showPassword["new-password"] ? (
                      <EyeSvg>
                        <use href={`${sprite}#vision`} />
                      </EyeSvg>
                    ) : (
                      <EyeSvg>
                        <use href={`${sprite}#vision-crossed`} />
                      </EyeSvg>
                    )}
                  </div>
                </SettingsPasswordSvgDiv>

                <PasswordSettingLabel htmlFor="repeat-password">
                  Repeat new password:
                </PasswordSettingLabel>
                <SettingsPasswordSvgDiv>
                  <PasswordSettingInput
                    placeholder="Password"
                    type={showPassword["repeat-password"] ? "text" : "password"}
                    id="repeat-password"
                    name="repeatPassword"
                  />
                  <div
                    onClick={() => togglePasswordVisibility("repeat-password")}
                  >
                    {showPassword["repeat-password"] ? (
                      <EyeSvg>
                        <use href={`${sprite}#vision`} />
                      </EyeSvg>
                    ) : (
                      <EyeSvg>
                        <use href={`${sprite}#vision-crossed`} />
                      </EyeSvg>
                    )}
                  </div>
                </SettingsPasswordSvgDiv>
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
