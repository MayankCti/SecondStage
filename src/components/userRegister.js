import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message, message as MESSAGE } from "antd";
import axios from "axios";
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

  const handleRegister = () => {
    setIsLoader(true)

    const data = {
      buyer_name: name,
      user_name: userName,
      email: email,
      phone_number: phone,
      license_state: licenseState,
      license_number: licenseNumber
    };
    if (userName && email && phone && name && licenseState && licenseNumber) {
      axios({
        url: configJSON.baseUrl + configJSON.signUp_buyer,
        method: "post",
        data: data,
      })
        .then((res) => {
          setIsLoader(false)
          if (res?.data?.success == true) {
            MESSAGE.success(res?.data?.message);
            setName("")
            setUserName("")
            setEmail("")
            setPhone("")
            setLicenseNumber("")
            setLicenseState("")
            setIsLoader("")
            navigate("/login-register");
          } else {
            MESSAGE.error(res?.data?.message);
            setName("")
            setUserName("")
            setEmail("")
            setPhone("")
            setLicenseNumber("")
            setLicenseState("")
            setIsLoader("")
          }
        })
        .catch((error) => {
          setIsLoader(false)
          console.log(error);

        });
    } else {
      MESSAGE.error(" Please Fill All The fields");
    }
  };
  return (
    <>
      <div className="register-form">
        {
          isLoader == true ?
            <div class="custom-loader"></div> :

            <div className="login-form">
              <form
                name="login-form"
                className="needs-validation"
                novalidate=""
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
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
                    <div className="form-floating mb-3">
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
                        Create Username*
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        name="login_email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control form-control_gray"
                        id="customerNameEmailInput"
                        placeholder="Email Email*"
                        required=""
                      />
                      <label htmlFor="customerNameEmailInput">Email*</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
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
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
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
                    <div className="form-floating mb-3">
                      <input
                        name="login_email"
                        type="number"
                        value={licenseState}
                        onChange={(e) => setLicenseState(e.target.value)}
                        className="form-control form-control_gray"
                        id="customerNameEmailInput"
                        placeholder="Email Licence Number *"
                        required=""
                      />
                      <label htmlFor="customerNameEmailInput">
                        Licence State *
                      </label>
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
                  onClick={handleRegister}
                >
                  Submit
                </button>
              </form>
            </div>
        }
      </div>
    </>
  );
}

export default UserRegister;
