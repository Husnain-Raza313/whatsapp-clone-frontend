import { Form, Formik, Field, ErrorMessage, formik, useFormikContext, useFormik } from "formik";
import * as yup from "yup";
import React, { useState, useEffect, useRef } from "react";
import { fetchData, sendData } from "../api";
import { useNavigate, useParams } from "react-router-dom";

const RegistrationPage = () => {

  const [image, setImage] = useState({});
  const [displayOtp, setDisplayOtp] = useState(true);
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState({});
  let navigate = useNavigate();

  const defaultValue ={
    name: '',
    password: '',
    username: '',
    phone_number: '',
    password_confirmation: '',
    image: ""
  }
  const validationSchema = yup.object().shape({
    name: yup.string().min(8).max(20).required("Please Enter Name"),
    password: yup.string().min(8).required("Please Enter Password"),
    phone_number: yup.string().min(11).max(15).required("Please Enter Phone Number"),
    username: yup.string().min(8).max(18).required("Please Enter Username"),
    password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')


  });

  const handleSubmit = async (values) => {

        let formData = new FormData();
        formData.append("name", values.name);
        formData.append("username", values.username);
        formData.append("password", values.password);
        formData.append("phone_number", values.phone_number);
        formData.append("profile_pic", values.image);
        // values.image = image;
        console.log(values);
        setDisplayOtp(true);
        // let res = await sendData('users',{"user": values});
        let res = await sendData('users',formData);
        setUser(formData);
        // console.log(res);
        // sessionStorage.setItem('user_token',res.token);
        // sessionStorage.setItem('expiry_time',res.exp);
        // // navigate('/');
     }
  const verifyOtp = async () =>{

    // let userParams = Object.assign({user: user});
    // console.log(otp);
    console.log(user);
    let res = await sendData(`users/${otp}/verify_otp`,user);
    console.log(res);
    navigate('/');
  }

  return (
    <div
      className="vh-100"
      style={{ backgroundImage: "url('/whatsapp-background.jpeg')" }}
    >
    <section className="">
      <div className="px-4  px-md-5 text-center text-lg-start" >
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
                <Formik initialValues={defaultValue} validationSchema={validationSchema} onSubmit={(values) => handleSubmit(values)}>
                  { (formProps) => (
                    <Form>

                    <div className="row registration-div">
                      <div className="col-md-6 mb-2 registration-form-element">
                        <div className="form-outline registration-div">
                          <Field type="text" id="form3Example1" name="name" className="form-control" placeholder="Name" />
                          <p className="text-danger"><ErrorMessage name="name"/></p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-2 registration-form-element">
                        <div className="form-outline registration-div">
                          <Field type="text" id="form3Example2" name="username" className="form-control" placeholder="Username" />
                          <p className="text-danger"><ErrorMessage name="username"/></p>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4 registration-div">
                      <Field type="tel" id="form3Example3" className="form-control " name="phone_number" placeholder="Phone Number" />
                      <p className="text-danger"><ErrorMessage name="phone_number"/></p>
                    </div>

                    <div className="form-outline mb-4 registration-div">
                      <Field type="password" id="form3Example4" className="form-control" name="password" placeholder="Password" />
                      <p className="text-danger"><ErrorMessage name="password"/></p>
                    </div>

                    <div className="form-outline mb-5 registration-div">
                      <Field type="password" id="form3Example5" className="form-control" name="password_confirmation" placeholder="Confirm Password" />
                      <p className="text-danger"><ErrorMessage name="password_confirmation"/></p>
                    </div>

                    <div className="form-outline mb-5 registration-div">
                    <input id="file" name="image" type="file" accept="image/png, image/jpeg" onChange={(event) => {
                  // setImage(event.target.files[0]);
                  formProps.setFieldValue("image", event.target.files[0])
                 }} />
                 </div>

                    <div className="w-100 d-flex justify-content-center registration-div">
                      <button type="submit" className="btn btn-success btn-lg rounded-1">
                        SIGN UP
                      </button>
                    </div>
                  </Form>

                  )}

                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        {displayOtp &&
          <div class="container height-100 d-flex justify-content-center align-items-center">
        <div class="position-relative w-50">
        <div class="card p-2 text-center">
        <h6>Please enter the one time password <br/> to verify your account</h6> <div> <span>A code has been sent to</span> <small>*******9897</small>
         </div> <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2 h-25">
          <input class="m-2 text-center form-control rounded w-25" placeholder="Enter OTP" type="text" id="first" maxlength="4" onChange={(e) => setOtp(e.target.value) } />
            </div> <div class="mt-4">
            <button class="btn btn-danger px-4 validate" onClick={verifyOtp}>Validate</button>
             </div>
              </div>
                </div>
</div>
}

        </div>
      </div>
    </section>
    </div>
  );
};

export default RegistrationPage;
