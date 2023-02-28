import axios from "axios";
import { toast } from "react-toastify";
import { URL } from "../helpers/globalVariables";
import { showError } from "../helpers/showError";

let apiResponse;

const fetchData = async (address) => {
  try {
    await axios({
      method: "get",
      url: `${URL}${address}`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("user_token")}`,
      },
    }).then(function (response) {
      apiResponse = response;
    });
  } catch (e) {
    apiResponse = e.response;
    console.log(e.response.status);
    showError(e.response.data.message);
  }
  return await apiResponse;
};

const sendData = async (address, object) => {
  try {
    await axios({
      method: "post",
      url: `${URL}${address}`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("user_token")}`,
      },
      data: object,
    }).then(function (response) {
      apiResponse = response;
    });
  } catch (e) {
    apiResponse = e.response;
    console.log(e.response.status);
    // toast.error(e.response.message[0]);
    console.log(e.response);
    showError(e.response.data.message);
  }
  return await apiResponse;
};

export { fetchData, sendData };
