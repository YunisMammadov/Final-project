import { useState } from "react";
import Descriptions from "./Descriptions";
import Additional from "./Additional";
import Reviews from "./Reviews";
function Product_details() {
  const [activeTab, setActiveTab] = useState("Descriptions");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <section className="products">
      <div className="container">
        <div className="product">
          <div className="product-detail-up">
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
            <p>Women Textured Handheld Bag</p>
          </div>
          <div className="product-detail-center">
            <div className="product-center-left">
              <div className="product-cen-big-rec">
                <img
                  src="https://s3-alpha-sig.figma.com/img/5576/3d45/9184a253721acd1b282d80cd874bd19b?Expires=1693785600&Signature=XAEFyESGOAsGtJbtizX~BUCS2Hqmcz5UKXeiwaUUOiq7BhjFrimycfDG3AbTCiEYyNCXqyMeSegvPB~bb-MHxwiZSVuCYpK18HTBYyb19axwyqMJ1JFn0JX3NQIKjXnurWmf5CIFinL5YemuiD~YKYOp3jlW1buoTXRwQHCMl4G~YqURn3uPvmkIRrQ7R23-aeXL2obyKOSwl0hUIYKtoKwdv30ebIr3BEQoTFyBn3OlMQAM~j9lcoCEdPxbgEdcMvxZBdsytdIHd9F13C-ebJ6suD-L6SL1p4vWJY3qmXuXulh283gndUilHYCM4WJcfBCZPrFnJuwCkgrls6e~BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>

              <div className="product-cen-lit-recs">
                <div className="product-cen-lit-rec">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/5576/3d45/9184a253721acd1b282d80cd874bd19b?Expires=1693785600&Signature=XAEFyESGOAsGtJbtizX~BUCS2Hqmcz5UKXeiwaUUOiq7BhjFrimycfDG3AbTCiEYyNCXqyMeSegvPB~bb-MHxwiZSVuCYpK18HTBYyb19axwyqMJ1JFn0JX3NQIKjXnurWmf5CIFinL5YemuiD~YKYOp3jlW1buoTXRwQHCMl4G~YqURn3uPvmkIRrQ7R23-aeXL2obyKOSwl0hUIYKtoKwdv30ebIr3BEQoTFyBn3OlMQAM~j9lcoCEdPxbgEdcMvxZBdsytdIHd9F13C-ebJ6suD-L6SL1p4vWJY3qmXuXulh283gndUilHYCM4WJcfBCZPrFnJuwCkgrls6e~BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div className="product-cen-lit-rec">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/5576/3d45/9184a253721acd1b282d80cd874bd19b?Expires=1693785600&Signature=XAEFyESGOAsGtJbtizX~BUCS2Hqmcz5UKXeiwaUUOiq7BhjFrimycfDG3AbTCiEYyNCXqyMeSegvPB~bb-MHxwiZSVuCYpK18HTBYyb19axwyqMJ1JFn0JX3NQIKjXnurWmf5CIFinL5YemuiD~YKYOp3jlW1buoTXRwQHCMl4G~YqURn3uPvmkIRrQ7R23-aeXL2obyKOSwl0hUIYKtoKwdv30ebIr3BEQoTFyBn3OlMQAM~j9lcoCEdPxbgEdcMvxZBdsytdIHd9F13C-ebJ6suD-L6SL1p4vWJY3qmXuXulh283gndUilHYCM4WJcfBCZPrFnJuwCkgrls6e~BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div className="product-cen-lit-rec">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/5576/3d45/9184a253721acd1b282d80cd874bd19b?Expires=1693785600&Signature=XAEFyESGOAsGtJbtizX~BUCS2Hqmcz5UKXeiwaUUOiq7BhjFrimycfDG3AbTCiEYyNCXqyMeSegvPB~bb-MHxwiZSVuCYpK18HTBYyb19axwyqMJ1JFn0JX3NQIKjXnurWmf5CIFinL5YemuiD~YKYOp3jlW1buoTXRwQHCMl4G~YqURn3uPvmkIRrQ7R23-aeXL2obyKOSwl0hUIYKtoKwdv30ebIr3BEQoTFyBn3OlMQAM~j9lcoCEdPxbgEdcMvxZBdsytdIHd9F13C-ebJ6suD-L6SL1p4vWJY3qmXuXulh283gndUilHYCM4WJcfBCZPrFnJuwCkgrls6e~BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div className="product-cen-lit-rec">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/5576/3d45/9184a253721acd1b282d80cd874bd19b?Expires=1693785600&Signature=XAEFyESGOAsGtJbtizX~BUCS2Hqmcz5UKXeiwaUUOiq7BhjFrimycfDG3AbTCiEYyNCXqyMeSegvPB~bb-MHxwiZSVuCYpK18HTBYyb19axwyqMJ1JFn0JX3NQIKjXnurWmf5CIFinL5YemuiD~YKYOp3jlW1buoTXRwQHCMl4G~YqURn3uPvmkIRrQ7R23-aeXL2obyKOSwl0hUIYKtoKwdv30ebIr3BEQoTFyBn3OlMQAM~j9lcoCEdPxbgEdcMvxZBdsytdIHd9F13C-ebJ6suD-L6SL1p4vWJY3qmXuXulh283gndUilHYCM4WJcfBCZPrFnJuwCkgrls6e~BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="product-center-right">
              <div className="product-right-text">
                <p>YK Disney</p>
                <span>Girls Pink Moana Printed Dress</span>
              </div>
              <div className="product-right-stars">
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
              </div>
              <div className="product-right-price">
                <div className="product-right-newprice">$80.00</div>
                <div className="product-right-oldprice">$100.00</div>
              </div>
              <div className="product-right-txt">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
                </p>
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
              <div className="product-right-size">
                <p>Size</p>
                <div className="product-right-checkboxes">
                  <div className="product-center-rects">S</div>
                  <div className="product-center-rects">M</div>
                  <div className="product-center-rects">L</div>
                  <div className="product-center-rects">XL</div>
                  <div className="product-center-rects">XXL</div>
                </div>
              </div>
              <div className="product-add-cart">
                <div className="product-dec-inc">
                  <div className="product-dec">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="2"
                      viewBox="0 0 14 2"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.75 1C13.75 1.41421 13.4142 1.75 13 1.75L1 1.75C0.585786 1.75 0.25 1.41421 0.25 1C0.25 0.585786 0.585786 0.25 1 0.25L13 0.25C13.4142 0.25 13.75 0.585786 13.75 1Z"
                        fill="#131118"
                      />
                    </svg>
                  </div>
                  <div className="product-cart-count">
                    <p>1</p>
                  </div>
                  <div className="product-inc">
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
                        fill="#131118"
                      />
                    </svg>
                  </div>
                </div>
                <button>Add to Cart</button>
                <div className="product-add-heart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.765 4.70229L12 5.52422L11.235 4.70229C9.12233 2.43257 5.69709 2.43257 3.58447 4.70229C1.47184 6.972 1.47184 10.6519 3.58447 12.9217L10.4699 20.3191C11.315 21.227 12.685 21.227 13.5301 20.3191L20.4155 12.9217C22.5282 10.6519 22.5282 6.972 20.4155 4.70229C18.3029 2.43257 14.8777 2.43257 12.765 4.70229Z"
                      stroke="#131118"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
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
                  Descriptions
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
                  Additional
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
                  Reviews
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
export default Product_details;
