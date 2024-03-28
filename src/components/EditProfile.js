import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { message, message as MESSAGE } from "antd";

export const configJSON = require("../components/config");

function EditProfile(props) {

  const data = props?.data
  const navigate = useNavigate();
  const [islicenseState, setIsLicenseState] = useState(false)
  const [name, setName] = useState(data?.buyer_name);
  const [userName, setUserName] = useState(data?.user_name);
  const [email, setEmail] = useState(data?.email);
  const [phone, setPhone] = useState(data?.phone_number);
  const [licenseNumber, setLicenseNumber] = useState(data?.license_number)
  const [licenseState, setLicenseState] = useState(data?.license_state)
  const [show_image, setShowImage] = useState(data?.profile_image)
  const [changeImage, setChangeImg] = useState()
  const [isLoader, setIsLoader] = useState(false);
  const [accessToken, setAccessToken] = useState()
  // editProfile_buyer
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    setAccessToken(token)
    if (token == null) {
      navigate("/login");
    }
  }, [])
  const editProfie = () => {
    setIsLoader(true)
    const data = new FormData()
    data.append("buyer_name", name)
    data.append("user_name", userName)
    data.append("phone_number", phone)
    data.append("license_number", licenseNumber)
    data.append("license_state", licenseState)
    if (changeImage) {
      data.append("file", changeImage)
    }

    if (name && userName && phone && licenseState && licenseNumber) {
      axios({
        url: configJSON.baseUrl + configJSON.editProfile_buyer,
        method: "post",
        data: data,
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
      }).then((res) => {
        setIsLoader(false)
        if (res?.data?.success == true) {
          MESSAGE.success(res?.data?.message)
          props?.falsedata()
        }
        else {
          MESSAGE.error(res?.data?.message)
        }
      }).catch((err) => {
        console.log(err)
        setIsLoader(false)
      })
    }

  }


  const uploadImage = (e) => {
    setChangeImg(e.target.files[0])
    const blob = new Blob([e.target.files[0]], { type: e.target.files[0]?.type });
    setShowImage(URL.createObjectURL(blob))
  }
  return (
    <>
      {
        isLoader == true ?
          <div className="custom-loader"></div>
          :
          <>
            <div className='col-md-12'>
              <div className="ct_profile_img mb-5">
                <img
                  src={show_image ? show_image : "images/buyer_profile.png"} />
                <label for="ct_change_profile">
                  <div className="ct_edit_img_icon">
                    <i className="fa-solid fa-pencil"></i>
                  </div>
                  <input type='file' id='ct_change_profile' className='d-none' onChange={(e) => uploadImage(e)} />
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating my-3">
                <input
                  name="login_email"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control form-control_gray"
                  id="customerNameEmailInput"
                  placeholder="Email Name*"
                  required=""
                />
                <label htmlFor="customerNameEmailInput">Name*</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating my-3">
                <input
                  name="login_email"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-control form-control_gray"
                  id="customerNameEmailInput"
                  placeholder="Email Create Username*"
                  required=""
                />
                <label htmlFor="customerNameEmailInput">
                  Username*
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating my-3">
                <input
                  name="login_email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control form-control_gray"
                  id="customerNameEmailInput"
                  placeholder="Email Email*"
                  required=""
                  readOnly={true}
                />
                <label htmlFor="customerNameEmailInput">Email*</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className='d-flex align-items-center'>
                <p className='ct_country_drop_list mb-0 d-flex align-items-center px-3'>+61</p>
                <div className="form-floating my-3 w-100">
                  <input
                    name="login_email"
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control form-control_gray"
                    id="customerNameEmailInput"
                    placeholder="Email Phone*"
                    required=""
                  />
                  <label htmlFor="customerNameEmailInput">Phone*</label>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating my-3">
                <input
                  name="login_email"
                  type="number"
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value)}
                  className="form-control form-control_gray"
                  id="customerNameEmailInput"
                  placeholder="Email Licence Number *"
                  required=""
                />
                <label htmlFor="customerNameEmailInput">
                  Licence Number *
                </label>
              </div>
            </div>

            <div className="col-md-6">

              <div className="form-floating my-3">
                <div class={islicenseState == false ? "form-label-fixed hover-container " : "form-label-fixed hover-container js-content_visible"}>
                  <label for="search-dropdown7" className="form-label">Licence State *</label>
                  <div className="js-hover__open" onClick={() => setIsLicenseState(!islicenseState)}>
                    <input
                      type="text"
                      className="form-control form-control-lg search-field__actor search-field__arrow-down"
                      id="search-dropdown7"
                      name="search-keyword"
                      value={licenseState}
                      autofill={false}
                    />
                  </div>
                  <div className="filters-container js-hidden-content mt-2">
                    <ul className="search-suggestion list-unstyled" onClick={() => setIsLicenseState(!islicenseState)}>
                      <li className="search-suggestion__item js-search-select" onClick={() => setLicenseState("ACT")}>
                        <a className=" mb-3 me-3 js-filter">
                          ACT
                        </a>
                      </li>
                      <li className="search-suggestion__item js-search-select" onClick={() => setLicenseState("NSW")}>
                        <a className=" mb-3 me-3 js-filter">
                          NSW
                        </a>
                      </li>
                      <li className="search-suggestion__item js-search-select" onClick={() => setLicenseState("SA")}>
                        <a className=" mb-3 me-3 js-filter">
                          SA
                        </a>
                      </li>
                      <li className="search-suggestion__item js-search-select" onClick={() => setLicenseState("Vic")}>
                        <a className=" mb-3 me-3 js-filter">
                          Vic
                        </a>
                      </li>
                      <li className="search-suggestion__item js-search-select" onClick={() => setLicenseState("Qld")}>
                        <a className=" mb-3 me-3 js-filter">
                          Qld
                        </a>
                      </li>
                      <li className="search-suggestion__item js-search-select" onClick={() => setLicenseState("WA")}>
                        <a className=" mb-3 me-3 js-filter">
                          WA
                        </a>
                      </li>
                      <li className="search-suggestion__item js-search-select" onClick={() => setLicenseState("WA")}>
                        <a className=" mb-3 me-3 js-filter">
                          NT
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-12">
              <div className="my-3">
                <button className="btn btn-primary" type='button' onClick={() => editProfie()}>Save Changes</button>
              </div>
            </div>
          </>
      }


    </>
  )
}

export default EditProfile