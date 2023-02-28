import { IMAGE_URL } from "./globalVariables";

const profileImage = (user) => {
  if (user.profile_pic == null) {
    return `https://img.icons8.com/color/512/gender-neutral-user.png`;
  } else {
    return IMAGE_URL + user.profile_pic;
  }
};
export { profileImage };
