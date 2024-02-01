import React, { useState, useEffect } from 'react'
import Header from './header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
export const configJSON = require("../components/config");


function HeaderManagement() {
    const [isCartSidebar, setIsCartSidebar] = useState(false)
    const [cartData, setCartData] = useState([])
    const [accessToken, setAccessToken] = useState()
    const [isLoader, setIsLoader] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"))
        if (token == null) {
            navigate('/login-register')
        } else {
            getCartData(token)
        }
    }, [])


    const getCartData = (val, val2) => {
        setIsLoader(true)
        setAccessToken(val)
        axios({
          url: configJSON.baseUrl + configJSON.getCartData,
          method: "get",
          headers: {
            'Authorization': `Bearer ${val}`
          },
        }).then((res) => {
          setIsLoader(false)
          if (res?.data?.success == true) {
            setCartData(res?.data?.cart)
            val2 == true ?
            setIsCartSidebar(true)
            : 
            setIsCartSidebar(false)
          }
          else {
            setCartData([])
          }
        }).catch((error) => {
          setIsLoader(false)
          console.log(error)
        })
      }
      const getDataFromChild = () => {
        getCartData(accessToken,true)
      }
    return (
        <Header data={cartData?.length !== 0 && cartData} onClick={getDataFromChild} isCartSidebar={isCartSidebar} />
        // {isLoader == false ?
        // <></>
        // :<div class="custom-loader"></div>
        //     }
    )
}

export default HeaderManagement