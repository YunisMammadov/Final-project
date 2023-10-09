import "./product.css";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";

function Product_listing({ products, dispatch, filteredCategories }) {
  const [priceFilter, setPriceFilter] = useState([0, 1000]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const sliderStyles = {
    trackStyle: {
      backgroundColor: "#575859",
      height: "2px",
    },
    handleStyle: {
      backgroundColor: "#000000",
      width: "13px",
      height: "13px",
      boxShadow: "none",
      borderColor: "#000000",
    },
  };
  const handleSliderChange = (values) => {
    setPriceFilter(values);
    const filtered = products.filter((product) => {
      const price = parseFloat(product.new_price);
      return price >= values[0] && price <= values[1];
    });

    setFilteredProducts(filtered);
  };

  const activeSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17 14L12 10L7 14"
        stroke="#131118"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const inactiveSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 10L12 14L17 10"
        stroke="#131118"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const [activeAccordions, setActiveAccordions] = useState([]);

  const handleAccordionClick = (index) => {
    if (activeAccordions.includes(index)) {
      setActiveAccordions(activeAccordions.filter((item) => item !== index));
    } else {
      setActiveAccordions([...activeAccordions, index]);
    }
  };

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem("currentPage")) || 1
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage.toString());
  }, [currentPage]);
  const mergedProducts = [
    ...filteredCategories,
    ...filteredProducts,
    ...currentProducts,
  ];

  return (
    <section className="products">
      <div className="container">
        <div className="product">
          <div className="product-up">
            <p>Shop</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.942963 0.345232C0.673424 0.560863 0.629723 0.954171 0.845354 1.22371L3.86634 4.99994L0.845354 8.77617C0.629723 9.04571 0.673424 9.43902 0.942962 9.65465C1.2125 9.87028 1.60581 9.82658 1.82144 9.55704L5.15477 5.39038C5.33738 5.16211 5.33738 4.83777 5.15477 4.60951L1.82144 0.442841C1.60581 0.173302 1.2125 0.129601 0.942963 0.345232Z"
                  fill="#131118"
                />
              </svg>
            </span>
            <p>All Products</p>
          </div>
          <div className="product-down">
            <div className="product-left">
              <div
                className={`product-category accordion-item ${
                  activeAccordions.includes(1) ? "active" : ""
                }`}
              >
                <div
                  className={`product-category-head ${
                    activeAccordions.includes(1) ? "active" : ""
                  }`}
                  onClick={() => handleAccordionClick(1)}
                >
                  <p>Filter by Price</p>
                  {activeAccordions.includes(1) ? activeSvg : inactiveSVG}
                </div>

                <div className="product-category-body accordion-content">
                  <div className="product-text1 ">
                    <div className="product-checkbox">
                      <input
                        type="checkbox"
                        onClick={(e) => {
                          dispatch({
                            type: "CATEGORY_FILTER",
                            payload: e.target.textContent,
                          });
                        }}
                      />
                      <p>Men</p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.75 1C7.75 0.585786 7.41421 0.25 7 0.25C6.58579 0.25 6.25 0.585786 6.25 1V6.25H1C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75H6.25V13C6.25 13.4142 6.58579 13.75 7 13.75C7.41421 13.75 7.75 13.4142 7.75 13V7.75H13C13.4142 7.75 13.75 7.41421 13.75 7C13.75 6.58579 13.4142 6.25 13 6.25H7.75V1Z"
                        fill="#28303F"
                      />
                    </svg>
                  </div>
                  <div className="product-text1 ">
                    <div className="product-checkbox">
                      <input type="checkbox" />
                      <p>Women</p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.75 1C7.75 0.585786 7.41421 0.25 7 0.25C6.58579 0.25 6.25 0.585786 6.25 1V6.25H1C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75H6.25V13C6.25 13.4142 6.58579 13.75 7 13.75C7.41421 13.75 7.75 13.4142 7.75 13V7.75H13C13.4142 7.75 13.75 7.41421 13.75 7C13.75 6.58579 13.4142 6.25 13 6.25H7.75V1Z"
                        fill="#28303F"
                      />
                    </svg>
                  </div>
                  <div className="product-text1 ">
                    <div className="product-checkbox">
                      <input type="checkbox" />
                      <p>Kids</p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.75 1C7.75 0.585786 7.41421 0.25 7 0.25C6.58579 0.25 6.25 0.585786 6.25 1V6.25H1C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75H6.25V13C6.25 13.4142 6.58579 13.75 7 13.75C7.41421 13.75 7.75 13.4142 7.75 13V7.75H13C13.4142 7.75 13.75 7.41421 13.75 7C13.75 6.58579 13.4142 6.25 13 6.25H7.75V1Z"
                        fill="#28303F"
                      />
                    </svg>
                  </div>
                  <div className="product-text">
                    <input type="checkbox" />
                    <p>Bags</p>
                  </div>
                  <div className="product-text">
                    <input type="checkbox" />
                    <p>Belts</p>
                  </div>
                  <div className="product-text">
                    <input type="checkbox" />
                    <p>Wallets</p>
                  </div>
                  <div className="product-text">
                    <input type="checkbox" />
                    <p>Watches</p>
                  </div>
                  <div className="product-text">
                    <input type="checkbox" />
                    <p>Accessories</p>
                  </div>
                  <div className="product-text">
                    <input type="checkbox" />
                    <p>Winter Wear</p>
                  </div>
                </div>
                <div className="product-rectangle"></div>
              </div>
              <div
                className={`product-category accordion-item ${
                  activeAccordions.includes(2) ? "active" : ""
                }`}
              >
                <div
                  className={`product-category-head ${
                    activeAccordions.includes(2) ? "active" : ""
                  }`}
                  onClick={() => handleAccordionClick(2)}
                >
                  <p>Filter by Price</p>
                  {activeAccordions.includes(2) ? activeSvg : inactiveSVG}
                </div>
                <div className="product-category-body accordion-content">
                  <div className="product-txt">
                    <p>
                      Price: ${priceFilter[0]} - ${priceFilter[1]}
                    </p>
                    <Slider
                      range
                      min={0}
                      max={1000}
                      step={50}
                      value={priceFilter}
                      onChange={handleSliderChange}
                      trackStyle={sliderStyles.trackStyle}
                      handleStyle={sliderStyles.handleStyle}
                    />
                  </div>
                </div>
                <div className="product-rectangle"></div>
              </div>
              <div
                className={`product-category accordion-item ${
                  activeAccordions.includes(3) ? "active" : ""
                }`}
              >
                <div
                  className={`product-category-head ${
                    activeAccordions.includes(3) ? "active" : ""
                  }`}
                  onClick={() => handleAccordionClick(3)}
                >
                  <p>Filter by Color</p>
                  {activeAccordions.includes(3) ? activeSvg : inactiveSVG}
                </div>
                <div className="product-category-body accordion-content">
                  <div className="product-text1 ">
                    <div className="product-checkbox">
                      <div className="product-check-rect1"></div>
                      <p>Red</p>
                    </div>
                    <p>(6)</p>
                  </div>
                  <div className="product-text1 ">
                    <div className="product-checkbox">
                      <div className="product-check-rect2"></div>
                      <p>Blue</p>
                    </div>
                    <p>(20)</p>
                  </div>
                  <div className="product-text1 ">
                    <div className="product-checkbox">
                      <div className="product-check-rect3"></div>
                      <p>Orange</p>
                    </div>
                    <p>(7)</p>
                  </div>
                  <div className="product-text1 ">
                    <div className="product-checkbox">
                      <div className="product-check-rect4"></div>
                      <p>Black</p>
                    </div>
                    <p>(16)</p>
                  </div>
                  <div className="product-text1 ">
                    <div className="product-checkbox">
                      <div className="product-check-rect5"></div>
                      <p>Green</p>
                    </div>
                    <p>(10)</p>
                  </div>
                  <div className="product-text1 ">
                    <div className="product-checkbox">
                      <div className="product-check-rect6"></div>
                      <p>Yellow</p>
                    </div>
                    <p>(2)</p>
                  </div>
                </div>
                <div className="product-rectangle"></div>
              </div>
              <div
                className={`product-category accordion-item ${
                  activeAccordions.includes(4) ? "active" : ""
                }`}
              >
                <div
                  className={`product-category-head ${
                    activeAccordions.includes(4) ? "active" : ""
                  }`}
                  onClick={() => handleAccordionClick(4)}
                >
                  <p>Filter by Size</p>
                  {activeAccordions.includes(4) ? activeSvg : inactiveSVG}
                </div>
                <div className="product-category-body accordion-content">
                  <div className="product-text1 ">
                    <div className="product-checkbox">
                      <input type="checkbox" />
                      <p>S</p>
                    </div>
                    <p>(6)</p>
                  </div>
                  <div className="product-text1 ">
                    <div className="product-checkbox">
                      <input type="checkbox" />
                      <p>M</p>
                    </div>
                    <p>(20)</p>
                  </div>
                  <div className="product-text1 ">
                    <div className="product-checkbox">
                      <input type="checkbox" />
                      <p>L</p>
                    </div>
                    <p>(7)</p>
                  </div>
                  <div className="product-text1 ">
                    <div className="product-checkbox">
                      <input type="checkbox" />
                      <p>XL</p>
                    </div>
                    <p>(16)</p>
                  </div>
                  <div className="product-text1 ">
                    <div className="product-checkbox">
                      <input type="checkbox" />
                      <p>XXL</p>
                    </div>
                    <p>(10)</p>
                  </div>
                  <div className="product-text1 ">
                    <div className="product-checkbox">
                      <input type="checkbox" />
                      <p>XXL</p>
                    </div>
                    <p>(2)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-right">
              <div className="product-show">
                <div className="product-show-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M2 4C2 2.89543 2.89543 2 4 2H8C9.10457 2 10 2.89543 10 4V8C10 9.10457 9.10457 10 8 10H4C2.89543 10 2 9.10457 2 8V4Z"
                      stroke="#131118"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 4C14 2.89543 14.8954 2 16 2H20C21.1046 2 22 2.89543 22 4V8C22 9.10457 21.1046 10 20 10H16C14.8954 10 14 9.10457 14 8V4Z"
                      stroke="#131118"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 16C2 14.8954 2.89543 14 4 14H8C9.10457 14 10 14.8954 10 16V20C10 21.1046 9.10457 22 8 22H4C2.89543 22 2 21.1046 2 20V16Z"
                      stroke="#131118"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 16C14 14.8954 14.8954 14 16 14H20C21.1046 14 22 14.8954 22 16V20C22 21.1046 21.1046 22 20 22H16C14.8954 22 14 21.1046 14 20V16Z"
                      stroke="#131118"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M10 6H16M10 14H16M10 10H22M10 18H22M4 10C2.89543 10 2 9.10457 2 8C2 6.89543 2.89543 6 4 6C5.10457 6 6 6.89543 6 8C6 9.10457 5.10457 10 4 10ZM4 18C2.89543 18 2 17.1046 2 16C2 14.8954 2.89543 14 4 14C5.10457 14 6 14.8954 6 16C6 17.1046 5.10457 18 4 18Z"
                      stroke="#131118"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p>Showing 1-16 of 72 results</p>
                </div>
                <div className="product-shotlatest">
                  <p>Shot by latest</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 10L12 14L17 10"
                      stroke="#131118"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="products-listing">
                {mergedProducts.slice(0, 9).map((a) => {
                  return (
                    <div key={a.id} className="product-listing">
                      <Link
                        key={a.id}
                        to={`/${a.id}/product_detail`}
                        className="product-listing-img"
                      >
                        <img src={a.image} alt="" />
                        <div className="product-listing-common">
                          <div className="product-listing-carts">
                            <div className="product-listing-icons">
                              <button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <g clip-path="url(#clip0_214_534)">
                                    <path
                                      d="M8.36076 2.72601C9.03133 1.31334 10.9688 1.31333 11.6394 2.72601L12.7983 5.16749C13.0646 5.72846 13.5793 6.11728 14.1748 6.20724L16.7662 6.59875C18.2656 6.82528 18.8644 8.74112 17.7794 9.84074L15.9042 11.7412C15.4733 12.1778 15.2767 12.807 15.3784 13.4235L15.8211 16.107C16.0772 17.6596 14.5098 18.8437 13.1686 18.1106L10.8508 16.8437C10.3182 16.5526 9.68196 16.5526 9.14939 16.8437L6.83155 18.1106C5.49041 18.8437 3.92293 17.6596 4.17907 16.107L4.62174 13.4235C4.72345 12.807 4.52684 12.1778 4.09598 11.7412L2.22081 9.84074C1.1358 8.74112 1.73452 6.82528 3.23397 6.59875L5.82539 6.20724C6.42082 6.11728 6.93555 5.72846 7.20184 5.16749L8.36076 2.72601Z"
                                      stroke="#131118"
                                      stroke-width="1.5"
                                      stroke-linejoin="round"
                                    />
                                  </g>
                                </svg>
                              </button>
                              <button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="14"
                                  viewBox="0 0 12 14"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.558058 9.89155C0.31398 10.1356 0.31398 10.5314 0.558058 10.7754L3.05806 13.2754C3.30214 13.5195 3.69786 13.5195 3.94194 13.2754C4.18602 13.0314 4.18602 12.6356 3.94194 12.3916L2.50888 10.9585L11 10.9585C11.3452 10.9585 11.625 10.6787 11.625 10.3335C11.625 9.98832 11.3452 9.7085 11 9.7085L2.50888 9.7085L3.94194 8.27544C4.18602 8.03136 4.18602 7.63563 3.94194 7.39155C3.69786 7.14748 3.30214 7.14748 3.05806 7.39155L0.558058 9.89155ZM8.94194 6.60877L11.4419 4.10877C11.686 3.86469 11.686 3.46897 11.4419 3.22489L8.94194 0.724887C8.69786 0.48081 8.30214 0.48081 8.05806 0.724888C7.81398 0.968965 7.81398 1.36469 8.05806 1.60877L9.49112 3.04183L1 3.04183C0.654822 3.04183 0.375 3.32165 0.375 3.66683C0.375 4.01201 0.654822 4.29183 1 4.29183L9.49112 4.29183L8.05806 5.72489C7.81398 5.96896 7.81398 6.36469 8.05806 6.60877C8.30214 6.85285 8.69786 6.85285 8.94194 6.60877Z"
                                    fill="#131118"
                                  />
                                </svg>
                              </button>
                              <button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    d="M17.6087 8.21075C18.575 9.22748 18.575 10.7722 17.6087 11.7889C15.9788 13.5037 13.1797 15.8332 10.0001 15.8332C6.82049 15.8332 4.02133 13.5037 2.3915 11.7889C1.42516 10.7722 1.42516 9.22748 2.3915 8.21075C4.02132 6.49595 6.82049 4.1665 10.0001 4.1665C13.1797 4.1665 15.9788 6.49595 17.6087 8.21075Z"
                                    stroke="#131118"
                                    stroke-width="1.5"
                                  />
                                  <path
                                    d="M12.5001 9.99984C12.5001 11.3805 11.3808 12.4998 10.0001 12.4998C8.61937 12.4998 7.50008 11.3805 7.50008 9.99984C7.50008 8.61913 8.61937 7.49984 10.0001 7.49984C11.3808 7.49984 12.5001 8.61913 12.5001 9.99984Z"
                                    stroke="#131118"
                                    stroke-width="1.5"
                                  />
                                </svg>
                              </button>
                            </div>
                            <button className="product-listing-cart">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Link>
                      <div className="product-listing-txt">
                        <h1>{a.title}</h1>
                        <h2>{a.text}</h2>
                        <div className="product-listing-price">
                          <h3>${a.new_price}</h3>
                          <h4>${a.old_price}</h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="pagination">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M10 8L6 12M6 12L10 16M6 12L18 12"
                      stroke={currentPage === 1 ? "#A4A2AA" : "#131118"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="pagination-numbers">
                  {Array.from({
                    length: Math.ceil(products.length / itemsPerPage),
                  }).map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => handlePageChange(i + 1)}
                      className={currentPage === i + 1 ? "active" : ""}
                      style={{
                        color: currentPage === i + 1 ? "#fff" : "#131118",
                        background: currentPage === i + 1 ? "#131118" : "none",
                      }}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={endIndex >= products.length}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14 16L18 12M18 12L14 8M18 12L6 12"
                      stroke={
                        currentPage ===
                        Math.ceil(products.length / itemsPerPage)
                          ? "#A4A2AA"
                          : "#131118"
                      }
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const t = (a) => a;
export default connect(t)(Product_listing);
