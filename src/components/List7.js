import React from 'react'
import { useNavigate } from 'react-router-dom'

function List7(props) {
    const active = props.data
    console.log(active)
    const navigate = useNavigate()

    const handleAccountEditAddress = ()=>{
        navigate("/account-edit-address")
      }
      const handleAccountEdit = ()=>{
        navigate("/account-edit")
      }
      const handleAccountOrders = ()=>{
        navigate("/account-orders")
      }
      const handleLoginRegister = ()=>{
        navigate("/login-register")
      }

      const handleAccountWishlist = ()=>{
        navigate("/account-wishlist")
      }
const handleSellItem = ()=>{
    navigate("/sell-item")
} 
const handleAccountDashboard = ()=>{
    navigate('/account-dashboard')
}
    return (
        <>
            <div className="col-lg-3">
                <ul className="account-nav">
                    <li><a onClick={()=>handleAccountDashboard()}className={active == "account-dashboard" ?"menu-link menu-link_us-s menu-link_active" :"menu-link menu-link_us-s" }>Dashboard</a></li>
                    <li><a onClick={()=>handleSellItem()} className={active == "sell-item" ?"menu-link menu-link_us-s menu-link_active" :"menu-link menu-link_us-s" }>Sell Items</a></li>
                    <li><a onClick={()=>handleAccountOrders()} className={active == "account-orders" ?"menu-link menu-link_us-s menu-link_active" :"menu-link menu-link_us-s" }>Orders</a></li>
                    <li><a onClick={()=>handleAccountEditAddress()} className={active == "account-edit-address" ?"menu-link menu-link_us-s menu-link_active" :"menu-link menu-link_us-s" }>Addresses</a></li>
                    <li><a onClick={()=>handleAccountEdit()} className={active == "account-edit" ?"menu-link menu-link_us-s menu-link_active" :"menu-link menu-link_us-s" }>Account Details</a></li>
                    <li><a onClick={()=>handleAccountWishlist()} className={active == "account-wishlist" ?"menu-link menu-link_us-s menu-link_active" :"menu-link menu-link_us-s" }>Wishlist</a></li>
                    <li><a onClick={()=>handleLoginRegister()} className={active == "login-register" ?"menu-link menu-link_us-s menu-link_active" :"menu-link menu-link_us-s" }>Logout</a></li>
                </ul>
            </div>
        </>
    )
}

export default List7