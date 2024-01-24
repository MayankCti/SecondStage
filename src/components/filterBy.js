import { Slider } from "antd";
import React, { useState } from "react";

function FilterBy() {
  const [Price, setPrice] = useState([20, 50]);
  const [leasePrice, setLeasePrice] = useState([30, 70]);
  const handleRange = (e) => {
    setPrice(e);
  };
  const handleLeasePrice = (e) => {
    setLeasePrice(e);
  };
  return (
    <>
      <div className="pt-4 pt-lg-0"></div>
      <div className="search-field__input-wrapper mb-3">
        <input
          type="text"
          className="search-field__input form-control form-control-sm border-light border-2"
          placeholder="Search"
        />
      </div>
      {/* <div className="accordion" id="buy_rent-list2">
          <div className="accordion-item mb-4 ">
            <h5 className="accordion-header" id="buy_rent">
              <button className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-buy_rent" aria-expanded="true" aria-controls="accordion-filter-1">
                Buy/Rent 
                <svg className="accordion-button__icon type2" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                  <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                    <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z"/>
                  </g>
                </svg>
              </button>
            </h5>
            <div id="accordion-buy_rent" className="accordion-collapse collapse  border-0" aria-labelledby="buy_rent" data-bs-parent="#buy_rent-list2">
              <div className="accordion-body px-0 pb-0 pt-3">
                <ul className="list list-inline mb-0">
                  <li className="list-item mb-2">
                    <a href="#" className="menu-link py-1">
                      <label className="cyberpunk-checkbox-label">
                        <input type="radio" name="rent" className="cyberpunk-checkbox"/>
                       </label>
                      Buy</a>
                  </li>
                  <li className="list-item">
                    <a href="#" className="menu-link py-1">
                      <label className="cyberpunk-checkbox-label">
                        <input type="radio" name="rent" className="cyberpunk-checkbox"/>
                       </label>
                      Rent</a>
                  </li>
               
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      <div className="accordion" id="categories-list8">
        <div className="accordion-item mb-4 ">
          <h5 className="accordion-header" id="accordion-heading-8">
            <button
              className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accordion-filter-8"
              aria-expanded="true"
              aria-controls="accordion-filter-8"
            >
              Style
              <svg
                className="accordion-button__icon type2"
                viewBox="0 0 10 6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                  <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                </g>
              </svg>
            </button>
          </h5>
          <div
            id="accordion-filter-8"
            className="accordion-collapse collapse  border-0"
            aria-labelledby="accordion-heading-8"
            data-bs-parent="#categories-list8"
          >
            <div className="accordion-body px-0 pb-0 pt-3">
              <ul className="list list-inline mb-0 ps-3">
                <li className="list-item">
                  {/* <a href="#" className="menu-link py-1"><h5>Bikini/Fitness</h5></a> */}
                  <ul className="mb-3 ps-0">
                    <h6>Top</h6>
                    <ul className="ct_list_style_none">
                      <li>
                        <label className="cyberpunk-checkbox-label">
                          <input
                            type="checkbox"
                            className="cyberpunk-checkbox"
                          />
                        </label>
                        Bombshell
                      </li>
                      <li>
                        <label className="cyberpunk-checkbox-label">
                          <input
                            type="checkbox"
                            className="cyberpunk-checkbox"
                          />
                        </label>
                        Slider
                      </li>
                      <li>
                        <label className="cyberpunk-checkbox-label">
                          <input
                            type="checkbox"
                            className="cyberpunk-checkbox"
                          />
                        </label>
                        Moulded
                      </li>
                      <li>
                        <label className="cyberpunk-checkbox-label">
                          <input
                            type="checkbox"
                            className="cyberpunk-checkbox"
                          />
                        </label>
                        Other
                      </li>
                    </ul>
                  </ul>
                  <ul className="ps-0">
                    <h6>Bottom</h6>
                    <ul className="ct_list_style_none">
                      <li>
                        <label className="cyberpunk-checkbox-label">
                          <input
                            type="checkbox"
                            className="cyberpunk-checkbox"
                          />
                        </label>
                        Cheeky
                      </li>
                      <li>
                        <label className="cyberpunk-checkbox-label">
                          <input
                            type="checkbox"
                            className="cyberpunk-checkbox"
                          />
                        </label>
                        Extra Cheeky
                      </li>
                      <li>
                        <label className="cyberpunk-checkbox-label">
                          <input
                            type="checkbox"
                            className="cyberpunk-checkbox"
                          />
                        </label>
                        Brazllian
                      </li>
                      <li>
                        <label className="cyberpunk-checkbox-label">
                          <input
                            type="checkbox"
                            className="cyberpunk-checkbox"
                          />
                        </label>
                        Pro
                      </li>
                      <li>
                        <label className="cyberpunk-checkbox-label">
                          <input
                            type="checkbox"
                            className="cyberpunk-checkbox"
                          />
                        </label>
                        Micro Pro
                      </li>
                      <li>
                        <label className="cyberpunk-checkbox-label">
                          <input
                            type="checkbox"
                            className="cyberpunk-checkbox"
                          />
                        </label>
                        Olympian
                      </li>
                      <li>
                        <label className="cyberpunk-checkbox-label">
                          <input
                            type="checkbox"
                            className="cyberpunk-checkbox"
                          />
                        </label>
                        Other
                      </li>
                    </ul>
                  </ul>
                </li>
                {/* <li className="list-item">
                    <a href="#" className="menu-link py-1">Angels/Theme Wear</a>
                    <ul className="ct_list_style_none">
                      <li>
                          <label className="cyberpunk-checkbox-label">
                        <input type="checkbox" className="cyberpunk-checkbox"/>
                       </label>Wings
                      </li>
                      <li>
                          <label className="cyberpunk-checkbox-label">
                        <input type="checkbox" className="cyberpunk-checkbox"/>
                       </label>Costume
                      </li>
                    </ul>
                  </li> */}
                {/* <li className="list-item">
                    <a href="#" className="menu-link py-1">Figure</a>
                  </li>
                  <li className="list-item">
                    <a href="#" className="menu-link py-1">WBFF/FMG</a>
                  </li>
                  <li className="list-item">
                    <a href="#" className="menu-link py-1">Swimwear/Onepiece</a>
                  </li>
                  <li className="list-item">
                    <a href="#" className="menu-link py-1">Jewellery/Accessories</a>
                  </li> */}
                {/* <li className="list-item">
                    <a href="#" className="menu-link py-1">Shoes</a>
                    <ul className="ct_list_style_none">
                      <li>
                          <label className="cyberpunk-checkbox-label">
                        <input type="checkbox" className="cyberpunk-checkbox"/>
                       </label>Glamfit
                      </li>
                      <li>
                          <label className="cyberpunk-checkbox-label">
                        <input type="checkbox" className="cyberpunk-checkbox"/>
                       </label>Kompak
                      </li>
                      <li>
                          <label className="cyberpunk-checkbox-label">
                        <input type="checkbox" className="cyberpunk-checkbox"/>
                       </label>The Shoe Fairy
                      </li>
                      <li>
                          <label className="cyberpunk-checkbox-label">
                        <input type="checkbox" className="cyberpunk-checkbox"/>
                       </label>Competition Kit
                      </li>
                      <li>
                          <label className="cyberpunk-checkbox-label">
                        <input type="checkbox" className="cyberpunk-checkbox"/>
                       </label>Other
                      </li>
                    </ul>
                  </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion" id="category_list_drop">
        <div className="accordion-item mb-4 ">
          <h5 className="accordion-header" id="accordion-heading-category1">
            <button
              className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accordion-filter-category_12"
              aria-expanded="true"
              aria-controls="accordion-filter-category_12"
            >
              Category
              <svg
                className="accordion-button__icon type2"
                viewBox="0 0 10 6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                  <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                </g>
              </svg>
            </button>
          </h5>
          <div
            id="accordion-filter-category_12"
            className="accordion-collapse collapse  border-0"
            aria-labelledby="accordion-heading-category1"
            data-bs-parent="#category_list_drop"
          >
            <div className="accordion-body px-0 pb-0 pt-3">
              <ul className="list list-inline mb-0 ps-3">
                <li className="list-item d-flex align-items-center">
                  <label className="cyberpunk-checkbox-label">
                    <input type="checkbox" className="cyberpunk-checkbox" />
                  </label>
                  Bikini
                  {/* <a href="#" className="menu-link py-1"><h5>Bikini/Fitness</h5></a> */}
                </li>
                <li className="list-item d-flex align-items-center">
                  <label className="cyberpunk-checkbox-label">
                    <input type="checkbox" className="cyberpunk-checkbox" />
                  </label>
                  Figure
                </li>
                <li className="list-item d-flex align-items-center">
                  <label className="cyberpunk-checkbox-label">
                    <input type="checkbox" className="cyberpunk-checkbox" />
                  </label>
                  Swimsuit
                </li>
                <li className="list-item d-flex align-items-center">
                  <label className="cyberpunk-checkbox-label">
                    <input type="checkbox" className="cyberpunk-checkbox" />
                  </label>
                  FMG/WBFF
                </li>
                <li className="list-item d-flex align-items-center">
                  <label className="cyberpunk-checkbox-label">
                    <input type="checkbox" className="cyberpunk-checkbox" />
                  </label>
                  Themewear
                </li>
                <li className="list-item d-flex align-items-center">
                  <label className="cyberpunk-checkbox-label">
                    <input type="checkbox" className="cyberpunk-checkbox" />
                  </label>
                  Accessories/Shoes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion" id="brand-filters">
        <div className="accordion-item mb-4 ">
          <h5 className="accordion-header" id="accordion-heading-brand">
            <button
              className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accordion-filter-brand"
              aria-expanded="true"
              aria-controls="accordion-filter-brand"
            >
              Brands
              <svg
                className="accordion-button__icon type2"
                viewBox="0 0 10 6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                  <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                </g>
              </svg>
            </button>
          </h5>
          <div
            id="accordion-filter-brand"
            className="accordion-collapse collapse border-0"
            aria-labelledby="accordion-heading-brand"
            data-bs-parent="#brand-filters"
          >
            <div className="search-field multi-select accordion-body ps-3 pe-0 pb-0">
              <select className="d-none" multiple name="total-numbers-list">
                <option value="1">Adidas</option>
                <option value="2">Balmain</option>
                <option value="3">Balenciaga</option>
                <option value="4">Burberry</option>
                <option value="5">Kenzo</option>
                <option value="5">Givenchy</option>
                <option value="5">Zara</option>
              </select>
              <div className="search-field__input-wrapper mb-3">
                <input
                  type="text"
                  className="search-field__input form-control form-control-sm border-light border-2"
                  placeholder="Search"
                />
              </div>
              <ul className="search-suggestion list-unstyled">
                <li className="search-suggestion__item js-search-select d-flex align-items-center py-0">
                  <label className="cyberpunk-checkbox-label">
                    <input type="checkbox" className="cyberpunk-checkbox" />
                  </label>
                  <span className="me-auto">Angel Competition Bikinis</span>
                  <span className="text-secondary">2</span>
                </li>
                <li className="search-suggestion__item js-search-select d-flex align-items-center py-0">
                  <label className="cyberpunk-checkbox-label">
                    <input type="checkbox" className="cyberpunk-checkbox" />
                  </label>
                  <span className="me-auto">Georgia Rose</span>
                  <span className="text-secondary">7</span>
                </li>
                <li className="search-suggestion__item js-search-select d-flex align-items-center py-0">
                  <label className="cyberpunk-checkbox-label">
                    <input type="checkbox" className="cyberpunk-checkbox" />
                  </label>
                  <span className="me-auto">Glamfit</span>
                  <span className="text-secondary">10</span>
                </li>
                <li className="search-suggestion__item js-search-select d-flex align-items-center py-0">
                  <label className="cyberpunk-checkbox-label">
                    <input type="checkbox" className="cyberpunk-checkbox" />
                  </label>
                  <span className="me-auto">Toxic Angels</span>
                  <span className="text-secondary">39</span>
                </li>
                <li className="search-suggestion__item js-search-select d-flex align-items-center py-0">
                  <label className="cyberpunk-checkbox-label">
                    <input type="checkbox" className="cyberpunk-checkbox" />
                  </label>
                  <span className="me-auto">67 Bikinis</span>
                  <span className="text-secondary">95</span>
                </li>
                <li className="search-suggestion__item js-search-select d-flex align-items-center py-0">
                  <label className="cyberpunk-checkbox-label">
                    <input type="checkbox" className="cyberpunk-checkbox" />
                  </label>
                  <span className="me-auto">Blackice Bikinis</span>
                  <span className="text-secondary">1092</span>
                </li>
                <li className="search-suggestion__item js-search-select d-flex align-items-center py-0">
                  <label className="cyberpunk-checkbox-label">
                    <input type="checkbox" className="cyberpunk-checkbox" />
                  </label>
                  <span className="me-auto">Season Bikini</span>
                  <span className="text-secondary">48</span>
                </li>
                <li className="search-suggestion__item js-search-select d-flex align-items-center py-0">
                  <label className="cyberpunk-checkbox-label">
                    <input type="checkbox" className="cyberpunk-checkbox" />
                  </label>
                  <span className="me-auto">Ravishsands</span>
                  <span className="text-secondary">48</span>
                </li>
                <li className="search-suggestion__item js-search-select d-flex align-items-center py-0">
                  <label className="cyberpunk-checkbox-label">
                    <input type="checkbox" className="cyberpunk-checkbox" />
                  </label>
                  <span className="me-auto">Creative Bikinis</span>
                  <span className="text-secondary">48</span>
                </li>
                <li className="search-suggestion__item js-search-select d-flex align-items-center py-0">
                  <label className="cyberpunk-checkbox-label">
                    <input type="checkbox" className="cyberpunk-checkbox" />
                  </label>
                  <span className="me-auto">SY Competition Suits</span>
                  <span className="text-secondary">48</span>
                </li>
                <li className="search-suggestion__item js-search-select d-flex align-items-center py-0">
                  <label className="cyberpunk-checkbox-label">
                    <input type="checkbox" className="cyberpunk-checkbox" />
                  </label>
                  <span className="me-auto">Kristal Bikinis</span>
                  <span className="text-secondary">48</span>
                </li>
                <li className="search-suggestion__item js-search-select d-flex align-items-center py-0">
                  <label className="cyberpunk-checkbox-label">
                    <input type="checkbox" className="cyberpunk-checkbox" />
                  </label>
                  <span className="me-auto">Other</span>
                  <span className="text-secondary">48</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion" id="color-filters">
        <div className="accordion-item mb-4 ">
          <h5 className="accordion-header" id="accordion-color-1">
            <button
              className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accordion-color-2"
              aria-expanded="true"
              aria-controls="accordion-color-2"
            >
              Color
              <svg
                className="accordion-button__icon type2"
                viewBox="0 0 10 6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                  <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                </g>
              </svg>
            </button>
          </h5>
          <div
            id="accordion-color-2"
            className="accordion-collapse collapse border-0"
            aria-labelledby="accordion-color-1"
            data-bs-parent="#color-filters"
          >
            <div className="accordion-body px-0 pb-0">
              <div className="d-flex flex-wrap">
                <a
                  href="#"
                  className="swatch-color js-filter"
                  style={{ color: "#000" }}
                ></a>
                <a
                  href="#"
                  className="swatch-color js-filter swatch_active"
                  style={{ color: "#fff" }}
                ></a>
                <a
                  href="#"
                  className="swatch-color js-filter"
                  style={{ color: "#FF0000" }}
                ></a>
                <a
                  href="#"
                  className="swatch-color js-filter"
                  style={{ color: "#0000FF" }}
                ></a>
                <a
                  href="#"
                  className="swatch-color js-filter"
                  style={{ color: "#008000" }}
                ></a>
                <a
                  href="#"
                  className="swatch-color js-filter"
                  style={{ color: "#A020F0" }}
                ></a>
                <a
                  href="#"
                  className="swatch-color js-filter"
                  style={{ color: "#FFC0CB" }}
                ></a>
                <a
                  href="#"
                  className="swatch-color js-filter"
                  style={{ color: "#ff00e1" }}
                ></a>
                {/* <a
                  href="#"
                  className="swatch-color swatch_active js-filter"
                  style={{ color: "#bababa" }}
                ></a>
                <a
                  href="#"
                  className="swatch-color js-filter"
                  style={{ color: "#bfdcc4" }}
                ></a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion" id="main_size">
        <div className="accordion-item mb-4 ">
          <h5 className="accordion-header" id="accordion-color-main_size_1">
            <button
              className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accordion-color_main_size_2"
              aria-expanded="true"
              aria-controls="accordion-color_main_size_2"
            >
              Size
              <svg
                className="accordion-button__icon type2"
                viewBox="0 0 10 6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                  <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                </g>
              </svg>
            </button>
          </h5>
          <div
            id="accordion-color_main_size_2"
            className="accordion-collapse collapse border-0 mt-3"
            aria-labelledby="accordion-color-main_size_1"
            data-bs-parent="#main_size"
          >
            <div className="accordion" id="size-filters">
              <div className="accordion-item mb-4 ">
                <h5 className="accordion-header" id="accordion-heading-size">
                  <button
                    className="accordion-button ct_fs_14 p-0 border-0 fs-5 text-uppercase collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-filter-size"
                    aria-expanded="true"
                    aria-controls="accordion-filter-size"
                  >
                    Standard
                    <svg
                      className="accordion-button__icon type2"
                      viewBox="0 0 10 6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                        <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                      </g>
                    </svg>
                  </button>
                </h5>
                <div
                  id="accordion-filter-size"
                  className="accordion-collapse collapse border-0"
                  aria-labelledby="accordion-heading-size"
                  data-bs-parent="#size-filters"
                >
                  <div className="accordion-body px-0 pb-0">
                    <div className="d-flex flex-wrap">
                      <a
                        href="#"
                        className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
                      >
                        XS
                      </a>
                      <a
                        href="#"
                        className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
                      >
                        S
                      </a>
                      <a
                        href="#"
                        className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
                      >
                        M
                      </a>
                      <a
                        href="#"
                        className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
                      >
                        L
                      </a>
                      <a
                        href="#"
                        className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
                      >
                        XL
                      </a>
                      <a
                        href="#"
                        className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
                      >
                        XXL
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion" id="categories-list6">
              <div className="accordion-item mb-4 ">
                <h5 className="accordion-header" id="accordion-heading-6">
                  <button
                    className="accordion-button p-0 border-0 ct_fs_14 fs-5 text-uppercase collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-filter-6"
                    aria-expanded="true"
                    aria-controls="accordion-filter-6"
                  >
                    Size Top
                    <svg
                      className="accordion-button__icon type2"
                      viewBox="0 0 10 6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                        <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                      </g>
                    </svg>
                  </button>
                </h5>
                <div
                  id="accordion-filter-6"
                  className="accordion-collapse collapse border-0"
                  aria-labelledby="accordion-heading-6"
                  data-bs-parent="#categories-list6"
                >
                  <div className="accordion-body px-0 pb-0 pt-3">
                    <ul className="list list-inline mb-0">
                      <li className="list-item">
                        <a href="#" className="menu-link py-1">
                          A/B
                        </a>
                      </li>
                      <li className="list-item">
                        <a href="#" className="menu-link py-1">
                          C
                        </a>
                      </li>
                      <li className="list-item">
                        <a href="#" className="menu-link py-1">
                          D
                        </a>
                      </li>
                      <li className="list-item">
                        <a href="#" className="menu-link py-1">
                          DD & Bigger
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion" id="categories-list7">
              <div className="accordion-item mb-4 ">
                <h5 className="accordion-header" id="accordion-heading-7">
                  <button
                    className="accordion-button ct_fs_14 p-0 border-0 fs-5 text-uppercase collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-filter-7"
                    aria-expanded="true"
                    aria-controls="accordion-filter-7"
                  >
                    Size Bottom
                    <svg
                      className="accordion-button__icon type2"
                      viewBox="0 0 10 6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                        <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                      </g>
                    </svg>
                  </button>
                </h5>
                <div
                  id="accordion-filter-7"
                  className="accordion-collapse collapse  border-0"
                  aria-labelledby="accordion-heading-7"
                  data-bs-parent="#categories-list7"
                >
                  <div className="accordion-body px-0 pb-0 pt-3">
                    <ul className="list list-inline mb-0">
                      <li className="list-item">
                        <a href="#" className="menu-link py-1">
                          2
                        </a>
                      </li>
                      <li className="list-item">
                        <a href="#" className="menu-link py-1">
                          4
                        </a>
                      </li>
                      <li className="list-item">
                        <a href="#" className="menu-link py-1">
                          6
                        </a>
                      </li>
                      <li className="list-item">
                        <a href="#" className="menu-link py-1">
                          8
                        </a>
                      </li>
                      <li className="list-item">
                        <a href="#" className="menu-link py-1">
                          10
                        </a>
                      </li>
                      <li className="list-item">
                        <a href="#" className="menu-link py-1">
                          Other/combination
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion" id="Bling">
        <div className="accordion-item mb-4 ">
          <h5 className="accordion-header" id="accordion-color-bling">
            <button
              className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accordion-color-biling"
              aria-expanded="true"
              aria-controls="accordion-color-biling"
            >
              Bling
              <svg
                className="accordion-button__icon type2"
                viewBox="0 0 10 6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                  <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                </g>
              </svg>
            </button>
          </h5>
          <div
            id="accordion-color-biling"
            className="accordion-collapse collapse border-0 mt-3"
            aria-labelledby="accordion-color-bling"
            data-bs-parent="#Bling"
          >
            <div className="accordion" id="categories-list3">
              <div className="accordion-item mb-4 ">
                <h5 className="accordion-header" id="accordion-heading-3">
                  <button
                    className="accordion-button ct_fs_14 p-0 border-0 fs-5 text-uppercase collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-filter-3"
                    aria-expanded="true"
                    aria-controls="accordion-filter-3"
                  >
                    Level
                    <svg
                      className="accordion-button__icon type2"
                      viewBox="0 0 10 6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                        <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                      </g>
                    </svg>
                  </button>
                </h5>
                <div
                  id="accordion-filter-3"
                  className="accordion-collapse collapse  border-0"
                  aria-labelledby="accordion-heading-3"
                  data-bs-parent="#categories-list"
                >
                  <div className="accordion-body px-0 pb-0 pt-3">
                    <ul className="list list-inline mb-0">
                      <li className="list-item">
                        <a href="#" className="menu-link py-1">
                          Plain
                        </a>
                      </li>
                      <li className="list-item">
                        <a href="#" className="menu-link py-1">
                          Basic
                        </a>
                      </li>
                      <li className="list-item">
                        <a href="#" className="menu-link py-1">
                          Full
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion" id="categories-list4">
              <div className="accordion-item mb-4 ">
                <h5 className="accordion-header" id="accordion-heading-4">
                  <button
                    className="accordion-button p-0 border-0 ct_fs_14 fs-5 text-uppercase collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-filter-4"
                    aria-expanded="true"
                    aria-controls="accordion-filter-4"
                  >
                    Type
                    <svg
                      className="accordion-button__icon type2"
                      viewBox="0 0 10 6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                        <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                      </g>
                    </svg>
                  </button>
                </h5>
                <div
                  id="accordion-filter-4"
                  className="accordion-collapse collapse  border-0"
                  aria-labelledby="accordion-heading-4"
                  data-bs-parent="#categories-list4"
                >
                  <div className="accordion-body px-0 pb-0 pt-3">
                    <ul className="list list-inline mb-0">
                      <li className="list-item">
                        <a href="#" className="menu-link py-1">
                          Standard Rhinestones
                        </a>
                      </li>
                      <li className="list-item">
                        <a href="#" className="menu-link py-1">
                          Preciosa
                        </a>
                      </li>
                      <li className="list-item">
                        <a href="#" className="menu-link py-1">
                          Swarovski
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion" id="categories-list5">
        <div className="accordion-item mb-4 ">
          <h5 className="accordion-header" id="accordion-heading-5">
            <button
              className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accordion-filter-5"
              aria-expanded="true"
              aria-controls="accordion-filter-5"
            >
              Condition
              <svg
                className="accordion-button__icon type2"
                viewBox="0 0 10 6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                  <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                </g>
              </svg>
            </button>
          </h5>
          <div
            id="accordion-filter-5"
            className="accordion-collapse collapse  border-0"
            aria-labelledby="accordion-heading-5"
            data-bs-parent="#categories-list5"
          >
            <div className="accordion-body pe-0 ps-3 pb-0 pt-3">
              <ul className="list list-inline mb-0">
                <li className="list-item">
                  <a href="#" className="menu-link py-1">
                    New
                  </a>
                </li>
                <li className="list-item">
                  <a href="#" className="menu-link py-1">
                    Worn Once
                  </a>
                </li>
                <li className="list-item">
                  <a href="#" className="menu-link py-1">
                    Worn
                  </a>
                </li>
                <li className="list-item">
                  <a href="#" className="menu-link py-1">
                    Needs work
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion" id="price-filters">
        <div className="accordion-item mb-4 ">
          <h5 className="accordion-header mb-2" id="accordion-heading-price">
            <button
              className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accordion-filter-price"
              aria-expanded="true"
              aria-controls="accordion-filter-price"
            >
              Price
              <svg
                className="accordion-button__icon type2"
                viewBox="0 0 10 6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                  <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                </g>
              </svg>
            </button>
          </h5>
          <div
            id="accordion-filter-price"
            className="accordion-collapse collapse border-0 mt-3"
            aria-labelledby="accordion-heading-price"
            data-bs-parent="#price-filters"
          >
            <div className="accordion" id="price-filters_buy">
              <div className="accordion-item mb-4 ">
                <h5
                  className="accordion-header mb-2"
                  id="accordion-heading-price_buy"
                >
                  <button
                    className="accordion-button p-0 border-0 ct_fs_14 fs-5 text-uppercase collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-filter-price_buy"
                    aria-expanded="true"
                    aria-controls="accordion-filter-price_buy"
                  >
                    Buy
                    <svg
                      className="accordion-button__icon type2"
                      viewBox="0 0 10 6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                        <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                      </g>
                    </svg>
                  </button>
                </h5>
                <div
                  id="accordion-filter-price_buy"
                  className="accordion-collapse collapse border-0"
                  aria-labelledby="accordion-heading-price_buy"
                  data-bs-parent="#price-filters_buy"
                >
                  {/* <input className="price-range-slider" type="text" value="" data-slider-min="10" data-slider-max="1000" data-slider-step="5" data-slider-value="[250,450]" data-currency="$" /> */}
                  <Slider
                    range
                    defaultValue={[20, 50]}
                    onChange={(e) => handleRange(e)}
                  />

                  <div className="price-range__info d-flex align-items-center mt-2">
                    <div className="me-auto">
                      <span className="text-secondary">Min Price: </span>
                      <span className="price-range__min">${Price[0]}</span>
                    </div>
                    <div>
                      <span className="text-secondary">Max Price: </span>
                      <span className="price-range__max">${Price[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion" id="price-filters2">
        <div className="accordion-item mb-4 ">
          <h5 className="accordion-header mb-2" id="accordion-heading-price2">
            <button
              className="accordion-button p-0 ct_fs_14 border-0 fs-5 text-uppercase collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accordion-filter-price2"
              aria-expanded="true"
              aria-controls="accordion-filter-price2"
            >
              Rent
              <svg
                className="accordion-button__icon type2"
                viewBox="0 0 10 6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                  <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                </g>
              </svg>
            </button>
          </h5>
          <div
            id="accordion-filter-price2"
            className="accordion-collapse collapse border-0"
            aria-labelledby="accordion-heading-price2"
            data-bs-parent="#price-filters2"
          >
            <Slider
              range
              defaultValue={[30, 70]}
              onChange={(e) => handleLeasePrice(e)}
            />
            <div className="price-range__info d-flex align-items-center mt-2">
              <div className="me-auto">
                <span className="text-secondary">Min Price: </span>
                <span className="price-range__min">${leasePrice[0]}</span>
              </div>
              <div>
                <span className="text-secondary">Max Price: </span>
                <span className="price-range__max">${leasePrice[1]}</span>
              </div>
            </div>
            <small>(Per week/month or season)</small>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
      <div className="accordion" id="categories-list2">
        <div className="accordion-item mb-4 ">
          <h5 className="accordion-header" id="accordion-heading-2">
            <button
              className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accordion-filter-2"
              aria-expanded="true"
              aria-controls="accordion-filter-1"
            >
              Padding
              <svg
                className="accordion-button__icon type2"
                viewBox="0 0 10 6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                  <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                </g>
              </svg>
            </button>
          </h5>
          <div
            id="accordion-filter-2"
            className="accordion-collapse collapse  border-0"
            aria-labelledby="accordion-heading-2"
            data-bs-parent="#categories-list2"
          >
            <div className="accordion-body px-0 pb-0 pt-3">
              <ul className="list list-inline mb-0">
                <li className="list-item py-0">
                  <a href="#" className="menu-link py-1">
                    <label className="cyberpunk-checkbox-label">
                      <input type="checkbox" className="cyberpunk-checkbox" />
                    </label>
                    Single
                  </a>
                </li>
                <li className="list-item  py-0">
                  <a href="#" className="menu-link py-1">
                    <label className="cyberpunk-checkbox-label">
                      <input type="checkbox" className="cyberpunk-checkbox" />
                    </label>
                    Double
                  </a>
                </li>
                <li className="list-item  py-0">
                  <a href="#" className="menu-link py-1">
                    <label className="cyberpunk-checkbox-label">
                      <input type="checkbox" className="cyberpunk-checkbox" />
                    </label>
                    None
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="accordion" id="location">
        <div className="accordion-item mb-4 ">
          <h5 className="accordion-header mb-2" id="accordion-heading_location">
            <button
              className="accordion-button p-0 border-0 fs-5 text-uppercase collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accordion-filter-location"
              aria-expanded="true"
              aria-controls="accordion-filter-location"
            >
              Location
              <svg
                className="accordion-button__icon type2"
                viewBox="0 0 10 6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g aria-hidden="true" stroke="none" fill-rule="evenodd">
                  <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
                </g>
              </svg>
            </button>
          </h5>
          <div
            id="accordion-filter-location"
            className="accordion-collapse collapse border-0"
            aria-labelledby="accordion-heading_location"
            data-bs-parent="#location"
          >
            <div className="accordion-body ps-0">
              <a href="#" className="mb-3 d-block me-3 js-filter">
                <h4>Item Location</h4>
                <input
                  type="text"
                  className="search-field__input form-control form-control-sm border-light border-2"
                  placeholder="Location"
                />
              </a>
              <a href="#" className=" mb-3 me-3 js-filter">
                Posts to
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterBy;
