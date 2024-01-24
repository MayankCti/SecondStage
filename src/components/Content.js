import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
    const navigate = useNavigate()
    const handleProduct1Simple = () => {
        navigate("/product1-simple")
    }
    useEffect(() => {
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
    return (
        <div>
            <div className="tab-content pt-2" id="collections-tab-content">
                {
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
                                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_1.jpg' /></a></SwiperSlide>
                                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_1-1.jpg' /></a></SwiperSlide>

                                                        </Swiper>


                                                    </div>
                                                    <div className="ct_buy_rent_tag">
                                                        <h4 className="mb-0">Buy</h4>
                                                    </div>
                                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                                </div>

                                                <div className="pc__info position-relative">
                                                    <p className="pc__category">Featured Products</p>
                                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>{item?.product_name}</a></h6>
                                                    <div className="product-card__price d-flex">
                                                        <span className="money price">${item?.product_price}</span>
                                                    </div>


                                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }


                                {/* <div className="product-card-wrapper">
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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_2.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_3.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Buy</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>Angel Competition Bikinis</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$62</span>
                                    </div>



                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>

                                <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                    <div className="pc-labels__right ms-auto">
                                        <span className="pc-label pc-label_sale d-block text-white">-67%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_3.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_2.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Buy</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>Toxic Angels</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$17</span>
                                    </div>

                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_2.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_1.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Buy</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>Toxic Angels</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price price-old">$129</span>
                                        <span className="money price price-sale">$99</span>
                                    </div>

                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>

                            </div>
                        </div>

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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_2.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_1.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Buy</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>67 Bikinis</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$29</span>
                                    </div>

                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_3.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_1.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Rent</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>67 Bikinis</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$62</span>
                                    </div>

                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_2.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_3.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Rent</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>Blackice Bikinis</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$17</span>
                                    </div>

                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_2.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_3.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Rent</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>Blackice Bikinis</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$17</span>
                                    </div>

                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div> */}
                            </div>

                        </div>
                        :
                        <h1>There is no product !!!</h1>
                }

                {/* <div className="tab-pane fade show" id="collections-tab-2" role="tabpanel" aria-labelledby="collections-tab-2-trigger">
                    <div className="products-grid row row-cols-2 row-cols-md-4" id="products-grid" >
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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_1.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_1-1.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Buy</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>Angel Competition Bikinis</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$29</span>
                                    </div>


                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_2.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_3.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Buy</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>Angel Competition Bikinis</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$62</span>
                                    </div>



                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>

                                <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                    <div className="pc-labels__right ms-auto">
                                        <span className="pc-label pc-label_sale d-block text-white">-67%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_3.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_2.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Buy</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>Toxic Angels</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$17</span>
                                    </div>

                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_2.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_1.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Buy</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>Toxic Angels</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price price-old">$129</span>
                                        <span className="money price price-sale">$99</span>
                                    </div>

                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>


                            </div>
                        </div>

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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_2.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_1.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Buy</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>67 Bikinis</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$29</span>
                                    </div>

                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_3.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_1.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Buy</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>67 Bikinis</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$62</span>
                                    </div>

                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_2.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_3.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Buy</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>Blackice Bikinis</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$17</span>
                                    </div>

                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_2.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_3.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Buy</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>Blackice Bikinis</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$17</span>
                                    </div>

                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>



                    </div>

                </div> */}

                {/* <div className="tab-pane fade show" id="collections-tab-3" role="tabpanel" aria-labelledby="collections-tab-3-trigger">
                    <div className="products-grid row row-cols-2 row-cols-md-4" id="products-grid" >
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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_1.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_1-1.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Rent</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>Angel Competition Bikinis</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$29</span>
                                    </div>


                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_2.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_3.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Rent</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>Angel Competition Bikinis</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$62</span>
                                    </div>



                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>

                                <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                    <div className="pc-labels__right ms-auto">
                                        <span className="pc-label pc-label_sale d-block text-white">-67%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_3.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_2.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Rent</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>Toxic Angels</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$17</span>
                                    </div>

                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_2.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_1.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Rent</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>Toxic Angels</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price price-old">$129</span>
                                        <span className="money price price-sale">$99</span>
                                    </div>

                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>


                            </div>
                        </div>

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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_2.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_1.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Rent</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>67 Bikinis</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$29</span>
                                    </div>

                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_3.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_1.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Rent</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>67 Bikinis</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$62</span>
                                    </div>

                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_2.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_3.jpg' /></a></SwiperSlide>

                                        </Swiper>

                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Rent</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>

                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>Blackice Bikinis</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$17</span>
                                    </div>

                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
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
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_2.jpg' /></a></SwiperSlide>
                                            <SwiperSlide><a onClick={() => handleProduct1Simple()}><img src='images/products/product_3.jpg' /></a></SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <div className="ct_buy_rent_tag">
                                        <h4 className="mb-0">Rent</h4>
                                    </div>
                                    <button className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">Add To Cart</button>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Featured Products</p>
                                    <h6 className="pc__title"><a onClick={() => handleProduct1Simple()}>Blackice Bikinis</a></h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$17</span>
                                    </div>
                                    <button className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist" title="Add To Wishlist">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Content