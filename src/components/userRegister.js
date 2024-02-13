import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message, message as MESSAGE } from "antd";
import axios from "axios";
import { Formik } from 'formik';
import { Schema_login_form } from "./Schema";
export const configJSON = require("../components/config");
function UserRegister() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("")
  const [licenseState, setLicenseState] = useState("")
  const [isLoader, setIsLoader] = useState(false)

  const handleRegister = (val , {resetForm }) => {
    setIsLoader(true)

    
      axios({
        url: configJSON.baseUrl + configJSON.signUp_buyer,
        method: "post",
        data: val,
      })
        .then((res) => {
          setIsLoader(false)
          if (res?.data?.success == true) {
            MESSAGE.success(res?.data?.message);
            resetForm();
            navigate("/login-register");
          } else {
            MESSAGE.error(res?.data?.message);
          }
        })
        .catch((error) => {
          setIsLoader(false)
          console.log(error);

        });
   
  };
  return (
    <>
      <div className="register-form">
        {
          isLoader == true ?
            <div class="custom-loader"></div> :


            <div className="login-form">
              <Formik
                initialValues={{buyer_name:'',user_name:'', email: '', phone_number: '' ,license_state:'',license_number:''}}
                validationSchema={Schema_login_form}
                onSubmit={(values, actions) => {
                  handleRegister(values,actions)
                }}
              >
                {
                  ({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form
                      name="login-form"
                      className="needs-validation"
                      novalidate=""
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-floating mb-3">
                            <input
                              name="buyer_name"
                              type="text"
                              value={values.buyer_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="form-control form-control_gray"
                              id="customerNameEmailInput"
                              placeholder="Email Name*"
                              required=""
                            />
                            <label htmlFor="customerNameEmailInput">Name*</label>
                          <span style={{color:"red"}}>{errors.buyer_name && touched.buyer_name && errors.buyer_name}</span>
                          </div>

                        </div>
                        <div className="col-md-6">
                          <div className="form-floating mb-3">
                            <input
                              name="user_name"
                              type="text"
                              value={values.user_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="form-control form-control_gray"
                              id="customerNameEmailInput"
                              placeholder="Email Create Username*"
                              required=""
                            />
                            <label htmlFor="customerNameEmailInput">
                              Create Username*
                            </label>
                          <span style={{color:"red"}}>{errors.user_name && touched.user_name && errors.user_name}</span>
                          </div>

                        </div>
                        <div className="col-md-6">
                          <div className="form-floating mb-3">
                            <input
                              onBlur={handleBlur}
                              value={values.email}
                              type="email"
                              name="email"
                              onChange={handleChange}
                              className="form-control form-control_gray"
                              id="customerNameEmailInput"
                              placeholder="Email Email*"
                              required=""
                            />
                            <label htmlFor="customerNameEmailInput">Email*</label>
                          <span style={{color:"red"}}>{errors.email && touched.email && errors.email}</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating mb-3">
                            <input
                              name="phone_number"
                              onBlur={handleBlur}
                              type="number"
                              value={values.phone_number}
                              onChange={handleChange}
                              className="form-control form-control_gray"
                              id="customerNameEmailInput"
                              placeholder="Email Phone*"
                              required=""
                            />
                            <label htmlFor="customerNameEmailInput">Phone*</label>
                          <span style={{color:"red"}}>{errors.phone_number && touched.phone_number && errors.phone_number}</span>
                          </div>

                        </div>
                        <div className="col-md-6">
                          <div className="form-floating mb-3">
                            <input
                              name="license_number"
                              type="text"
                              value={values.license_number}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="form-control form-control_gray"
                              id="customerNameEmailInput"
                              placeholder="Email Licence Number *"
                              required=""
                            />
                            <label htmlFor="customerNameEmailInput">
                              Licence Number *
                            </label>
                          <span style={{color:"red"}}>{errors.license_number && touched.license_number && errors.license_number}</span>
                          </div>

                        </div>
                        <div className="col-md-6">
                          <div className="form-floating mb-3">
                            <input
                              name="license_state"
                              type="text"
                              value={values.license_state}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="form-control form-control_gray"
                              id="customerNameEmailInput"
                              placeholder="Email Licence Number *"
                             
                            />
                            <label htmlFor="customerNameEmailInput">
                              Licence State *
                            </label>
                          <span style={{color:"red"}}>{errors.license_state && touched.license_state && errors.license_state}</span>
                          </div>

                        </div>

                      </div>

                      <div className="d-flex align-items-center mb-3 pb-2">
                        <div className="form-check ct_check_input mb-0">
                          <input
                            name="remember"
                            className="form-check-input form-check-input_fill "
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label text-secondary"
                            htmlFor="flexCheckDefault"
                          >
                            Agreement to{" "}
                            <a onClick={() => navigate("/terms")}>
                              Terms and Conditions
                            </a>{" "}
                          </label>
                        </div>
                      </div>
                      <button
                        className="btn btn-primary w-100 text-uppercase"
                        type="button"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </form>
                  )
                }
                </Formik>
            </div>
        }
      </div>
    </>
  );
}

export default UserRegister;
