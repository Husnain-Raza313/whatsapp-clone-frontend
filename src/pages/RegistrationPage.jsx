import { Form, Formik, Field, ErrorMessage, useFormikContext } from "formik";
import * as yup from "yup";
import React, { useState, useEffect } from "react";
import { sendData } from "../api";

const RegistrationPage = () => {

  const [image, setImage] = useState({});

  const defaultValue ={
    fullname: '',
    password: '',
    username: '',
    phoneNumber: '',
    confirmPassword: '',
    profile: {}
  }
  const validationSchema = yup.object().shape({
    fullname: yup.string().min(8).max(20).required("Please Enter Name"),
    password: yup.string().min(8).required("Please Enter Password"),
    phoneNumber: yup.string().min(11).max(15).required("Please Enter Phone Number"),
    username: yup.string().min(8).max(18).required("Please Enter Username"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')


  });

  const handleSubmit = (values) => {
        values.profile = image;
        console.log(values);
     }

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
                <Formik initialValues={defaultValue} validationSchema={validationSchema} onSubmit={(values) => handleSubmit(values)}>
                  <Form>

                    <div className="row">
                      <div className="col-md-6 mb-2">
                        <div className="form-outline">
                          <Field type="text" id="form3Example1" name="fullname" className="form-control" placeholder="Name" />
                          <p className="text-danger"><ErrorMessage name="fullname"/></p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-2">
                        <div className="form-outline">
                          <Field type="text" id="form3Example2" name="username" className="form-control" placeholder="Username" />
                          <p className="text-danger"><ErrorMessage name="username"/></p>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <Field type="tel" id="form3Example3" className="form-control" name="phoneNumber" placeholder="Phone Number" />
                      <p className="text-danger"><ErrorMessage name="phoneNumber"/></p>
                    </div>

                    <div className="form-outline mb-4">
                      <Field type="password" id="form3Example4" className="form-control" name="password" placeholder="Password" />
                      <p className="text-danger"><ErrorMessage name="password"/></p>
                    </div>

                    <div className="form-outline mb-5">
                      <Field type="password" id="form3Example5" className="form-control" name="confirmPassword" placeholder="Confirm Password" />
                      <p className="text-danger"><ErrorMessage name="confirmPassword"/></p>
                    </div>

                    <div className="form-outline mb-5">
                    <input id="file" name="profile" type="file" onChange={(event) => {
                   setImage(event.target.files[0]);
                 }} />
                 </div>

                    <div className="w-100 d-flex justify-content-center">
                      <button type="submit" className="btn btn-success btn-lg rounded-1">
                        SIGN UP
                      </button>
                    </div>
                  </Form>
                  </Formik>
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
