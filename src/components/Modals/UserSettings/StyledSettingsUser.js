import styled from "@emotion/styled";

export const ModalSettingWindow = styled.div`
  position: inherit;
  background-color: white;
  padding: 32px 12px;

  display: inline-flex;
  flex-direction: column;

  border-radius: 10px;
  background: var(--white);
`;

export const BackdropSettingModal = styled.div`
  display: flex;
  justify-content: center;
  padding: 44px 20px;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(6, 33, 54, 0.4);
  overflow: scroll;
`;

export const StyledSettingsPasswordDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

export const SettingModalTitleH2 = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 24px;
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
  border: 2px solid blue;
`;

export const ImgDownloadIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const StyledParagraphUploadPhoto = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--blue);
`;

export const StyledYourGenderTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: var(--black);
`;

export const StyledRadioLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: var(--black);
`;

export const StyledCloseSvg = styled.svg`
  position: absolute;
  top: 36px;
  right: 12px;
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
`;

export const PasswordSettingLabel = styled.label`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: -4px;

  color: var(--black);
`;
