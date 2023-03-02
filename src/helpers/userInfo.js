const userInfo = (res) => {
  sessionStorage.setItem("user_token", res.data.token);
  sessionStorage.setItem("expiry_time", res.data.exp);
  sessionStorage.setItem("userID", res.data.user.id);
  if (res.data.profile_pic)
    sessionStorage.setItem("user-image", res.data.profile_pic);

  sessionStorage.setItem("user-name", res.data.user.name);
  sessionStorage.setItem("user-phone-number", res.data.user.phone_number);
  sessionStorage.setItem("subscriptions", JSON.stringify([]));
};

export default userInfo;
