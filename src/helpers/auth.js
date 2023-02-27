import { toast } from "react-toastify";

const checkTimeout = () => {
  let expired = new Date(sessionStorage.getItem("expiry_time")) > new Date();
  console.log("expiry time: " + expired);
  return expired;
};

const checkToken = () => {
  if(sessionStorage.getItem("user_token") != null && !checkTimeout()){
    sessionStorage.clear();
    toast.warning("Session Expired");
  }
  return sessionStorage.getItem("user_token") != null && checkTimeout();
};

export { checkTimeout, checkToken };
