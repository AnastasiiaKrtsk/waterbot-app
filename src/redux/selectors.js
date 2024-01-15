export const selectToken = (state) => state.auth.token;
export const selectAvatarUrl = (state) => state.auth.userData.avatarURL;
export const selectUsername = (state) => state.auth.userData.username;
export const selectUserEmail = (state) => state.auth.userData.email;
export const selectUserGender = (state) => state.auth.userData.gender;
export const selectOpenModal = (state) => state.auth.openModal;
