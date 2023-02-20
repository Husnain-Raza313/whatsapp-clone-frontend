const checkTimeout = () => {
  let expired = new Date(sessionStorage.getItem("expiry_time")) > new Date();
  console.log("expiry time: " + expired);
  return expired;
};

const checkToken = () => {
  return sessionStorage.getItem("user_token") != null && checkTimeout();
};

export { checkTimeout, checkToken };
