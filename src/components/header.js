import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Header() {
    const navigate = useNavigate()
    
    const [isCartSidebar, setIsCartSidebar] = useState(false);
    const [ishome, setIsHome] = useState(false);
    const [isSearch,setIsSearch] = useState(false);
    const handleHome = ()=>{
        navigate("/")

      }

      const homeDropdown = ()=>{
        // navigate("/")
        setIsHome(!ishome)
      }
      
      const handleFaq=()=>{
        navigate("/faq")
      }
      const handleContact=()=>{
        navigate("/contact")
      }
      const handleLoginRegister = ()=>{
        navigate("/login-register")
      }
      const handleShopCart = ()=>{
        navigate("/shop-cart")
      }
      const handleBikinis=()=>{
        navigate("/bikinis")
      }
      const handleFigure=()=>{
        navigate("/figure")
      }
      const handleSwimsuit=()=>{
        navigate("/swimsuit")
      }
      const HandleWbff=()=>{
        navigate("/wbff")
      }
      const handleThemewear=()=>{
        navigate("/themewear")
      }
      const handleAccessories=()=>{
        navigate("/accessories")
      }
      const handleSell = ()=>{
        navigate("/sell")
        } 
        const handleShopCheckout = ()=>{
            navigate("/shop-checkout")
          }
    return (
        <>
            <header id="header" className="header header_sticky">
                <div className="container-fluid ct_px_60">
                    <div className="header-desk header-desk_type_1">
                        <div className="logo">
                            <a onClick={()=>handleHome()}>
                                <img src="/second_stage/images/logo.png" alt="Second Stage" className="logo__image d-block" />
                            </a>
                        </div>
                        <nav className="navigation">
                            <ul className="navigation__list list-unstyled d-flex">
                                <div className="ct_close_btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                                </div>
                                <li className="navigation__item position-relative">
                                    <a onClick={()=>handleHome()}  className="navigation__link">Home <span onClick={()=>homeDropdown()}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></span></a>
                                   { ishome == true && 
                                   
                                   <div className={ ishome == false ?"box-menu" : "box-menu ct_active"} style={{ width: "400px" }}>
                                        <ul className="sub-menu__list list-unstyled">
                                            <li className="sub-menu__item"><a href="#" className="menu-link menu-link_us-s">Search</a></li>
                                            <li className="sub-menu__item"><a onClick={()=>handleLoginRegister()} className="menu-link menu-link_us-s">Registration</a></li>
                                            <li className="sub-menu__item"><a onClick={()=>handleFaq()} className="menu-link menu-link_us-s">FAQs </a></li>
                                            <li className="sub-menu__item"><a onClick={()=>handleContact()} className="menu-link menu-link_us-s">Contact</a></li>
                                            <li className="sub-menu__item">
                                                <a onClick={()=>handleShopCart()} className="sub-menu__item" >
                                                    Cart
                                                </a>
                                            </li>
                                        </ul>
                                    </div>}

                                </li>


                                <li className="navigation__item">
                                    <a onClick={()=>handleBikinis()} className="navigation__link">Bikinis</a>
                                </li>
                                <li className="navigation__item">
                                    <a onClick={()=>handleFigure()} className="navigation__link">Figure</a>
                                </li>
                                <li className="navigation__item">
                                    <a onClick={()=>handleSwimsuit()} className="navigation__link">Swimsuit</a>
                                </li>
                                <li className="navigation__item">
                                    <a onClick={()=>HandleWbff()} className="navigation__link">FMG/WBFF</a>
                                </li>
                                <li className="navigation__item">
                                    <a onClick={()=>handleThemewear()} className="navigation__link">Themewear</a>
                                </li>
                                <li className="navigation__item">
                                    <a onClick={()=>handleAccessories()} className="navigation__link">Accessories</a>
                                </li>
                                <div className="header-tools__item hover-container ct_mobile_login">

                                    <a onClick={()=>handleLoginRegister()} className="ct_mobile_fs14 text-white">
                                        Login / Register
                                    </a>

                                </div>

                            </ul>

                        </nav>

                        <div className="header-tools d-flex align-items-center">
                            <div className={isSearch == false ? "header-tools__item hover-container" : "header-tools__item hover-container js-content_visible"}>
                                <div onClick={()=>setIsSearch(!isSearch)} className="js-hover__open position-relative">
                                    <a className="js-search-popup search-field__actor" href="#">
                                        <svg className="d-block" width="20" height="20"  viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search" /></svg>
                                        <i className="btn-icon btn-close-lg" ></i>
                                    </a>

                                </div>

                                <div className="search-popup js-hidden-content">
                                    <form action="#" method="GET" className="search-field container">
                                        <p className="text-uppercase text-secondary fw-medium mb-4">What are you looking for?</p>
                                        <div className="position-relative">
                                            <input className="search-field__input search-popup__input w-100 fw-medium" type="text" name="search-keyword" placeholder="Search products" />
                                            <button className="btn-icon search-popup__submit" type="submit">
                                                <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search" /></svg>
                                            </button>
                                            <button className="btn-icon btn-close-lg search-popup__reset" type="reset"></button>
                                        </div>

                                        <div className="search-popup__results">
                                            <div className="sub-menu search-suggestion">
                                                <h6 className="sub-menu__title fs-base">Quicklinks</h6>
                                                <div className="">
                                                    <ul className="sub-menu__list list-unstyled">
                                                        <li className="sub-menu__item"><a onClick={()=>handleBikinis()} className="menu-link menu-link_us-s">Bikini</a></li>
                                                        <li className="sub-menu__item"><a onClick={()=>handleFigure()} className="menu-link menu-link_us-s">Figure</a></li>
                                                        <li className="sub-menu__item"><a onClick={()=>handleSwimsuit()} className="menu-link menu-link_us-s">Swimsuit</a></li>
                                                        <li className="sub-menu__item"><a onClick={()=>HandleWbff()} className="menu-link menu-link_us-s">FMG/WBFF</a></li>
                                                        <li className="sub-menu__item"><a onClick={()=>handleThemewear()} className="menu-link menu-link_us-s">Themewear</a></li>
                                                        <li className="sub-menu__item"><a onClick={()=>handleAccessories()} className="menu-link menu-link_us-s">Accessories</a></li>
                                                    </ul>

                                                </div>
                                            </div>

                                            <div className="search-result row row-cols-5"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <a className="header-tools__item" href="#">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart"></use></svg>
                            </a>
                            <a href="#" className="header-tools__item header-tools__cart js-open-aside" onClick={()=>setIsCartSidebar(true)} data-aside="cartDrawer">
                                <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart"></use></svg>
                                <span className="cart-amount d-block position-absolute js-cart-items-count">3</span>
                            </a>



                            <div className="header-tools__item hover-container ct_desktop_login align-items-center">

                                <a onClick={()=>handleLoginRegister()} className="ct_mobile_fs14 text-white">
                                    Login / Register
                                </a>

                                <a onClick={()=>handleSell()} className="ct_mobile_fs14 text-white ct_sell_btn ms-3">
                                Sell/Lend
                                </a>

                            </div>
                            <div className="ct_menu_bar ms-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="16" width="14" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                            </div>



                        </div>
                    </div>
                </div>
            </header>


            <div className={isCartSidebar == false ? "aside aside_right overflow-hidden cart-drawer" :"aside aside_right overflow-hidden cart-drawer aside_visible" }  id="cartDrawer">
                <div className="aside-header d-flex align-items-center">
                    <h3 className="text-uppercase fs-6 mb-0">SHOPPING BAG ( <span className="cart-amount js-cart-items-count">1</span> ) </h3>
                    <button className="btn-close-lg js-close-aside btn-close-aside ms-auto" onClick={()=>setIsCartSidebar(false)}></button>
                </div>

                <div className="aside-content cart-drawer-items-list">
                    <div className="cart-drawer-item d-flex position-relative">
                        <div className="position-relative">
                            <img loading="lazy" className="cart-drawer-item__img" src="images/accessories_1.png" />
                        </div>
                        <div className="cart-drawer-item__info flex-grow-1">
                            <h6 className="cart-drawer-item__title fw-normal">Georgia Rose</h6>
                            <p className="cart-drawer-item__option text-secondary">Color: Yellow</p>
                            <p className="cart-drawer-item__option text-secondary">Size: L</p>
                            <div className="d-flex align-items-center justify-content-between mt-1">
                                <div className="qty-control position-relative">
                                    <input type="number" name="quantity" value="1" min="1" className="qty-control__number border-0 text-center" />
                                    <div className="qty-control__reduce text-start">-</div>
                                    <div className="qty-control__increase text-end">+</div>
                                </div>
                                <span className="cart-drawer-item__price money price">$99</span>
                            </div>
                        </div>

                        <button className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove"></button>
                    </div>

                    <hr className="cart-drawer-divider" />

                    <div className="cart-drawer-item d-flex position-relative">
                        <div className="position-relative">
                            <img loading="lazy" className="cart-drawer-item__img" src="images/accessories_3.png" />
                        </div>
                        <div className="cart-drawer-item__info flex-grow-1">
                            <h6 className="cart-drawer-item__title fw-normal">Season Bikini</h6>
                            <p className="cart-drawer-item__option text-secondary">Color: Black</p>
                            <p className="cart-drawer-item__option text-secondary">Size: XS</p>
                            <p className="cart-drawer-item__option text-secondary">Selected Date For Rent : <span>22 - 02 - 2024</span> to <span>25 - 02 - 2024</span>  </p>
                            <div className="d-flex align-items-center justify-content-between mt-1">
                                <div className="qty-control position-relative">
                                    <input type="number" name="quantity" value="4" min="1" className="qty-control__number border-0 text-center" />
                                    <div className="qty-control__reduce text-start">-</div>
                                    <div className="qty-control__increase text-end">+</div>
                                </div>
                                <span className="cart-drawer-item__price money price">$89</span>
                            </div>
                        </div>

                        <button className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove"></button>
                    </div>

                    <hr className="cart-drawer-divider" />

                    <div className="cart-drawer-item d-flex position-relative">
                        <div className="position-relative">
                            <img loading="lazy" className="cart-drawer-item__img" src="images/accessories_4.png" />
                        </div>
                        <div className="cart-drawer-item__info flex-grow-1">
                            <h6 className="cart-drawer-item__title fw-normal">Ravishsands</h6>
                            <p className="cart-drawer-item__option text-secondary">Color: Green</p>
                            <p className="cart-drawer-item__option text-secondary">Size: L</p>
                            <div className="d-flex align-items-center justify-content-between mt-1">
                                <div className="qty-control position-relative">
                                    <input type="number" name="quantity" value="3" min="1" className="qty-control__number border-0 text-center" />
                                    <div className="qty-control__reduce text-start">-</div>
                                    <div className="qty-control__increase text-end">+</div>
                                </div>
                                <span className="cart-drawer-item__price money price">$129</span>
                            </div>
                        </div>

                        <button className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove"></button>
                    </div>

                </div>

                <div className="cart-drawer-actions position-absolute start-0 bottom-0 w-100">
                    <hr className="cart-drawer-divider" />
                    <div className="d-flex justify-content-between">
                        <h6 className="fs-base fw-medium">SUBTOTAL:</h6>
                        <span className="cart-subtotal fw-medium">$176.00</span>
                    </div>
                    <a onClick={()=>handleShopCart()} className="btn btn-light mt-3 d-block">View Cart</a>
                    <a onClick={()=>handleShopCheckout()} className="btn btn-primary mt-3 d-block">Checkout</a>
                </div>
            </div>

            <div className="modal fade" id="quickView" tabIndex="-1" aria-labelledby="quickViewModal" aria-hidden="true">
                <div className="modal-dialog quick-view modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="product-single">
                            <div className="product-single__media m-0">
                                <div className="product-single__image position-relative w-100">
                                    <div className="swiper-container js-swiper-slider"
                                        data-settings='{
                  "slidesPerView": 1,
                  "slidesPerGroup": 1,
                  "effect": "none",
                  "loop": false,
                  "navigation": {
                    "nextEl": ".modal-dialog.quick-view .product-single__media .swiper-button-next",
                    "prevEl": ".modal-dialog.quick-view .product-single__media .swiper-button-prev"
                  }
                }'>
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide product-single__image-item">
                                                <img loading="lazy" src="images/products/quickview_1.jpg" alt="" />
                                            </div>
                                            <div className="swiper-slide product-single__image-item">
                                                <img loading="lazy" src="images/products/quickview_2.jpg" alt="" />
                                            </div>
                                            <div className="swiper-slide product-single__image-item">
                                                <img loading="lazy" src="images/products/quickview_3.jpg" alt="" />
                                            </div>
                                            <div className="swiper-slide product-single__image-item">
                                                <img loading="lazy" src="images/products/quickview_4.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="swiper-button-prev"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg></div>
                                        <div className="swiper-button-next"><svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg></div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-single__detail">
                                <h1 className="product-single__name">Lightweight Puffer Jacket With a Hood</h1>
                                <div className="product-single__price">
                                    <span className="current-price">$449</span>
                                </div>
                                <div className="product-single__short-desc">
                                    <p>Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.</p>
                                </div>
                                <form name="addtocart-form" method="post">
                                    <div className="product-single__swatches">
                                        <div className="product-swatch text-swatches">
                                            <label>Sizes</label>
                                            <div className="swatch-list">
                                                <input type="radio" name="size" id="swatch-1" />
                                                <label className="swatch js-swatch" htmlFor="swatch-1" aria-label="Extra Small" data-bs-toggle="tooltip" data-bs-placement="top" title="Extra Small">XS</label>
                                                <input type="radio" name="size" id="swatch-2" checked />
                                                <label className="swatch js-swatch" htmlFor="swatch-2" aria-label="Small" data-bs-toggle="tooltip" data-bs-placement="top" title="Small">S</label>
                                                <input type="radio" name="size" id="swatch-3" />
                                                <label className="swatch js-swatch" htmlFor="swatch-3" aria-label="Middle" data-bs-toggle="tooltip" data-bs-placement="top" title="Middle">M</label>
                                                <input type="radio" name="size" id="swatch-4" />
                                                <label className="swatch js-swatch" htmlFor="swatch-4" aria-label="Large" data-bs-toggle="tooltip" data-bs-placement="top" title="Large">L</label>
                                                <input type="radio" name="size" id="swatch-5" />
                                                <label className="swatch js-swatch" htmlFor="swatch-5" aria-label="Extra Large" data-bs-toggle="tooltip" data-bs-placement="top" title="Extra Large">XL</label>
                                            </div>
                                            <a href="#" className="sizeguide-link" data-bs-toggle="modal" data-bs-target="#sizeGuide">Size Guide</a>
                                        </div>
                                        <div className="product-swatch color-swatches">
                                            <label>Color</label>
                                            <div className="swatch-list">
                                                <input type="radio" name="color" id="swatch-11" />
                                                <label className="swatch swatch-color js-swatch" htmlFor="swatch-11" aria-label="Black" data-bs-toggle="tooltip" data-bs-placement="top" title="Black" style={{ color: "#222" }}></label>
                                                <input type="radio" name="color" id="swatch-12" checked />
                                                <label className="swatch swatch-color js-swatch" htmlFor="swatch-12" aria-label="Red" data-bs-toggle="tooltip" data-bs-placement="top" title="Red" style={{ color: "#C93A3E" }}></label>
                                                <input type="radio" name="color" id="swatch-13" />
                                                <label className="swatch swatch-color js-swatch" htmlFor="swatch-13" aria-label="Grey" data-bs-toggle="tooltip" data-bs-placement="top" title="Grey" style={{ color: "#E4E4E4" }}></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-single__addtocart">
                                        <div className="qty-control position-relative">
                                            <input type="number" name="quantity" value="1" min="1" className="qty-control__number text-center" />
                                            <div className="qty-control__reduce">-</div>
                                            <div className="qty-control__increase">+</div>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-addtocart js-open-aside" data-aside="cartDrawer">Add to Cart</button>
                                    </div>
                                </form>
                                <div className="product-single__addtolinks">
                                    <a href="#" className="menu-link menu-link_us-s add-to-wishlist"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg><span>Add to Wishlist</span></a>
                                    <share-button className="share-button">
                                        <button className="menu-link menu-link_us-s to-share border-0 bg-transparent d-flex align-items-center">
                                            <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_sharing" /></svg>
                                        </button>
                                        <details id="Details-share-template__main" className="m-1 xl:m-1.5" hidden="">
                                            <summary className="btn-solid m-1 xl:m-1.5 pt-3.5 pb-3 px-5">+</summary>
                                            <div id="Article-share-template__main" className="share-button__fallback flex items-center absolute top-full left-0 w-full px-2 py-4 bg-container shadow-theme border-t z-10">
                                                <div className="field grow mr-4">
                                                    <label className="field__label sr-only" htmlFor="url">Link</label>
                                                    <input type="text" className="field__input w-full" id="url" placeholder="Link" onClick="this.select();" readonly="" />
                                                </div>
                                                <button className="share-button__copy no-js-hidden">
                                                    <svg className="icon icon-clipboard inline-block mr-1" width="11" height="13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 11 13">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1a1 1 0 011-1h7a1 1 0 011 1v9a1 1 0 01-1 1V1H2zM1 2a1 1 0 00-1 1v9a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1H1zm0 10V3h7v9H1z" fill="currentColor"></path>
                                                    </svg>
                                                    <span className="sr-only">Copy link</span>
                                                </button>
                                            </div>
                                        </details>
                                    </share-button>
                                    <script src="js/details-disclosure.js" defer="defer"></script>
                                    <script src="js/share.js" defer="defer"></script>
                                </div>
                                <div className="product-single__meta-info mb-0">
                                    <div className="meta-item">
                                        <label>SKU:</label>
                                        <span>N/A</span>
                                    </div>
                                    <div className="meta-item">
                                        <label>Categories:</label>
                                        <span>Casual & Urban Wear, Jackets, Men</span>
                                    </div>
                                    <div className="meta-item">
                                        <label>Tags:</label>
                                        <span>biker, black, bomber, leather</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="scrollTop" className="visually-hidden end-0"></div>

            <div className="page-overlay"></div>
        </>
    )
}

export default Header