import React, { useEffect } from 'react'
import { fetchData } from '../api';

const MainPage = () => {

  const checkTimeout = () => {
    let expired = new Date(sessionStorage.getItem('expiry_time')) > new Date();
    return expired;
  };

  const checkToken = () => {
    return sessionStorage.getItem('user_token') != null && checkTimeout ;
  };

  const getData = async () => {
    let id= 2;
    let res = await fetchData(`chat_room_participants/${id}`);
    console.log(res);
};

useEffect(() => {
  if (checkToken == true) {

    getData();
  }
}, []);

  return (
    <div>MainPage</div>
  )
}

export default MainPage
