import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { message, message as MESSAGE } from "antd";
export const configJSON = require("../components/config");
function EditPassword(props) {
    const [eye, setEye] = useState(false)
    const [eye1, setEye1] = useState(false)
    const [eye2, setEye2] = useState(false)
    const [cpass, setCpass] = useState("")
    const [newPass, setNewPass] = useState("")
    const [confirmNewPass, setConfirmNewPass] = useState("")
    const [isLoader, setIsLoader] = useState(false);
    const [accessToken, setAccessToken] = useState()
    const navigate = useNavigate();
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"));
        if (token == null) {
            navigate("/login");
        }
        else {
            setAccessToken(token)
        }
    }, [])
    const changePassword = () => {
        const user_id = JSON.parse(localStorage.getItem("user_id"));
        setIsLoader(true)
        
        const data = {
            user_id : user_id,
            older_password: cpass,
            new_password: confirmNewPass
        }
        if (cpass && newPass && confirmNewPass) {
            if (newPass == confirmNewPass) {
                axios({
                    url: configJSON.baseUrl + configJSON.changePasswordBuyer,
                    method: "post",
                    data: data,
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    },
                }).then((res) => {
                    setIsLoader(false)
                    if (res?.data?.success == true) {
                        MESSAGE.success(res?.data?.message)
                        props.onClick()
                    }
                    else {
                        MESSAGE.error(res?.data?.message)
                    }
                }).catch((error) => {
                    setIsLoader(false)
                    console.log(error)
                })
            } else {
                MESSAGE.error("New password & confirm new password doesn't match. !")
                setIsLoader(false)
            }
        } else {
            MESSAGE.error("Field can't be empty. !")
            setIsLoader(false)
        }

    }

    return (
        <>
            <div className='ct_change_password_div pt-3'>
                <div className="col-md-12">
                    <div className="my-3">
                        <h5 className="text-uppercase mb-0">Password Change</h5>
                    </div>
                </div>
                {
                    isLoader == true ? <div className="custom-loader"></div>
                        :
                        <>
                            <div className="col-md-12">
                                <div className="form-floating my-3 position-relative">
                                    <input onChange={(e) => setCpass(e.target.value)} value={cpass} type={eye ? 'text' : 'password'} className="form-control" id="account_current_password" placeholder="Current password" required />
                               <i className={`fa-solid ct_pass_eye ${eye ? 'fa-eye-slash' : 'fa-eye'}`} onClick={() =>setEye(!eye)}></i>
                                            
                                    <label htmlFor="account_current_password">Current password</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-floating my-3 position-relative">
                                    <input onChange={(e) => setNewPass(e.target.value)} value={newPass} type={eye1 ? 'text' : 'password'} className="form-control" id="account_new_password" placeholder="New password" required />
                                
                                         <i className={`fa-solid ct_pass_eye ${eye1 ? 'fa-eye-slash' : 'fa-eye'}`} onClick={() =>setEye1(!eye1)}></i>
                                           
                                    <label htmlFor="account_new_password">New password</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-floating my-3 position-relative">
                                    <input onChange={(e) => setConfirmNewPass(e.target.value)} value={confirmNewPass} type={eye2 ? 'text' : 'password'} className="form-control" cfpwd data-cf-pwd="#account_new_password" id="account_confirm_password" placeholder="Confirm new password" required />
                                 <i className={`fa-solid ct_pass_eye ${eye2 ? 'fa-eye-slash' : 'fa-eye'}`} onClick={() =>setEye2(!eye2)}></i>
                                         
                                    <label htmlFor="account_confirm_password">Confirm new password</label>
                                    <div className="invalid-feedback">Passwords did not match!</div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="my-3 max-auto text-center">
                                    <button className="btn btn-primary" type='button' onClick={() => changePassword()}>Change Password</button>
                                </div>
                            </div>
                        </>
                }

            </div>
        </>
    )
}

export default EditPassword