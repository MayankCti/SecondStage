import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message, message as MESSAGE } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Cookies from 'js-cookie';
import FilterBy from "./filterBy";
export const configJSON = require("../components/config");
function Content(props) {
  const [isLoader, setIsLoader] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const [accessToken, setAccessToken] = useState();
  const [isFilter, setIsFilter] = useState(false);
  const [show, setShow] = useState("buy")
  const navigate = useNavigate();
  const handleProduct1Simple = (productId) => {
    localStorage.setItem("productID", productId)

    navigate("/product1-simple");
  };
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    setAccessToken(token);
    setTimeout(() => {
      getAllProduct();
    }, 1000);
  }, []);

  const getAllProduct = () => {
    setIsLoader(true);
    const randomeUserId = Cookies.get('RandomUserId');
    const token = JSON.parse(localStorage.getItem("token"))
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    const data = {
      user_id: token && user_id ? user_id : parseInt(randomeUserId),
      sort: "4"
    }
    axios({
      url: configJSON.baseUrl + configJSON.getAllProduct,
      method: "post",
      data: data
    })
      .then((res) => {
        setIsLoader(false);
        if (res?.data?.success == true) {
          setAllProduct(res?.data?.products);
        } else {
          setAllProduct([]);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoader(false);
      });
  };


  const addToWishlist = (productId) => {
    window.scroll(0, 0);
    setIsLoader(true)
    const randomeUserId = Cookies.get('RandomUserId');
    const userID = localStorage.getItem("user_id")
    const token = JSON.parse(localStorage.getItem("token"))
    const data = {
      product_id: productId,
      userId: token && userID ? userID : parseInt(randomeUserId),
    };

    axios({
      method: "post",
      url: configJSON.baseUrl + configJSON.add_wishlist,
      data: data
    }).then((res) => {
      setIsLoader(false)
      if (res.data.success == true) {
        MESSAGE.success(res?.data?.message)
        getAllProduct()
      } else {
        MESSAGE.error(res?.data?.message)
      }
    }).catch((err) => {
      setIsLoader(false)
      console.log(err)
    })
  };

  const filterProducts = (val) => {
    const token = JSON.parse(localStorage.getItem("token"));
    setIsLoader(true);
    axios({
      url: configJSON.baseUrl + configJSON.filterAllProduct,
      method: "post",
      data: val,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setIsLoader(false);
        if (res?.data?.success == true) {
          MESSAGE.success(res?.data?.message);
          setAllProduct(res?.data?.formattedProducts);
        } else {
          MESSAGE.error(res?.data?.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoader(false);
      });
  };
  return (
    <div>
      <div className="tab-content pt-2" id="collections-tab-content">
        {isLoader == true ? (
          <div className="custom-loader"></div>
        ) : allProduct?.length != 0 ? (

          <>
            <ul className="nav nav-tabs mb-3 text-uppercase justify-content-center gap-3 mb-5" id="collections-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link nav-link_underscore ct_sell_btn ct_btn_large  text-white" id="collections-tab-2-trigger" data-bs-toggle="tab" href="#collections-tab-2" role="tab" aria-controls="collections-tab-2" aria-selected="true" onClick={() => setShow("buy")}>Buy</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link nav-link_underscore ct_sell_btn text-white ct_btn_large" id="collections-tab-3-trigger" data-bs-toggle="tab" href="#collections-tab-3" role="tab" aria-controls="collections-tab-3" aria-selected="true" onClick={() => setShow("rent")}>Rent</a>
              </li>

            </ul>

            <h2 className="section-title  text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4">Featured <strong>Products</strong></h2>
            <div className="shop-filter d-flex align-items-center order-0 order-md-3">
              <button
                className="btn-link btn-link_f d-flex align-items-center ps-0 js-open-aside"
                onClick={() => setIsFilter(true)}
                data-aside="shopFilter"
              >

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-filter d-inline-block align-middle me-2" viewBox="0 0 16 16">
                  <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                </svg>

                <span className="text-uppercase fw-medium d-inline-block align-middle">
                  Filter
                </span>
              </button>
            </div>
            <div
              className={
                isFilter == false
                  ? "shop-sidebar side-sticky bg-body"
                  : "shop-sidebar side-sticky bg-body aside_visible"
              }
              id="shopFilter"
            >
              <div className="aside-header d-flex pt-5 mt-5 align-items-center">
                <h3 className="text-uppercase fs-6 mb-0">Filter By </h3>
                <button
                  className="btn-close-lg js-close-aside btn-close-aside ms-auto"
                  onClick={() => setIsFilter(false)}
                ></button>
              </div>
              <FilterBy handlefilter={(val) => filterProducts(val)} />
            </div>
            <div
              className="tab-pane fade show active"
              id="collections-tab-1"
              role="tabpanel"
              aria-labelledby="collections-tab-1-trigger"
            >
              <div
                className="products-grid row row-cols-2 row-cols-md-4"
                id="products-grid"
              >
                {
                  allProduct?.map((item) => (
                    item?.product_type == 'featured' &&
                    item?.product_buy_rent == show &&
                    <div className="product-card-wrapper">
                      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                        <div className="pc__img-wrapper">
                          <div
                            className="swiper-container background-img js-swiper-slider"
                            data-settings='{"resizeObserver": true}'
                          >
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
                              {item?.product_images?.map((obj, i) => (
                                <SwiperSlide>
                                  <a onClick={() => handleProduct1Simple(item?.id)}>
                                    <img src={obj} />
                                  </a>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                          <div className="ct_buy_rent_tag">
                            <h4 className="mb-0">{item.product_buy_rent.charAt(0).toUpperCase() + item.product_buy_rent.slice(1)}</h4>
                          </div>

                        </div>
                        <div className="pc__info position-relative">
                          <p className="pc__category">{item?.product_name ?? 'Product Name'}</p>
                          {
                            item?.product_buy_rent == 'buy' ?
                              <h6 className="pc__title">
                                <a
                                  onClick={() => handleProduct1Simple(item?.id)}
                                >
                                  Size Top : <span>{item?.product_size[0]?.size_top}</span>
                                </a>
                                <br />
                                <a
                                  onClick={() => handleProduct1Simple(item?.id)}
                                >
                                  Size Bottom : <span>{item?.product_size[0]?.size_bottom}</span>

                                </a>
                              </h6>
                              :
                              <h6 className="pc__title">
                                <a
                                  onClick={() => handleProduct1Simple(item?.id)}
                                >
                                  Size Standard : <span>{item?.size_standard}</span>
                                </a>
                                <br />
                                <a
                                  onClick={() => handleProduct1Simple(item?.id)}
                                >
                                  Rental Period : <span>{item?.product_rental_period}</span>

                                </a>
                              </h6>
                          }
                          <div className="product-card__price d-flex">
                            <span className="money price">
                              ${item?.price_sale_lend_price}
                            </span>
                          </div>

                          {
                            item?.wishlist_like == 0 ? (
                              <button
                                onClick={() => addToWishlist(item?.id)}
                                className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                title="Add To Wishlist"
                              >
                                <i
                                  className="fa-regular fa-heart"

                                ></i>{" "}
                              </button>
                            ) : (
                              <button
                                onClick={() => addToWishlist(item?.id)}
                                className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                title="Add To Wishlist"
                              >
                                <i
                                  className="fa-solid fa-heart"
                                  style={{ color: "red" }}

                                ></i>
                              </button>
                            )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </>
        ) : (
          <h3 className="text-center mt-4">There is no product !!!</h3>
        )}
      </div>
    </div>
  );
}

export default Content;
