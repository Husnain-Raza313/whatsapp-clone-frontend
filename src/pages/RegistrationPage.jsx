import React, { useState, useEffect } from "react";
import { sendData } from "../api";

const RegistrationPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    name: '',
    username: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });
  const validateForm = errors => {
    let valid = true;
    console.log("in valid form");
    console.log(errors);
    Object.values(errors).forEach(function (value) {
      value.length > 0 && (valid = false) });
      console.log(valid);
    return valid;
  };

  const checkFields = () => {
    console.log(phoneNumber.length);

    return phoneNumber.length > 0 && password.length > 0 && username.length > 0 && name.length > 0;
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let formErrors = errors;

    switch (name) {
      case 'name':

          if(value.length < 5){
            formErrors.name = 'must be 5 characters or more'
          }
          else {
            formErrors.name = ''
            setName(value);
          }
        break;
      case 'username':
            if(value.length < 5){
              formErrors.username = 'must be 5 characters or more'
            }
            else {
              formErrors.username = ''
              setUsername(value);
            }
        break;
      case 'phoneNumber':
          if(value.length < 11){
              formErrors.phoneNumber = 'Phone Number is not valid!'
            }
            else {
              formErrors.phoneNumber = ''
              setPhoneNumber(value);
            }
        break;
      case 'password':
            if(value.length < 8){
              formErrors.password = 'Password must be at least 8 characters long!'
            }
            else {
              formErrors.password = ''
              setPassword(value);
            }
        break;

      case 'confirmPassword':
            if(value === password){
              formErrors.confirmPassword = ''
              setConfirmPassword(value);
            }
            else {
              console.log(password);
              formErrors.confirmPassword = 'Password does not match!'
            }
        break;
      default:
        break;
    }

    setErrors({...errors, [name]: formErrors[name]});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(errors)) {
      console.info('Valid Form')
    }else{
      console.log(errors)
      console.error('Invalid Form')
    }
  }
  // const handleLogin = async () =>{

  //   const user = await { "phone_number": phoneNumber, "password": password };
  //   let res = await sendData("login",user);
  //   console.log(res);
  //   sessionStorage.setItem('user_token',res.session_token);

  // }
  // const validateForm = () => {
  //   return phoneNumber.length > 0 && password.length > 0;
  // };

  // useEffect(() => {
  //   setErrors({
  //     name: '',
  //     username: '',
  //     phoneNumber: '',
  //     password: ''
  //   })
  // }, []);

  return (
    <div
      className="vh-100"
      style={{ backgroundImage: "url('/whatsapp-background.jpeg')" }}
    >
    <section className="">
      <div className="px-4 py-5 px-md-5 text-center text-lg-start" >
        <div className="container p-5 my-5" style={{backgroundColor: "hsl(0, 0%, 96%)"}}>
          <div className="row gx-lg-5 align-items-center pl-5">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <h1 className="m-5 display-3 fw-bold ls-tight">
                Registration Page <br />
                <span className="text-success">Whatsapp Clone</span>
              </h1>
              <p className="m-5" style={{color: "hsl(217, 10%, 50.8%)"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
            </div>

            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="card border-0" style={{backgroundColor: "hsl(0, 0%, 96%)"}}>
                <div className="d-flex justify-content-start ">
                  <form>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1" name="name" onBlur={(e) => handleChange(e)} className="form-control" placeholder="Name"  />
                          {errors.name != '' &&
                            <span className='error text-danger'>{errors.name}</span>}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example2" name="username" onBlur={(e) => handleChange(e)} className="form-control" placeholder="Username"  />
                          {errors.username != '' &&
                            <span className='error text-danger'>{errors.username}</span>}
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="tel" id="form3Example3" className="form-control" name="phoneNumber" onBlur={(e) => handleChange(e)} placeholder="Phone Number" />
                      {errors.phoneNumber != '' &&
                        <span className='error text-danger'>{errors.phoneNumber}</span>}
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" name="password" onBlur={(e) => handleChange(e)} placeholder="Password"  />
                      {errors.password != '' &&
                        <span className='error text-danger'>{errors.password}</span>}
                    </div>

                    <div className="form-outline mb-5">
                      <input type="password" id="form3Example5" className="form-control" name="confirmPassword" onBlur={(e) => handleChange(e)} placeholder="Confirm Password"  />
                      {errors.confirmPassword != '' &&
                        <span className='error text-danger'>{errors.confirmPassword}</span>}
                    </div>

                    <div className="w-100 d-flex justify-content-center">
                      <button type="submit" className="btn btn-success btn-lg rounded-1"
                      disabled={!validateForm(errors) || !checkFields()}
                      onClick={handleSubmit}>
                        SIGN UP
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default RegistrationPage;
