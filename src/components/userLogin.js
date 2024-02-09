import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { message, message as MESSAGE } from "antd";
import axios from 'axios';
export const configJSON = require("../components/config");
function UserLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoader, setIsLoader] = useState(false)
    const [eye, setEye] = useState(false)
    const [type,setType] = useState("password")
    const navigate = useNavigate()
    const handleResetPassword = () => {
        navigate("/reset-password")
    }

    const handleLogin = () => {
        setIsLoader(true)
        if (email && password) {
            const data = {
                email: email,
                password: password,

            }
            axios({
                url: configJSON.baseUrl + configJSON.login_buyer,
                method: "post",
                data: data,
            }).then((res) => {
                setIsLoader(false)

                if (res?.data?.success == true) {
                    MESSAGE.success(res?.data?.message)
                    localStorage.setItem("token", JSON.stringify(res?.data?.token))
                    localStorage.setItem("user_id", JSON.stringify(res?.data?.user_id))
                    setPassword("");
                    setEmail("");
                    navigate("/")
                }
                else {
                    MESSAGE.error(res?.data?.message)
                    setIsLoader(false)
                    setPassword("");
                    setEmail("");
                }
            })
                .catch((error) => {
                    console.log(error)
                    setPassword("")
                    setEmail("")
                })
        }
        else {
            setIsLoader(false)
            MESSAGE.error("Field can not be empty!")
        }
    }
    const handleEye = (val)=>{
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
                    <form name="login-form" className="needs-validation" novalidate>
                        <div className="form-floating mb-3">
                            <input name="login_email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control_gray" id="customerNameEmailInput" placeholder="Email address *" required />
                            <label htmlFor="customerNameEmailInput">Email address *</label>
                        </div>

                        <div className="pb-3"></div>

                        <div className="form-floating mb-3 position-relative">

                            <input name="login_password" type={type} value={password} onChange={(e) => setPassword(e.target.value)} className="form-control form-control_gray" id="customerPasswodInput" placeholder="Password *" required />
                           {
                            eye !=true ?<i class="fa-solid fa-eye-slash ct_pass_eye" onClick={()=>handleEye("text") }></i>
                            :  <i class="fa-solid fa-eye ct_pass_eye" onClick={()=>handleEye("password") }></i>
                           } 
                          
                           
                            <label htmlFor="customerPasswodInput">Password *</label>
                        </div>

                        <div className="d-flex align-items-center mb-3 pb-2">
                            <div className="form-check mb-0">
                                <input name="remember" className="form-check-input form-check-input_fill" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label text-secondary" htmlFor="flexCheckDefault">Remember me</label>
                            </div>
                            <a onClick={() => handleResetPassword()} className="btn-text ms-auto">Lost password?</a>
                        </div>

                        <button className="btn btn-primary w-100 text-uppercase" type="button" onClick={handleLogin}>Log In</button>

                        <div className="customer-option mt-4 text-center">
                            <span className="text-secondary">No account yet? </span>
                            <a href="#register-tab" className="btn-text js-show-register">Create Account</a>
                        </div>
                    </form>
                }
            </div>
        </>
    )
}

export default UserLogin