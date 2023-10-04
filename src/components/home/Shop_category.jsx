import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

function Shop_category({ category }) {
  const sliderRef = useRef(null);

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  var settings = {
    // autoplay: true,
    // autoplaySpeed: 3000,
    loop: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1274,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="shop-by-category">
        <div className="container">
          <div className="shop-category">
            <div className="shop-category-up">
              <p>Shop by Categories</p>
              <div className="shop-category-arrow">
                <div onClick={goToPrev} className="shop-category-arrow-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.46967 4.46967C0.176777 4.76256 0.176777 5.23744 0.46967 5.53033L4.46967 9.53033C4.76256 9.82322 5.23744 9.82322 5.53033 9.53033C5.82322 9.23744 5.82322 8.76256 5.53033 8.46967L2.81066 5.75L13 5.75C13.4142 5.75 13.75 5.41421 13.75 5C13.75 4.58579 13.4142 4.25 13 4.25L2.81066 4.25L5.53033 1.53033C5.82322 1.23744 5.82322 0.762563 5.53033 0.46967C5.23744 0.176776 4.76256 0.176776 4.46967 0.46967L0.46967 4.46967Z"
                      fill="#131118"
                    />
                  </svg>
                </div>
                <div onClick={goToNext} className="shop-category-arrow-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.5303 4.46967C13.8232 4.76256 13.8232 5.23744 13.5303 5.53033L9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967L11.1893 5.75L1 5.75C0.585787 5.75 0.25 5.41421 0.25 5C0.25 4.58579 0.585787 4.25 1 4.25L11.1893 4.25L8.46967 1.53033C8.17678 1.23744 8.17678 0.762563 8.46967 0.46967C8.76256 0.176776 9.23744 0.176776 9.53033 0.46967L13.5303 4.46967Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <Slider
              ref={sliderRef}
              {...settings}
              className="shop-category-down"
            >
              {category.map((category) => {
                return (
                  <div key={category} className="shop-category-card">
                    <div className="shop-category-img">
                      <img
                        src={category.categoryimg && category.categoryimg}
                        alt=""
                      />
                    </div>
                    <div className="shop-category-text">
                      <span>{category.category}</span>
                    </div>
                    <button>
                      <NavLink to="">{category.category}</NavLink>
                    </button>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

const t = (a) => a;
export default connect(t)(Shop_category);
