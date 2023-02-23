const checkTimeout = () => {
  let expired = new Date(sessionStorage.getItem("expiry_time")) > new Date();
  console.log("expiry time: " + expired);
  
  if(!expired){
    sessionStorage.setItem("user_token", null);
  }
  return expired;
};

const checkToken = () => {
  return sessionStorage.getItem("user_token") != null && checkTimeout();
};

export { checkTimeout, checkToken };
