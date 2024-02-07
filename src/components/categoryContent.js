import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { message, message as MESSAGE } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import FilterBy from './filterBy';
export const configJSON = require("../components/config");

function CategoryContent(props) {
    // console.log(typeof props.apiurl,"the url")
    const navigate = useNavigate()
    const [isFilter, setIsFilter] = useState(false);
    const [isLoader, setIsLoader] = useState(false);
    const [allProduct, setAllProduct] = useState([])
    const [accessToken, setAccessToken] = useState()
    const [cartData, setcartData] = useState([])
    const [subtotal, setSubTotal] = useState(0)
    const [showProduct,setShowProduct] = useState("all")


    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"))
        setAccessToken(token);
        if (token == null) {
            navigate('/login-register')
        }
        getData()
        getCartData(token)
    }, [])
    const handleHome = () => {
        navigate("/")
    }
    const handleProduct1Simple = (productId) => {
        localStorage.setItem("productID",productId)
        navigate("/product1-simple");
      };
    const getData = () => {
        setIsLoader(true)
        axios({
            url: configJSON.baseUrl + props?.apiurl,
            method: "get",
        }).then((res) => {
            setIsLoader(false)
            if (res?.data?.success == true) {
                setAllProduct(res?.data?.data)
            }
            else {
                setAllProduct([])
            }
        }).catch((error) => {
            setIsLoader(false)
            console.log(error)
        })
    }

    const filteredData = showProduct === "all" ? allProduct : allProduct.filter(item => item.product_buy_rent === showProduct);

    const getCartData = (val) => {
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
                setcartData(res?.data?.cart)
                let total = 0
                res?.data?.cart.map((item) => {
                    total += item?.cart_price
                })
                setSubTotal(total)
            }
            else {
                setcartData([])
            }
        }).catch((error) => {
            setIsLoader(false)
            console.log(error)
        })
    }
    const addToCart = (product_id) => {
        setIsLoader(true)
        const data = {
            product_id: product_id
        }
        axios({
            method: "post",
            url: configJSON.baseUrl + configJSON.add_cart,
            data: data,
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
        }).then((res) => {
            setIsLoader(false)
            if (res.data.success == true) {
                MESSAGE.success("Item added to cart.")
                props?.onClick();
            } else {
                MESSAGE.error(res?.data?.message)
            }
        }).catch((err) => {
            setIsLoader(false)
            console.log(err)
        })
    }
    const addToWishlist = (productId) => {
        setIsLoader(true)
        const data = {
            product_id: productId,
        };
        axios({
            method: "post",
            url: configJSON.baseUrl + configJSON.add_wishlist,
            data: data,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }).then((res) => {
            setIsLoader(false)
            if (res.data.success == true) {
                MESSAGE.success(res?.data?.message)
                getData()
            } else {
                MESSAGE.error(res?.data?.message)
            }
        }).catch((err) => {
            setIsLoader(false)
            console.log(err)
        })
    };
    return (
        <>
            <main>
                <div className="mb-4 pb-lg-3"></div>
                <section className="shop-main container d-flex">
                    <div className={isFilter == false ? "shop-sidebar side-sticky bg-body" : "shop-sidebar side-sticky bg-body aside_visible"} id="shopFilter">
                        <div className="aside-header d-flex pt-5 mt-5 align-items-center">
                            <h3 className="text-uppercase fs-6 mb-0">Filter By</h3>
                            <button className="btn-close-lg js-close-aside btn-close-aside ms-auto" onClick={() => setIsFilter(false)}></button>
                        </div>
                        <FilterBy />

                    </div>

                    <div className="shop-list flex-grow-1">
                        <div className="d-flex justify-content-between mb-4 pb-md-2">
                            <div className="breadcrumb mb-0 d-none d-md-block flex-grow-1">
                                <a onClick={() => handleHome()} className="menu-link menu-link_us-s text-uppercase fw-medium" >Home</a>
                                <span className="breadcrumb-separator menu-link fw-medium ps-1 pe-1">/</span>
                                <a  className="menu-link menu-link_us-s text-uppercase fw-medium" >{props.home}</a>
                            </div>
                        </div>

                        <section className="products-grid container">
                            <h2 className="section-title  text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4"><strong>{props.home}</strong></h2>

                            <ul className="nav nav-tabs mb-3 text-uppercase justify-content-center" id="collections-tab" role="tablist">
                                <li className="nav-item" role="presentation" onClick={()=>setShowProduct("all")}>
                                    <a className={showProduct == "all" ? "nav-link nav-link_underscore active" :"nav-link nav-link_underscore"} id="collections-tab-1-trigger" data-bs-toggle="tab" href="#collections-tab-1" role="tab" aria-controls="collections-tab-1" aria-selected="true">All</a>
                                </li>
                                <li className="nav-item" role="presentation" onClick={()=>setShowProduct("buy")}>
                                    <a className={showProduct == "buy" ? "nav-link nav-link_underscore active":"nav-link nav-link_underscore "} id="collections-tab-2-trigger" data-bs-toggle="tab" href="#collections-tab-2" role="tab" aria-controls="collections-tab-2" aria-selected="true">Buy</a>
                                </li>
                                <li className="nav-item" role="presentation" onClick={()=>setShowProduct("rent")}>
                                    <a className={showProduct == "rent" ? "nav-link nav-link_underscore active" : "nav-link nav-link_underscore "} id="collections-tab-3-trigger" data-bs-toggle="tab" href="#collections-tab-3" role="tab" aria-controls="collections-tab-3" aria-selected="true">Rent</a>
                                </li>
                            </ul>
                            <div className="shop-acs ct_row_inverse d-flex align-items-center justify-content-between  flex-grow-1 gap-3 mb-2">
                                <select className="shop-acs__select form-select w-auto border-0 py-0 order-1 order-md-0 " aria-label="Sort Items" name="total-number">
                                    <option selected>Sort by</option>
                                    <option value="1">Featured</option>
                                    <option value="3">newest/oldest</option>
                                    <option value="6">price high/low, </option>
                                    <option value="7">Price, low/high</option>
                                    {/* <option value="3">Date, new to old</option> */}
                                </select>
                                <div className="shop-filter d-flex align-items-center order-0 order-md-3">
                                    <button className="btn-link btn-link_f d-flex align-items-center ps-0 js-open-aside" onClick={() => setIsFilter(true)} data-aside="shopFilter">
                                        <svg className="d-inline-block align-middle me-2" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_filter" /></svg>
                                        <span className="text-uppercase fw-medium d-inline-block align-middle">Filter</span>
                                    </button>
                                </div>
                            </div>

                            <div className="tab-content pt-2" id="collections-tab-content">
                                {
                                    isLoader == true ?
                                        <div class="custom-loader"></div> :
                                        filteredData?.length != 0 ?
                                        
                                            <div className="tab-pane fade show active" id="" role="tabpanel" aria-labelledby="collections-tab-1-trigger">
                                                <div className="products-grid row row-cols-2 row-cols-md-4" id="products-grid" >
                                                    {
                                                        filteredData?.map((item) => (
                                                            <div className="product-card-wrapper">
                                                                <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                                                    <div className="pc__img-wrapper">
                                                                        <div className="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}'>
                                                                            <Swiper
                                                                                spaceBetween={30}
                                                                                centeredSlides={true}
                                                                                autoplay={{
                                                                                    delay: 30000,
                                                                                    disableOnInteraction: false,
                                                                                }}
                                                                                pagination={{
                                                                                    clickable: true,
                                                                                }}
                                                                                navigation={true}
                                                                                modules={[Autoplay, Pagination, Navigation]}
                                                                                className="mySwiper"
                                                                            >
                                                                                {
                                                                                    item?.product_images?.map((obj, i) => (
                                                                                        <SwiperSlide><a onClick={() => handleProduct1Simple(item?.id)}><img src={obj} /></a></SwiperSlide>
                                                                                    ))
                                                                                }
                                                                            </Swiper>
                                                                        </div>
                                                                        <div className="ct_buy_rent_tag">
                                                                            <h4 className="mb-0">{item.product_buy_rent.charAt(0).toUpperCase() + item.product_buy_rent.slice(1)}</h4>
                                                                        </div>
                                                                        <button onClick={() => addToCart(item?.id)} className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                                                    </div>
                                                                    <div className="pc__info position-relative">
                                                                        <p className="pc__category">Featured Products</p>
                                                                        <h6 className="pc__title"><a  onClick={() => handleProduct1Simple(item?.id)}>{item?.product_description}</a></h6>
                                                                        <div className="product-card__price d-flex">
                                                                            <span className="money price">${item?.price_sale_lend_price}</span>
                                                                        </div>
                                                                        {
                                                                            item?.wishlist_like == 0 ? (
                                                                                <button
                                                                                    onClick={() => addToWishlist(item?.id)}
                                                                                    className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                                                                    title="Add To Wishlist"
                                                                                >
                                                                                    <i
                                                                                        class="fa-regular fa-heart"

                                                                                    ></i>{" "}
                                                                                </button>
                                                                            ) : (
                                                                                <button
                                                                                    onClick={() => addToWishlist(item?.id)}
                                                                                    className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                                                                    title="Add To Wishlist"
                                                                                >
                                                                                    <i
                                                                                        class="fa-solid fa-heart"
                                                                                        style={{ color: "red" }}

                                                                                    ></i>
                                                                                    {/* <FaRegHeart onClick={()=>addToWishlist(item?.id)}/> */}
                                                                                </button>
                                                                            )}

                                                                        {/* <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg> */}


                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            :
                                            <h3>There is no product !!!</h3>
                                }
                            </div>
                        </section>
                        <div className="text-center mt-2">
                            {/* <a className="btn-link btn-link_lg default-underline text-uppercase fw-medium" >Load More</a> */}
                        </div>
                    </div>
                </section>
            </main>

            <div className="mb-5 pb-xl-5"></div>
        </>
    )
}

export default CategoryContent