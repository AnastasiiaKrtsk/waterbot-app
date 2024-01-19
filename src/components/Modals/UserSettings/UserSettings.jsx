import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectAvatarUrl,
  selectLoader,
  selectUserEmail,
  selectUserGender,
  selectUsername,
} from "../../../redux/selectors.js";
import {
  updateAvatarThunk,
  updateUserInfoThunk,
} from "../../../redux/thunks.js";
import {
  BtnSaveWrapper,
  BtnSettingSave,
  Error,
  Errors,
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
import { setModalContent, setModalStatus } from "../../../redux/slice.js";
import Loader from "../../Loader/Loader.jsx";
import { toast } from "react-toastify";

const UserSettings = () => {
  const handleCloseUserSettingsModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };

  // ===== SELECTORS ==========

  const avatarUrl = useSelector(selectAvatarUrl);
  const userName = useSelector(selectUsername);
  const userEmail = useSelector(selectUserEmail);
  const storedUserGender = useSelector(selectUserGender);
  const isLoading = useSelector(selectLoader);

  // ===== USE STATES ==========

  const [userGender, setUserGender] = useState(storedUserGender);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (inputId) => {
    setShowPassword((prevPasswords) => ({
      ...prevPasswords,
      [inputId]: !prevPasswords[inputId],
    }));
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
    await dispatch(
      updateUserInfoThunk({
        endpoint: "update",
        data: {
          username,
          email,
          newPassword,
          oldPassword,
          gender,
        },
      })
    ).unwrap();

    setUserGender(gender);

    reset();

    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));

    //для релоаду стр. після оновлення данних с серверу
    window.location.reload();
  };

  //======= Avatar File Change ======

  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile.size > 5 * 1024 * 1024) {
      toast.warning(
        "The photo must be less than 5 MB! Please choose another one"
      );
      event.target.value = "";
    } else {
      uploadAvatar(selectedFile);
    }
  };

  const uploadAvatar = (file) => {
    const formData = new FormData();
    formData.append("avatar", file);
    dispatch(updateAvatarThunk(formData));
  };

  return (
    <ModalSettingWindow>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SettingsCrossDiv>
          <SettingModalTitleH2>Setting</SettingModalTitleH2>
          <StyledCloseSvg
            width="24"
            height="24"
            onClick={handleCloseUserSettingsModal}
          >
            <use href={`${sprite}#icon-outline`} />
          </StyledCloseSvg>
        </SettingsCrossDiv>
        <SettingsFormWrapper>
          <YourPhotoTitleH3>Your photo</YourPhotoTitleH3>
          <SettingPhotoWrapper>
            {isLoading ? (
              <Loader />
            ) : (
              <SettingAvatarImg isLoading={isLoading} src={avatarUrl || "V"} />
            )}

            <PhotoInputUploadLabel id="customFileUpload" htmlFor="photoInput">
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
                  <Error>{errors.username?.message}</Error>
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
                  <Error>{errors.email?.message}</Error>
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
                    type={showPassword["old-password"] ? "text" : "password"}
                    name="oldPassword"
                    {...register("oldPassword")}
                    errors={!!errors.oldPassword}
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
                  <Errors>{errors.oldPassword?.message}</Errors>
                </SettingsPasswordSvgDiv>

                <PasswordSettingLabel htmlFor="new-password">
                  New Password:
                </PasswordSettingLabel>
                <SettingsPasswordSvgDiv>
                  <PasswordSettingInput
                    placeholder="Password"
                    type={showPassword["new-password"] ? "text" : "password"}
                    name="newPassword"
                    {...register("newPassword")}
                    errors={!!errors.newPassword}
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
                  <Errors>{errors.newPassword?.message}</Errors>
                </SettingsPasswordSvgDiv>

                <PasswordSettingLabel htmlFor="repeat-password">
                  Repeat new password:
                </PasswordSettingLabel>
                <SettingsPasswordSvgDiv>
                  <PasswordSettingInput
                    placeholder="Password"
                    type={showPassword["repeat-password"] ? "text" : "password"}
                    name="passwordRepeat"
                    {...register("passwordRepeat")}
                    errors={!!errors.passwordRepeat}
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
                  <Errors>{errors.passwordRepeat?.message}</Errors>
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
  );
};

export default UserSettings;
