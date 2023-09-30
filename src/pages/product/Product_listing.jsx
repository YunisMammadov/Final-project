import "./product.css";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";

function Product_listing({ products, dispatch }) {
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
      setActiveAccordions(activeAccordions.filter(item => item !== index));
    } else {
      setActiveAccordions([...activeAccordions, index]);
    }
  };

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
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
                  {activeAccordions === 1 ? activeSvg : inactiveSVG}
                </div>

                <div className="product-category-body accordion-content">
                  <div className="product-text1 ">
                    <div className="product-checkbox">
                      <input type="checkbox" />
                      <p
                        onClick={(e) => {
                          dispatch({
                            type: "PRODUCT_FILTER",
                            payload: e.target.textContent,
                          });
                        }}
                      >
                        Men
                      </p>
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
                      <p
                        onClick={(e) => {
                          dispatch({
                            type: "PRODUCT_FILTER",
                            payload: e.target.textContent,
                          });
                        }}
                      >
                        Women
                      </p>
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
                      <p
                        onClick={(e) => {
                          dispatch({
                            type: "PRODUCT_FILTER",
                            payload: e.target.textContent,
                          });
                        }}
                      >
                        Kids
                      </p>
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
                  {activeAccordions === 2 ? activeSvg : inactiveSVG}
                </div>
                <div className="product-category-body accordion-content">
                  <div className="product-txt">
                    <p>Price: $0 - $2000</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="244"
                      height="14"
                      viewBox="0 0 244 14"
                      fill="none"
                    >
                      <circle cx="7" cy="7" r="7" fill="#131118" />
                      <rect
                        x="10"
                        y="6"
                        width="230"
                        height="2"
                        fill="#131118"
                      />
                      <circle cx="237" cy="7" r="7" fill="#131118" />
                    </svg>
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
                  {activeAccordions  === 3 ? activeSvg : inactiveSVG}
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
                  onClick={() => handleAccordionClick()}
                >
                  <p>Filter by Size</p>
                  {activeAccordions === 4 ? activeSvg : inactiveSVG}
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
                {currentProducts.slice(0, 9).map((a) => {
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
                            <button
                              // onClick={() => addToCart(a)}
                              className="product-listing-cart"
                            >
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
