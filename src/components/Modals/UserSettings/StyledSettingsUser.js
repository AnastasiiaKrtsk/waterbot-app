import styled from "@emotion/styled";

export const ModalSettingWindow = styled.div`
  padding: 32px 12px;
  width: 280px;

  display: inline-flex;
  flex-direction: column;

  border-radius: 10px;
  background: var(--white);

  transition: transform 0.5s ease-in-out;

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

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const SettingNameEmailDiv = styled.div`
  position: relative;
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

export const SettingPhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;

export const SettingAvatarImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const ImgDownloadIcon = styled.div`
  width: 16px;
  height: 16px;
`;

export const SendSvg = styled.svg`
  width: 16px;
  height: 16px;
`;

export const PhotoInputUpload = styled.input`
  display: none;

  &:hover {
    transition: var(--transition);
    box-shadow: 3px 2px 10px 0px rgba(64, 123, 255, 0.2);
  }
`;

export const PhotoInputUploadLabel = styled.label`
  display: flex;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--dark-blue);

  cursor: pointer;

  &:hover {
    color: var(--orange);
    stroke: var(--orange);
    transition: var(--transition);
  }
`;

export const UserDataWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
  }
`;

export const GenderInfoDiv = styled.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 392px;
    margin-bottom: 52px;
  }
`;

export const StyledYourGenderTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;
  color: var(--black);

  @media screen and (min-width: 1440px) {
    margin-bottom: 6px;
  }
`;

export const StyledCloseSvg = styled.svg`
  cursor: pointer;
  width: 24px;
  height: 24px;

  &:hover {
    transform: rotate(85deg);
    transition: transform 0.5s ease-in-out;
  }
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

  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: var(--white);

  &:hover {
    transition: var(--transition);
    box-shadow: 3px 2px 10px 0px rgba(64, 123, 255, 0.2);
  }

  transition: box-shadow var(--transition);
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
  cursor: pointer;

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

  &:hover {
    transition: var(--transition);
    box-shadow: 3px 2px 10px 0px rgba(64, 123, 255, 0.2);
  }

  @media screen and (min-width: 1440px) {
    width: 392px;
  }
`;

export const PasswordSettingInput = styled.input`
  cursor: pointer;

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

  &:hover {
    transition: var(--transition);
    box-shadow: 3px 2px 10px 0px rgba(64, 123, 255, 0.2);
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

export const Error = styled.p`
  position: absolute;
  bottom: -17px;

  font-size: 10px;
  font-weight: 400;
  line-height: 18px;
  color: var(--red);
`;

export const YourInfoWrapp = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
