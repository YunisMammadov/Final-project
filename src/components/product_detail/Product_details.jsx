import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Descriptions from "./Descriptions";
import Additional from "./Additional";
import Reviews from "./Reviews";
import AddToCard from "./AddToCard";
function Product_details({ dispatch, words, lang }) {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    fetch(`http://localhost:1313/products/${id}`)
      .then((a) => a.json())
      .then((a) => setProductDetail(a));
  }, [id]);

  const [activeTab, setActiveTab] = useState("Descriptions");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const handleSizeSelection = (size) => {
    dispatch({ type: "SET_SELECTED_SIZE", payload: size });
    setSelectedSize(size);
  };
  const isCategoryVisible =
    productDetail.category_id &&
    ![8, 9, 10, 11, 12].includes(productDetail.category_id);

  const sizeOptions = [5, 28, 29, 30, 31, 32].includes(
    productDetail.category_id
  )
    ? ["36", "38", "40", "42", "44"]
    : ["S", "M", "L", "XL", "XXL"];

  return (
    <section className="products">
      <div className="container">
        <div className="product">
          <div className="product-detail-up">
            <p>{words[lang].shop}</p>
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
            <p>{words[lang].allpro}</p>
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
            <p>{productDetail.text}</p>
          </div>
          <div className="product-detail-center">
            <div className="product-center-left">
              <div className="product-cen-big-rec">
                <img src={productDetail.image} alt="" />
              </div>
              <div className="product-cen-lit-recs">
                <div className="product-cen-lit-rec">
                  <img src={productDetail.image} alt="" />
                </div>
                <div className="product-cen-lit-rec">
                  <img src={productDetail.image} alt="" />
                </div>
                <div className="product-cen-lit-rec">
                  <img src={productDetail.image} alt="" />
                </div>
                <div className="product-cen-lit-rec">
                  <img src={productDetail.image} alt="" />
                </div>
              </div>
            </div>
            <div className="product-center-right">
              <div className="product-right-text">
                <p>{productDetail.title}</p>
                <span>{productDetail.text}</span>
              </div>
              {/* <div className="product-right-stars">
                <div className="product-right-star">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M10.0328 3.27141C10.8375 1.5762 13.1625 1.5762 13.9672 3.27141L15.3579 6.20118C15.6774 6.87435 16.2951 7.34094 17.0096 7.44888L20.1193 7.91869C21.9187 8.19053 22.6371 10.4895 21.3351 11.8091L19.0849 14.0896C18.5679 14.6136 18.332 15.3685 18.454 16.1084L18.9852 19.3285C19.2926 21.1918 17.4116 22.6126 15.8022 21.7329L13.0208 20.2126C12.3817 19.8633 11.6183 19.8633 10.9792 20.2126L8.19776 21.7329C6.58839 22.6126 4.70742 21.1918 5.01479 19.3286L5.54599 16.1084C5.66804 15.3685 5.43211 14.6136 4.91508 14.0896L2.66488 11.8091C1.36287 10.4895 2.08133 8.19053 3.88066 7.91869L6.99037 7.44888C7.70489 7.34094 8.32257 6.87435 8.64211 6.20118L10.0328 3.27141Z"
                      fill="#F59E0B"
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
                      d="M10.0328 3.27141C10.8375 1.5762 13.1625 1.5762 13.9672 3.27141L15.3579 6.20118C15.6774 6.87435 16.2951 7.34094 17.0096 7.44888L20.1193 7.91869C21.9187 8.19053 22.6371 10.4895 21.3351 11.8091L19.0849 14.0896C18.5679 14.6136 18.332 15.3685 18.454 16.1084L18.9852 19.3285C19.2926 21.1918 17.4116 22.6126 15.8022 21.7329L13.0208 20.2126C12.3817 19.8633 11.6183 19.8633 10.9792 20.2126L8.19776 21.7329C6.58839 22.6126 4.70742 21.1918 5.01479 19.3286L5.54599 16.1084C5.66804 15.3685 5.43211 14.6136 4.91508 14.0896L2.66488 11.8091C1.36287 10.4895 2.08133 8.19053 3.88066 7.91869L6.99037 7.44888C7.70489 7.34094 8.32257 6.87435 8.64211 6.20118L10.0328 3.27141Z"
                      fill="#F59E0B"
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
                      d="M10.0328 3.27141C10.8375 1.5762 13.1625 1.5762 13.9672 3.27141L15.3579 6.20118C15.6774 6.87435 16.2951 7.34094 17.0096 7.44888L20.1193 7.91869C21.9187 8.19053 22.6371 10.4895 21.3351 11.8091L19.0849 14.0896C18.5679 14.6136 18.332 15.3685 18.454 16.1084L18.9852 19.3285C19.2926 21.1918 17.4116 22.6126 15.8022 21.7329L13.0208 20.2126C12.3817 19.8633 11.6183 19.8633 10.9792 20.2126L8.19776 21.7329C6.58839 22.6126 4.70742 21.1918 5.01479 19.3286L5.54599 16.1084C5.66804 15.3685 5.43211 14.6136 4.91508 14.0896L2.66488 11.8091C1.36287 10.4895 2.08133 8.19053 3.88066 7.91869L6.99037 7.44888C7.70489 7.34094 8.32257 6.87435 8.64211 6.20118L10.0328 3.27141Z"
                      fill="#F59E0B"
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
                      d="M10.0328 3.27141C10.8375 1.5762 13.1625 1.5762 13.9672 3.27141L15.3579 6.20118C15.6774 6.87435 16.2951 7.34094 17.0096 7.44888L20.1193 7.91869C21.9187 8.19053 22.6371 10.4895 21.3351 11.8091L19.0849 14.0896C18.5679 14.6136 18.332 15.3685 18.454 16.1084L18.9852 19.3285C19.2926 21.1918 17.4116 22.6126 15.8022 21.7329L13.0208 20.2126C12.3817 19.8633 11.6183 19.8633 10.9792 20.2126L8.19776 21.7329C6.58839 22.6126 4.70742 21.1918 5.01479 19.3286L5.54599 16.1084C5.66804 15.3685 5.43211 14.6136 4.91508 14.0896L2.66488 11.8091C1.36287 10.4895 2.08133 8.19053 3.88066 7.91869L6.99037 7.44888C7.70489 7.34094 8.32257 6.87435 8.64211 6.20118L10.0328 3.27141Z"
                      fill="#F59E0B"
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
                      d="M10.0328 3.27141C10.8375 1.5762 13.1625 1.5762 13.9672 3.27141L15.3579 6.20118C15.6774 6.87435 16.2951 7.34094 17.0096 7.44888L20.1193 7.91869C21.9187 8.19053 22.6371 10.4895 21.3351 11.8091L19.0849 14.0896C18.5679 14.6136 18.332 15.3685 18.454 16.1084L18.9852 19.3285C19.2926 21.1918 17.4116 22.6126 15.8022 21.7329L13.0208 20.2126C12.3817 19.8633 11.6183 19.8633 10.9792 20.2126L8.19776 21.7329C6.58839 22.6126 4.70742 21.1918 5.01479 19.3286L5.54599 16.1084C5.66804 15.3685 5.43211 14.6136 4.91508 14.0896L2.66488 11.8091C1.36287 10.4895 2.08133 8.19053 3.88066 7.91869L6.99037 7.44888C7.70489 7.34094 8.32257 6.87435 8.64211 6.20118L10.0328 3.27141Z"
                      fill="#F59E0B"
                    />
                  </svg>
                </div>
                <div className="product-right-rewievs">5.0 (121 Reviews)</div>
              </div> */}
              <div className="product-right-price">
                <div className="product-right-newprice">
                  {productDetail.new_price}
                </div>
                <div className="product-right-oldprice">
                  {productDetail.old_price}
                </div>
              </div>
              <div className="product-right-txt">
                <p>{words[lang].productdescription}</p>
              </div>
              <div className="product-right-color">
                <p>Color</p>
                <div className="product-right-checkboxes">
                  <div className="product-right-rect1"></div>
                  <div className="product-right-rect2"></div>
                  <div className="product-right-rect3"></div>
                  <div className="product-right-rect4"></div>
                  <div className="product-right-rect5"></div>
                  <div className="product-right-rect6"></div>
                </div>
              </div>
              {isCategoryVisible && (
                <div className="product-right-size">
                  <p>Size</p>
                  <div className="product-right-checkboxes">
                    {sizeOptions.map((sizeOption) => (
                      <div
                        key={sizeOption}
                        className={`product-center-rects ${
                          selectedSize === sizeOption ? "active" : ""
                        }`}
                        onClick={() => handleSizeSelection(sizeOption)}
                      >
                        {sizeOption}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="product-add-cart">
                <AddToCard product={productDetail} />
              </div>
            </div>
          </div>
          <div className="product-detail-down">
            <div className="product-down-buttons">
              <div className="product-down-btn">
                <button
                  className={`product-down-button${
                    activeTab === "Descriptions" ? " active" : ""
                  }`}
                  onClick={() => handleTabClick("Descriptions")}
                >
                  {words[lang].description}
                </button>
                <div
                  className={`product-down-rec${
                    activeTab === "Descriptions" ? " active" : ""
                  }`}
                  data-tab="Descriptions"
                ></div>
              </div>

              <div className="product-down-btn">
                <button
                  className={`product-down-button${
                    activeTab === "Additional" ? " active" : ""
                  }`}
                  onClick={() => handleTabClick("Additional")}
                >
                  {words[lang].additional}
                </button>
                <div
                  className={`product-down-rec${
                    activeTab === "Additional" ? " active" : ""
                  }`}
                  data-tab="Additional"
                ></div>
              </div>

              <div className="product-down-btn">
                <button
                  className={`product-down-button${
                    activeTab === "Reviews" ? " active" : ""
                  }`}
                  onClick={() => handleTabClick("Reviews")}
                >
                  {words[lang].reviews}
                </button>
                <div
                  className={`product-down-rec${
                    activeTab === "Reviews" ? " active" : ""
                  }`}
                  data-tab="Reviews"
                ></div>
              </div>
            </div>

            <div className="product-down-content">
              {activeTab === "Descriptions" && <Descriptions />}
              {activeTab === "Additional" && <Additional />}
              {activeTab === "Reviews" && <Reviews />}
            </div>
            <div className="product-down-text-rectangle"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

const t = (a) => a;
export default connect(t)(Product_details);
