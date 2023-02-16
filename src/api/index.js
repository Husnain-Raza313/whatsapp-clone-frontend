import axios from "axios";
import { toast } from "react-toastify";

let apiResponse;

const fetchData = async (address) => {
  try{
await axios({
    method: 'get',
    url: `http://localhost:3000/api/v1/${address}`,
    headers: {
      'Authorization': `Bearer ${sessionStorage.getItem('user_token')}`
    }
  })
    .then(function (response) {
     apiResponse= response.data;

    });

   return await apiResponse;
  }
  catch (e) {
    // window.location.replace(`/errorpage?msg=${e.code}`);
    toast.error(e.code);
  }

};

const sendData = async (address,object) => {
  try{
await axios({
    method: 'post',
    url: `http://localhost:3000/api/v1/${address}`,
    headers: {
      'Authorization': `Bearer ${sessionStorage.getItem('user_token')}`
    },
    data: object
  })
    .then(function (response) {
     apiResponse= response.data;

    });
   return await apiResponse;
  }
  catch (e) {
    // window.location.replace(`/errorpage?msg=${e.code}`);
    toast.error(e.code);
  }

};

export {fetchData, sendData};
