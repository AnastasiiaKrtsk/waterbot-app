import styled from "@emotion/styled";

export const BackdropSettingModal = styled.div`
  display: flex;
  justify-content: center;
  padding: 44px 20px;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`;

export const ModalSettingWindow = styled.div`
  padding: 32px 12px;
  width: 280px;

  display: inline-flex;
  flex-direction: column;

  border-radius: 10px;
  background: var(--white);

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 24px;
    width: 1008px;
  }
`;

export const SettingsFormWrapper = styled.div`
  width: 256px;

  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const StyledSettingsPasswordDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    gap: 13.3px;
  }
`;

export const SettingsCrossDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const YourPhotoTitleH3 = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
  color: var(--black);
`;

export const SettingModalTitleH2 = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;

  color: var(--black);
`;

export const SettingNameEmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
`;

export const SettingNameEmailDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledSettingModalH3 = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: var(--black);
`;

export const SettingGenderList = styled.ul`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 52px;
  }
`;

export const SettingPhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`;

export const SettingAvatarImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const ImgDownloadIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const PhotoInputUpload = styled.input`
  display: none;
`;

export const PhotoInputUploadLabel = styled.label`
  display: flex;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--dark-blue);

  cursor: pointer;
`;

export const UserDataWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 24px;
  }
`;

export const GenderInfoDiv = styled.div`
  @media screen and (min-width: 1440px) {
    width: 392px;
  }
`;

export const StyledYourGenderTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;
  color: var(--black);
`;

export const StyledRadioLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: var(--black);

  cursor: pointer;
`;

export const InputRadioSettings = styled.input`
  cursor: pointer;
  margin-right: 8px;
`;

export const StyledCloseSvg = styled.svg`
  cursor: pointer;
`;

export const BtnSettingSave = styled.button`
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  width: 100%;

  border: none;
  border-radius: 10px;
  background: var(--dark-blue);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: var(--white);

  @media screen and (min-width: 768px) {
    padding: 10px 30px;
    width: 160px;
  }
`;

export const BtnSaveWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const NameSettingInput = styled.input`
  padding: 12px 10px;
  height: 44px;
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  width: 100%;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: var(--dark-blue);

  ::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #9ebbff;
  }

  @media screen and (min-width: 1440px) {
    width: 392px;
  }
`;

export const PasswordSettingInput = styled.input`
  padding: 12px 10px;
  height: 44px;
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  width: 100%;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: var(--dark-blue);

  ::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #9ebbff;
  }

  @media screen and (min-width: 1440px) {
    width: 392px;
  }
`;

export const SettingsPasswordSvgDiv = styled.div`
  position: relative;
`;

export const BtnEye = styled.button`
  position: absolute;
  top: 30%;
  left: 87%;

  @media screen and (min-width: 1440px) {
    left: 93%;
  }
`;

export const EyeSvg = styled.svg`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 30%;
  left: 87%;

  @media screen and (min-width: 1440px) {
    left: 93%;
  }
`;

export const PasswordSettingLabel = styled.label`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: -4px;

  color: var(--black);
`;

export const Errors = styled.p`
  position: absolute;

  font-size: 10px;
  font-weight: 400;
  line-height: 18px;
  color: var(--red);
`;
