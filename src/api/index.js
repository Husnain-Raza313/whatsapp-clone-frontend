import axios from "axios";
import { toast } from "react-toastify";
import { URL } from "../helpers/globalVariables";

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

    return await apiResponse;
  } catch (e) {
    // window.location.replace(`/errorpage?msg=${e.code}`);
    apiResponse = e.response;
    console.log(e.response.status);
    toast.error(e.response.data.message);
    console.log(e);
    return await apiResponse;
  }
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
    return await apiResponse;
  } catch (e) {
    // window.location.replace(`/errorpage?msg=${e.code}`);
    apiResponse = e.response;
    console.log(e.response.status);
    toast.error(e.response.data.message);
    console.log(e);
    return await apiResponse;
  }
};

export { fetchData, sendData };
