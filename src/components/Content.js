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
export const configJSON = require("../components/config");
function Content(props) {
  const [isLoader, setIsLoader] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const [searchProducts, setSearchProducts] = useState([])
  const [accessToken, setAccessToken] = useState();
  const [isFilter, setIsFilter] = useState(false);
  const [show, setShow] = useState("buy")
  const navigate = useNavigate();
  const [quickSearch, setQuickSearch] = useState("")
  const [isSearch, setIsSearch] = useState(false)
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
  useEffect(() => {
    if (props?.data) {
      setAllProduct(props?.data);
      setSearchProducts(props?.data);
    }
  }, [props])
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
    window.scrollTo(0, 0);
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
      if (res?.data?.success == true) {
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

  const searchPage = (val) => {
    window.scrollTo(0, 0)
    const data = allProduct?.filter((item) => {
      if ((item?.product_name?.toLowerCase())?.includes(val?.toLowerCase())) { return item; }
    })
    setSearchProducts(data)
  }
  const filteredData = allProduct?.filter((item) => item?.product_type == 'featured' && item.product_buy_rent === show);
  return (
    <>
      <section className="products-grid container">

        <div>
          <div className="tab-content pt-2" id="collections-tab-content">
            {isLoader == true ? (
              <div className="custom-loader"></div>
            ) :
              <>
                <ul className="nav nav-tabs mb-3 text-uppercase justify-content-center gap-3 mb-5" id="collections-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className={`nav-link nav-link_underscore ct_sell_btn ct_btn_large  ${show == 'buy' && 'ct_active'}`} id="collections-tab-2-trigger" data-bs-toggle="tab" href="#collections-tab-2" role="tab" aria-controls="collections-tab-2" aria-selected="true" onClick={() => {
                      setSearchProducts([])
                      setShow("buy")
                    }}>Buy</a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className={`nav-link nav-link_underscore ct_sell_btn ct_btn_large  ${show == 'rent' && 'ct_active'}`} id="collections-tab-3-trigger" data-bs-toggle="tab" href="#collections-tab-3" role="tab" aria-controls="collections-tab-3" aria-selected="true" onClick={() => {
                      setSearchProducts([])
                      setShow("rent")
                    }}>Rent</a>
                  </li>

                </ul>
                <h2 className="section-title  text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4">Featured <strong>Products</strong></h2>
                <div
                  className="tab-pane fade show active"
                  id="collections-tab-1"
                  role="tabpanel"
                  aria-labelledby="collections-tab-1-trigger"
                >
                  <div
                    className={`products-grid row row-cols-2 ${filteredData?.length == '0' && searchProducts?.length == '0' && 'd-flex justify-content-center'} row-cols-md-4`}
                    id="products-grid"
                  >
                    {
                      searchProducts?.length == '0' ?

                        filteredData?.length != '0' ?
                          (filteredData?.map((item) => (
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
                                    <h4 className="mb-0">{item?.product_buy_rent?.charAt(0).toUpperCase() + item?.product_buy_rent?.slice(1)}</h4>
                                  </div>
                                </div>
                                <div className="pc__info position-relative">
                                  <p className="pc__category">{item?.product_name ?? 'Product Name'}</p>
                                  {
                                    item?.size_standard && item?.size_standard != '0' ?
                                      <>
                                        <h6 className="pc__title">
                                          <a onClick={() => handleProduct1Simple(item?.id)}>
                                            Size Standard {" "}
                                            <span>
                                              {item?.size_standard}
                                            </span>
                                          </a>


                                        </h6>
                                      </>
                                      :
                                      <>
                                        <h6 className="pc__title">
                                          <a onClick={() => handleProduct1Simple(item?.id)}>
                                            Size Top {" "}
                                            <span>
                                              {item?.product_size?.length > 0 &&
                                                item?.product_size[0]?.size_top}
                                            </span>
                                          </a>
                                          <br />
                                          <a onClick={() => handleProduct1Simple(item?.id)}>
                                            Size Bottom {" "}
                                            <span>
                                              {item?.product_size?.length > 0 &&
                                                item?.product_size[0]?.size_bottom}
                                            </span>
                                          </a>

                                        </h6>
                                      </>
                                  }

                                  <div className="product-card__price d-flex">
                                    <span className="money price">
                                      ${item?.price_sale_lend_price}
                                    </span>
                                  </div>
                                  <button
                                    onClick={() => addToWishlist(item?.id)}
                                    className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                    title="Add To Wishlist"
                                  >
                                    <i
                                      className={item?.wishlist_like === 0 ? "fa-regular fa-heart" : "fa-solid fa-heart"}
                                      style={item?.wishlist_like !== 0 ? { color: "red" } : null}
                                    ></i>{" "}
                                  </button>

                                </div>
                              </div>
                            </div>
                          )))
                          :
                          <h3 className="text-center  mt-4">There is no {show} product.!</h3>
                        :
                        searchProducts?.length != '0' ?
                          (searchProducts?.map((item) => (
                            item?.product_type == 'featured' &&
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
                                    <h4 className="mb-0">{item?.product_buy_rent?.charAt(0).toUpperCase() + item?.product_buy_rent?.slice(1)}</h4>
                                  </div>

                                </div>
                                <div className="pc__info position-relative">
                                  <p className="pc__category">{item?.product_name ?? 'Product Name'}</p>

                                  {
                                    item?.size_standard && item?.size_standard != '0' ?
                                      <>
                                        <h6 className="pc__title">
                                          <a onClick={() => handleProduct1Simple(item?.id)}>
                                            Size Standard {" "}
                                            <span>
                                              {item?.size_standard}
                                            </span>
                                          </a>


                                        </h6>
                                      </>
                                      :
                                      <>
                                        <h6 className="pc__title">
                                          <a onClick={() => handleProduct1Simple(item?.id)}>
                                            Size Top {" "}
                                            <span>
                                              {item?.product_size?.length > 0 &&
                                                item?.product_size[0]?.size_top}
                                            </span>
                                          </a>
                                          <br />
                                          <a onClick={() => handleProduct1Simple(item?.id)}>
                                            Size Bottom {" "}
                                            <span>
                                              {item?.product_size?.length > 0 &&
                                                item?.product_size[0]?.size_bottom}
                                            </span>
                                          </a>

                                        </h6>
                                      </>
                                  }


                                  <div className="product-card__price d-flex">
                                    <span className="money price">
                                      ${item?.price_sale_lend_price}
                                    </span>
                                  </div>
                                  <button
                                    onClick={() => addToWishlist(item?.id)}
                                    className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                    title="Add To Wishlist"
                                  >
                                    <i
                                      className={item?.wishlist_like === 0 ? "fa-regular fa-heart" : "fa-solid fa-heart"}
                                      style={item?.wishlist_like !== 0 ? { color: "red" } : null}
                                    ></i>{" "}
                                  </button>

                                </div>
                              </div>
                            </div>
                          )))
                          :
                          (<h3 className="text-center  mt-4">The product name you searched for does not exist.</h3>)
                    }
                  </div>
                </div>
              </>
            }
          </div>
        </div>
      </section>
      <section className='mt-5 py-5 ' style={{ background: "#f5f5f5" }}>
        <div className='container'>
          <div className='col-md-8 mx-auto'>
            <div className="block-newsletter">
              <h3 className="block__title text-center ">Quick Search</h3>
              {/* <p>Get the latest products and news update daily in fastest.</p> */}
              <form className="block-newsletter__form">
                <input value={quickSearch} onChange={(e) => setQuickSearch(e.target.value)} className="form-control" type="text" name="email" placeholder="Search " />
                <button className="btn btn-secondary fw-medium" type="button" onClick={() => searchPage(quickSearch)}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
