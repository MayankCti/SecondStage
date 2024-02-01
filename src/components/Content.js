import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { message, message as MESSAGE } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
export const configJSON = require("../components/config");
function Content() {
    const [isLoader, setIsLoader] = useState(false)
    const [allProduct, setAllProduct] = useState([])
    const [accessToken, setAccessToken] = useState()
    const navigate = useNavigate()
    const handleProduct1Simple = () => {
        navigate("/product1-simple")
    }
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"))
        setAccessToken(token);
        if (token == null) {
            navigate('/login-register')
        }
        getAllProduct()
    }, [])

    const getAllProduct = () => {
        setIsLoader(true)
        axios({
            url: configJSON.baseUrl + configJSON.product_details,
            method: "get",
        }).then((res) => {
            setIsLoader(false)
            if (res?.data?.success == true) {
                setAllProduct(res?.data?.data)
            }
            else {
                setAllProduct([])
            }
        })
            .catch((error) => {
                console.log(error)
                setIsLoader(false)
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
            if(res.data.success == true){
                MESSAGE.success("Item added to cart.")
            }else{
                MESSAGE.error(res?.data?.message)
            }
        }).catch((err) => {
            setIsLoader(false)
            console.log(err)
        })
    }
    return (
        <div>
            <div className="tab-content pt-2" id="collections-tab-content">
                {
                    isLoader == true ?
                        <div class="custom-loader"></div> :
                        allProduct?.length != 0 ?
                            <div className="tab-pane fade show active" id="collections-tab-1" role="tabpanel" aria-labelledby="collections-tab-1-trigger">
                                <div className="products-grid row row-cols-2 row-cols-md-4" id="products-grid" >
                                    {
                                        allProduct?.map((item) => (
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
                                                                    item?.product_images?.map((item, i) => (
                                                                        <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src={item} /></a></SwiperSlide>
                                                                    ))
                                                                }
                                                            </Swiper>
                                                        </div>
                                                        <div className="ct_buy_rent_tag">
                                                            <h4 className="mb-0">Buy</h4>
                                                        </div>
                                                        <button onClick={() => addToCart(item?.id)} className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                                    </div>
                                                    <div className="pc__info position-relative">
                                                        <p className="pc__category">Featured Products</p>
                                                        <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>{item?.product_description}</a></h6>
                                                        <div className="product-card__price d-flex">
                                                            <span className="money price">${item?.price_sale_lend_price}</span>
                                                        </div>
                                                        <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                                        </button>
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
        </div>
    )
}

export default Content