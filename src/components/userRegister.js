import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { message, message as MESSAGE } from "antd";
import axios from 'axios';
export const configJSON = require("../components/config");
function UserRegister() {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = () => {
        const data = {
            buyer_name: userName,
            email: email,
            phone_number: phone,
            password: password
        }
        if (userName && email && password && phone) {
            axios({
                url: configJSON.baseUrl + configJSON.signUp_buyer,
                method: "post",
                data: data
            })
                .then((res) => {
                    console.log(res)
                    if (res?.data?.success == true) {
                        MESSAGE.success(res?.data?.message)
                        setPassword("")
                        setEmail("")
                        setPhone("")
                        setUserName("")
                        navigate("/login-register")
                    }
                    else {
                        MESSAGE.error(res?.data?.message)
                    }
                })
                .catch((error) => {
                    console.log(error)
                    setPassword("")
                    setEmail("")
                    setPhone("")
                    setUserName("")
                })
        }
        else {
            MESSAGE.error(" Please Fill All The fields")
        }
    }
    return (
        <>
            <div className="register-form">
                <form name="register-form" className="needs-validation" novalidate>
                    <div className="form-floating mb-3">
                        <input name="register_username" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="form-control form-control_gray" id="customerNameRegisterInput" placeholder="Username" required />
                        <label htmlFor="customerNameRegisterInput">Username</label>
                    </div>

                    <div className="pb-3"></div>

                    <div className="form-floating mb-3">
                        <input name="register_email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control_gray" id="customerEmailRegisterInput" placeholder="Email address *" required />
                        <label htmlFor="customerEmailRegisterInput">Email address *</label>
                    </div>
                    <div className="pb-3"></div>

                    <div className="form-floating mb-3">
                        <input name="register_email" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control form-control_gray" id="customerEmailRegisterInput" placeholder="Phone Number *" required />
                        <label htmlFor="customerEmailRegisterInput">Phone Number *</label>
                    </div>


                    <div className="pb-3"></div>

                    <div className="form-floating mb-3">
                        <input name="register_password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control form-control_gray" id="customerPasswodRegisterInput" placeholder="Password *" required />
                        <label htmlFor="customerPasswodRegisterInput">Password *</label>
                    </div>

                    <div className="d-flex align-items-center mb-3 pb-2">
                        <p className="m-0">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                    </div>

                    <button className="btn btn-primary w-100 text-uppercase" type="button" onClick={handleRegister}>Register as Buyer</button>

                </form>
            </div>
        </>
    )
}

export default UserRegister