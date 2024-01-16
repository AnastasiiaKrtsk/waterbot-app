import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import {
  selectAvatarUrl,
  selectUserEmail,
  selectUserGender,
  selectUsername,
} from "../../../redux/selectors.js";
import {
  updateAvatarThunk,
  updateUserInfoThunk,
} from "../../../redux/thunks.js";
import {
  BackdropSettingModal,
  BtnSaveWrapper,
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
  SettingsFormWrapper,
  SettingsPasswordSvgDiv,
  StyledCloseSvg,
  StyledRadioLabel,
  StyledSettingModalH3,
  StyledSettingsPasswordDiv,
  StyledYourGenderTitle,
  UserDataWrapper,
  YourPhotoTitleH3,
} from "./StyledSettingsUser";
import downloadSvg from "../../../images/svg+logo/svgs/send.svg";
import sprite from "../../../images/svg+logo/sprite.svg";
import { updateUserSchema } from "../../../helpers/validation.js";

const UserSettings = ({ handleClose, isModalOpen }) => {
  const modalRoot = document.getElementById("modal");

  // ===== SELECTORS ==========
  const avatarUrl = useSelector(selectAvatarUrl);
  const userName = useSelector(selectUsername);
  const userEmail = useSelector(selectUserEmail);
  const storedUserGender = useSelector(selectUserGender);

  // ===== USE STATES ==========

  const [userGender, setUserGender] = useState(storedUserGender);
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

  // ======= * on Submit ==========

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(updateUserSchema),
  });

  const onSubmit = async ({
    username,
    email,
    newPassword,
    oldPassword,
    gender,
  }) => {
    try {
      await dispatch(
        updateUserInfoThunk({
          username,
          email,
          newPassword,
          oldPassword,
          gender,
        })
      ).unwrap();

      setUserGender(gender);

      reset();
      handleClose();
      setTimeout(() => {
        window.location.reload();
      }, 1550);
      toast.success("Changes completed successfully", {
        autoClose: 1000,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  //======= Avatar File Change ======

  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    uploadAvatar(selectedFile);
  };

  const uploadAvatar = (file) => {
    const formData = new FormData();
    formData.append("avatar", file);
    dispatch(updateAvatarThunk(formData));
  };

  //=============================

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <SettingsCrossDiv>
                <SettingModalTitleH2>Setting</SettingModalTitleH2>
                <StyledCloseSvg width="24" height="24" onClick={handleClose}>
                  <use href={`${sprite}#icon-outline`} />
                </StyledCloseSvg>
              </SettingsCrossDiv>
              <SettingsFormWrapper>
                <YourPhotoTitleH3>Your photo</YourPhotoTitleH3>
                <SettingPhotoWrapper>
                  <SettingAvatarImg src={avatarUrl || "V"} />

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
                    onChange={handleFileChange}
                  />
                </SettingPhotoWrapper>

                <UserDataWrapper>
                  <div>
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
                            value="woman"
                            defaultChecked={userGender === "woman"}
                            onChange={() => setUserGender("woman")}
                            {...register("gender")}
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
                            value="man"
                            defaultChecked={userGender === "man"}
                            onChange={() => setUserGender("man")}
                            {...register("gender")}
                          />
                          Man
                        </StyledRadioLabel>
                      </li>
                    </SettingGenderList>

                    <SettingNameEmailWrapper>
                      <SettingNameEmailDiv>
                        <StyledSettingModalH3>Your name</StyledSettingModalH3>
                        <NameSettingInput
                          placeholder={userName}
                          type="text"
                          name="username"
                          {...register("username")}
                          errors={!!errors.username}
                        />
                        <p>{errors.username?.message}</p>
                      </SettingNameEmailDiv>

                      <SettingNameEmailDiv>
                        <StyledSettingModalH3>E-mail</StyledSettingModalH3>
                        <NameSettingInput
                          placeholder={userEmail}
                          type="email"
                          name="email"
                          {...register("email")}
                          errors={!!errors.email}
                        />
                        <p>{errors.email?.message}</p>
                      </SettingNameEmailDiv>
                    </SettingNameEmailWrapper>
                  </div>

                  <div>
                    <StyledSettingsPasswordDiv>
                      <StyledSettingModalH3>Password</StyledSettingModalH3>
                      <PasswordSettingLabel htmlFor="old-password">
                        Outdated password:
                      </PasswordSettingLabel>
                      <SettingsPasswordSvgDiv>
                        <PasswordSettingInput
                          placeholder="Password"
                          type={
                            showPassword["old-password"] ? "text" : "password"
                          }
                          id="old-password"
                          name="oldPassword"
                          {...register("oldPassword")}
                          errors={!!errors.oldPassword}
                        />
                        <div
                          onClick={() =>
                            togglePasswordVisibility("old-password")
                          }
                        >
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
                        <p>{errors.oldPassword?.message}</p>
                      </SettingsPasswordSvgDiv>

                      <PasswordSettingLabel htmlFor="new-password">
                        New Password:
                      </PasswordSettingLabel>
                      <SettingsPasswordSvgDiv>
                        <PasswordSettingInput
                          placeholder="Password"
                          type={
                            showPassword["new-password"] ? "text" : "password"
                          }
                          id="new-password"
                          name="newPassword"
                          {...register("newPassword")}
                          errors={!!errors.newPassword}
                        />
                        <div
                          onClick={() =>
                            togglePasswordVisibility("new-password")
                          }
                        >
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
                        <p>{errors.newPassword?.message}</p>
                      </SettingsPasswordSvgDiv>

                      <PasswordSettingLabel htmlFor="repeat-password">
                        Repeat new password:
                      </PasswordSettingLabel>
                      <SettingsPasswordSvgDiv>
                        <PasswordSettingInput
                          placeholder="Password"
                          type={
                            showPassword["repeat-password"]
                              ? "text"
                              : "password"
                          }
                          id="repeat-password"
                          name="passwordRepeat"
                          {...register("passwordRepeat")}
                          errors={!!errors.passwordRepeat}
                        />
                        <div
                          onClick={() =>
                            togglePasswordVisibility("repeat-password")
                          }
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
                        <p>{errors.passwordRepeat?.message}</p>
                      </SettingsPasswordSvgDiv>
                    </StyledSettingsPasswordDiv>
                  </div>
                </UserDataWrapper>
              </SettingsFormWrapper>
              <BtnSaveWrapper>
                <BtnSettingSave type="submit">Save</BtnSettingSave>
              </BtnSaveWrapper>
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
