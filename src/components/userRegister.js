import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message, message as MESSAGE } from "antd";
import axios from "axios";
export const configJSON = require("../components/config");
function UserRegister() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [islicenseState, setIsLicenseState] = useState(false)
  const [isLoader, setIsLoader] = useState(false)
  const [licenseStateOption, setLicenseStateOption] = useState("")
  const handleRegister = () => {
    setIsLoader(true)
    const data = {
      buyer_name: userName,
      email: email,
      phone_number: phone,
      password: password,
    };
    if (userName && email && password && phone) {
      axios({
        url: configJSON.baseUrl + configJSON.signUp_buyer,
        method: "post",
        data: data,
      })
        .then((res) => {
    setIsLoader(false)
          if (res?.data?.success == true) {
            MESSAGE.success(res?.data?.message);
            setPassword("");
            setEmail("");
            setPhone("");
            setUserName("");
            navigate("/login-register");
          } else {
            MESSAGE.error(res?.data?.message);
          }
        })
        .catch((error) => {
    setIsLoader(false)
          console.log(error);
          setPassword("");
          setEmail("");
          setPhone("");
          setUserName("");
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
        
        <form name="register-form" className="needs-validation" novalidate>
          <div className="form-floating mb-3">
            <input
              name="register_username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="form-control form-control_gray"
              id="customerNameRegisterInput"
              placeholder="Username"
              required
            />
            <label htmlFor="customerNameRegisterInput">Username</label>
          </div>

          <div className="pb-3"></div>

          <div className="form-floating mb-3">
            <input
              name="register_email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control form-control_gray"
              id="customerEmailRegisterInput"
              placeholder="Email address *"
              required
            />
            <label htmlFor="customerEmailRegisterInput">Email address *</label>
          </div>
          <div className="pb-3"></div>

          <div className="form-floating mb-3">
            <input
              name="register_email"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control form-control_gray"
              id="customerEmailRegisterInput"
              placeholder="Phone Number *"
              required
            />
            <label htmlFor="customerEmailRegisterInput">Phone Number *</label>
          </div>
          <div className="pb-3"></div>

          <div className="form-floating mb-3">
            <input
              name="register_email"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control form-control_gray"
              id="customerEmailRegisterInput"
              placeholder="Licence Number*"
              required
            />
            <label htmlFor="customerEmailRegisterInput">Licence Number*</label>
          </div>

          <div className="pb-3"></div>

          <div className="form-floating mb-3">
            <div class={islicenseState == false ? "form-label-fixed hover-container " : "form-label-fixed hover-container js-content_visible"}>
              <label for="search-dropdown7" class="form-label">Licence State *</label>
              <div class="js-hover__open" onClick={() => setIsLicenseState(!islicenseState)}>
                <input
                  type="text"
                  class="form-control form-control-lg search-field__actor search-field__arrow-down"
                  id="search-dropdown7"
                  name="search-keyword"
                  value={licenseStateOption}

                />
              </div>
              <div class="filters-container js-hidden-content mt-2">
                <ul class="search-suggestion list-unstyled" onClick={() => setIsLicenseState(!islicenseState)}>
                  <li class="search-suggestion__item js-search-select" onClick={() => setLicenseStateOption("ACT")}>
                    <a class=" mb-3 me-3 js-filter">
                      ACT
                    </a>
                  </li>
                  <li class="search-suggestion__item js-search-select" onClick={() => setLicenseStateOption("NSW")}>
                    <a class=" mb-3 me-3 js-filter">
                      NSW
                    </a>
                  </li>
                  <li class="search-suggestion__item js-search-select" onClick={() => setLicenseStateOption("SA")}>
                    <a class=" mb-3 me-3 js-filter">
                      SA
                    </a>
                  </li>
                  <li class="search-suggestion__item js-search-select" onClick={() => setLicenseStateOption("Vic")}>
                    <a class=" mb-3 me-3 js-filter">
                      Vic
                    </a>
                  </li>
                  <li class="search-suggestion__item js-search-select" onClick={() => setLicenseStateOption("Qld")}>
                    <a class=" mb-3 me-3 js-filter">
                      Qld
                    </a>
                  </li>
                  <li class="search-suggestion__item js-search-select" onClick={() => setLicenseStateOption("WA")}>
                    <a class=" mb-3 me-3 js-filter">
                      WA
                    </a>
                  </li>
                  <li class="search-suggestion__item js-search-select" onClick={() => setLicenseStateOption("WA")}>
                    <a class=" mb-3 me-3 js-filter">
                      NT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pb-3"></div>
          <div className="row">
            <div className="col-md-6">
              <div class="mb-3">
                <label className="mb-3">Selling (One-time Payment)</label>
                <div class="form-check ct_check_input mb-0 form-control form-control_gray ">
                  <input name="remember" class="form-check-input form-check-input_fill  me-2" style={{ marginLeft: "-15px" }} type="checkbox" id="flexCheckDefault" value="" />
                  <label class="form-check-label text-secondary" for="flexCheckDefault">One-time payment of $25.</label>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="mb-3">
                <label className="mb-3">Renting (Weekly Payment)</label>
                <div class="form-check ct_check_input mb-0 form-control form-control_gray ">
                  <input name="remember" class="form-check-input form-check-input_fill me-2" style={{ marginLeft: "-15px" }} type="checkbox" id="flexCheckDefault" value="" />
                  <label class="form-check-label text-secondary" for="flexCheckDefault">Weekly payment of $5.</label>
                </div>
              </div>
            </div>

          </div>
          <div className="pb-3"></div>
          <div className="form-floating mb-3">
            <input
              name="register_email"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control form-control_gray"
              id="customerEmailRegisterInput"
              placeholder="Address*"
              required
            />
            <label htmlFor="customerEmailRegisterInput">Address *</label>
          </div>

          <div className="pb-3"></div>
          {/* <div className="pb-3"></div> */}


          <div className="form-floating mb-3">
            <input
              name="register_password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control form-control_gray"
              id="customerPasswodRegisterInput"
              placeholder="Password *"
              required
            />
            <label htmlFor="customerPasswodRegisterInput">Password *</label>
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

          <div className="d-flex align-items-center mb-3 pb-2">
            <p className="m-0">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>

          <button
            className="btn btn-primary w-100 text-uppercase"
            type="button"
            onClick={handleRegister}
          >
            Register as Buyer
          </button>
        </form>
        }
      </div>
    </>
  );
}

export default UserRegister;
