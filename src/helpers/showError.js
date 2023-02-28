import { toast } from "react-toastify";

const showError = (error_msg) => {
  if (typeof error_msg === "string") {
    toast.error(error_msg);
  } else {
    error_msg.forEach((val) => toast.error(val));
  }
};
export { showError };
