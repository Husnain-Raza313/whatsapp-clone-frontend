import React, { useEffect, useState } from 'react'
import LoginPage from './LoginPage';
import MainPage from './MainPage';

const HomePage = () => {

  const [token, setToken] = useState(null);
  const checkTimeout = () => {
    let expired = new Date(sessionStorage.getItem('expiry_time')) > new Date();
    console.log("expiry time: "+ expired);
    return expired;
  };

  const checkToken = () => {
    return sessionStorage.getItem('user_token') != null && checkTimeout() ;
  };
  useEffect(() => {
    console.log('Checking');
  }, [token]);

  return (
    <div>{checkToken() ? <MainPage /> : <LoginPage setToken={setToken}/> }</div>
  )
}

export default HomePage
