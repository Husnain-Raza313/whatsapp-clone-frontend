import React from 'react';
import {
  Form,
  Formik,
  Field,
  ErrorMessage
} from "formik";
import * as yup from "yup";
import { sendData } from "../api";
import { useNavigate } from "react-router-dom";

const RegistrationForm = (props) => {
  let navigate = useNavigate();

  const defaultValue = {
    name: "",
    password: "",
    username: "",
    phone_number: "",
    password_confirmation: "",
    image: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().min(8).max(20).required("Please Enter Name"),
    password: yup.string().min(8).required("Please Enter Password"),
    phone_number: yup
      .string()
      .min(11)
      .max(15)
      .required("Please Enter Phone Number"),
    username: yup.string().min(8).max(18).required("Please Enter Username"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    image: yup.mixed().required("You need to provide a file").test('format',
    'Allowed formats are jpg, png, jpeg', (value) => !value || (value && ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)))
  });

  const handleSubmit = async (values) => {
    let formData = new FormData();
    formData.append("name", values.name);
    formData.append("username", values.username);
    formData.append("password", values.password);
    formData.append("phone_number", values.phone_number);
    formData.append("profile_pic", values.image);
    // values.image = image;
    // console.log(values);
    // let res = await sendData('users',{"user": values});
    let res = await sendData("users", formData);
    if (res.status == '200') {
      console.log(res.data);
    props.setUser(formData);
    props.setSecKey(res.data.otp_secret_key);
    props.setDisplayOtp(true);
    }
    // sessionStorage.setItem('user_token',res.token);
    // sessionStorage.setItem('expiry_time',res.exp);
    // // navigate('/');
  };


  return (
    <div className="d-flex justify-content-start ">
    <Formik
      initialValues={defaultValue}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {(formProps) => (
        <Form>
          <div className="row registration-div">
            <div className="col-md-6 mb-2 registration-form-element">
              <div className="form-outline registration-div">
                <Field
                  type="text"
                  id="form3Example1"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                />
                <p className="text-danger">
                  <ErrorMessage name="name" />
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-2 registration-form-element">
              <div className="form-outline registration-div">
                <Field
                  type="text"
                  id="form3Example2"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                />
                <p className="text-danger">
                  <ErrorMessage name="username" />
                </p>
              </div>
            </div>
          </div>

          <div className="form-outline mb-4 registration-div">
            <Field
              type="tel"
              id="form3Example3"
              className="form-control "
              name="phone_number"
              placeholder="Phone Number"
            />
            <p className="text-danger">
              <ErrorMessage name="phone_number" />
            </p>
          </div>

          <div className="form-outline mb-4 registration-div">
            <Field
              type="password"
              id="form3Example4"
              className="form-control"
              name="password"
              placeholder="Password"
            />
            <p className="text-danger">
              <ErrorMessage name="password" />
            </p>
          </div>

          <div className="form-outline mb-5 registration-div">
            <Field
              type="password"
              id="form3Example5"
              className="form-control"
              name="password_confirmation"
              placeholder="Confirm Password"
            />
            <p className="text-danger">
              <ErrorMessage name="password_confirmation" />
            </p>
          </div>

          <div className="form-outline mb-5 registration-div">
            <input
              id="file"
              name="image"
              type="file"
              accept="image/png, image/jpeg"
              onChange={(event) => {
                // setImage(event.target.files[0]);
                formProps.setFieldValue(
                  "image",
                  event.target.files[0]
                );
              }}
            />
            <p className="text-danger">
            <ErrorMessage name="image" />
          </p>
          </div>

          <div className="w-100 d-flex justify-content-center registration-div">
            <button
              type="submit"
              className="btn btn-success btn-lg rounded-1"
            >
              SIGN UP
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
  )
}

export default RegistrationForm
