import React, { useEffect, useState } from 'react'
import Header from './header'
import Footer from './footer'
import { useNavigate } from 'react-router-dom'
import axios, { all } from 'axios'
import moment from 'moment';
export const configJSON = require("../components/config");
function Cancel_order() {
  const navigate = useNavigate()
  const [isLoader, setIsLoader] = useState(false);

  useEffect(()=>{
    cancelOrder()
  },[])
  const cancelOrder = () => {
    setIsLoader(true)
    const cart_id = JSON.parse(localStorage.getItem("cart_id"))
    const data = {
      "cart_id": `${cart_id}`,
    }
    axios({
      url: configJSON.baseUrl + configJSON.updatePaymentStatus,
      method: "POST",
      data: data,
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => {
      console.log(res, "helo")
      setIsLoader(false)
    }).catch((err) => {
      console.log(err)
      setIsLoader(false)
    })
  }
  
  return (

    <>
      <Header />
      {
        isLoader && <div className="custom-loader"></div>
      }
      {
        !isLoader && <main>
          <div class="mb-4 pb-4"></div>
          <section >
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 mx-auto'>
                  <div className='ct_cancle_order_box'>
                    <div className='ct_cancle_icon1'>
                      <i class="fa-solid fa-xmark"></i>
                    </div>
                    <div className='ct_cancle_order_info'>
                      <h3>Order  Cancelled!</h3>
                      <p>Your order has been cancelled</p>

                      <div className='mt-4'>
                        <a className='btn btn-primary btn-checkout' onClick={() => navigate('/')}>GO TO HOMEPAGE</a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>
          <div class="mb-4 pb-4"></div>
        </main>
      }

      <Footer />
    </>

  )
}

export default Cancel_order