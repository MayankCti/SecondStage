import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { message, message as MESSAGE } from "antd";
import axios from 'axios';
import { Formik } from 'formik';
import { Schema_login_form1 } from "./Schema";
export const configJSON = require("../components/config");
function UserLogin() {

    const [isLoader, setIsLoader] = useState(false)
    const [eye, setEye] = useState(false)
    const [type, setType] = useState("password")
    const navigate = useNavigate()
    const handleResetPassword = () => {
        navigate("/reset-password")
    }

    const handleLogin = (values, { resetForm }) => {
        setIsLoader(true)
        axios({
            url: configJSON.baseUrl + configJSON.loginBuyer,
            method: "post",
            data: values,
        }).then((res) => {
            setIsLoader(false)
            if (res?.data?.success == true) {
                MESSAGE.success(res?.data?.message)
                localStorage.setItem("token", JSON.stringify(res?.data?.token))
                localStorage.setItem("user_id", JSON.stringify(res?.data?.user_id))
                resetForm()
                navigate("/")
            }
            else {
                MESSAGE.error(res?.data?.message)
                setIsLoader(false)
            }
        })
            .catch((error) => {
                console.log(error)
            })
    }
    const handleEye = (val) => {
        setType(val)
        setEye(!eye)
    }
    return (
        <>
            <div className="login-form">
                {
                    isLoader == true &&
                    <div class="custom-loader"></div>
                }
                {isLoader == false &&
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={Schema_login_form1}
                        onSubmit={(values, actions) => {
                            handleLogin(values, actions)
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
                                <form name="login-form" className="needs-validation" novalidate>
                                    <div className="form-floating mb-3">
                                        <input name="email" type="email" onChange={handleChange}
                                            onBlur={handleBlur} value={values.email} className="form-control form-control_gray" id="customerNameEmailInput" placeholder="Email address *" required />
                                        <label htmlFor="customerNameEmailInput">Email address *</label>
                                        <span style={{ color: "red" }}>{errors.email && touched.email && errors.email}</span>
                                    </div>
                                    <div className="pb-3"></div>
                                    <div className="form-floating mb-3 position-relative">
                                        <input name="password" onBlur={handleBlur} onChange={handleChange} type={type} value={values.password} className="form-control form-control_gray" id="customerPasswodInput" placeholder="Password *" required />
                                        {
                                            eye != true ? <i class="fa-solid fa-eye-slash ct_pass_eye" onClick={() => handleEye("text")}></i>
                                                : <i class="fa-solid fa-eye ct_pass_eye" onClick={() => handleEye("password")}></i>
                                        }
                                        <label htmlFor="customerPasswodInput">Password *</label>
                                        <span style={{ color: "red" }}>{errors.password && touched.password && errors.password}</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-3 pb-2">
                                        <div className="form-check mb-0">
                                            <input name="remember" className="form-check-input form-check-input_fill" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label text-secondary" htmlFor="flexCheckDefault">Remember me</label>
                                        </div>
                                        <a onClick={() => handleResetPassword()} className="btn-text ms-auto">Lost password?</a>
                                    </div>
                                    <button className="btn btn-primary w-100 text-uppercase" type="button" onClick={handleSubmit}>Log In</button>
                                </form>
                            )
                        }
                    </Formik>
                }
            </div>
        </>
    )
}

export default UserLogin