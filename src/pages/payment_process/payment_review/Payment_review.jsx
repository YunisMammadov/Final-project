import "./Payment_review.css";
import { useState } from "react";
import Place_order_modal from "./Place_order_modal";
function Payment_review() {
  const [open, setOpen] = useState(false);
  const handleAddNewAddressClick = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="container">
        <div className="payment_review">
          <div className="payment_review-name">
            <p>Review Your Order</p>
          </div>
          <div className="payment_reviews">
            <div className="payment_review-left">
              <div className="payment_review-up">
                <div className="payment-address">
                  <div className="payment-address-rect">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M13.3333 18.3337V15.0003C13.3333 13.1594 11.8409 11.667 10 11.667C8.15905 11.667 6.66667 13.1594 6.66667 15.0003V18.3337M17.5 8.45894V14.9727C17.5 16.8289 16.0076 18.3337 14.1667 18.3337H5.83333C3.99238 18.3337 2.5 16.8289 2.5 14.9727V8.45894C2.5 7.4498 2.9497 6.49407 3.72488 5.85576L7.89155 2.42478C9.11859 1.4144 10.8814 1.41439 12.1084 2.42478L16.2751 5.85576C17.0503 6.49407 17.5 7.4498 17.5 8.45894Z"
                        stroke="white"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                  <p>Address</p>
                </div>
                <div className="process-rect1"></div>
                <div className="payment-method">
                  <div className="payment-method1-rect">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M1.66675 5.83333C1.66675 3.99238 3.15913 2.5 5.00008 2.5H15.0001C16.841 2.5 18.3334 3.99238 18.3334 5.83333V14.1667C18.3334 16.0076 16.841 17.5 15.0001 17.5H5.00008C3.15913 17.5 1.66675 16.0076 1.66675 14.1667V5.83333Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.66675 5.83301H18.3334V9.16634H1.66675V5.83301Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.66667 14.167H5"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <p>Payment Method</p>
                </div>
                <div className="process-rect3"></div>
                <div className="payment-review">
                  <div className="payment-review1-rect">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M3.33325 5.66699C3.33325 3.45785 5.12411 1.66699 7.33325 1.66699H12.5097C13.5706 1.66699 14.588 2.08842 15.3382 2.83857L17.1617 4.66209C17.9118 5.41223 18.3333 6.42965 18.3333 7.49051V14.3337C18.3333 16.5428 16.5424 18.3337 14.3333 18.3337H7.33325C5.12411 18.3337 3.33325 16.5428 3.33325 14.3337V5.66699Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 5.83301L14.1667 5.83301"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M7.5 10H14.1667"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M7.5 14.167H10.8333"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <p>Review</p>
                </div>
              </div>
              <div className="payment_review-down">
                <div className="payment_review-details">
                  <div className="pay_rev-det-name">
                    <p>Estimated delivery: 22 Feb 2022</p>
                  </div>
                  <div className="pay_rev-det-products">
                    <div className="pay_rev-det-product">
                      <div className="pay-rev-card">
                        <div className="pay_rev-det-rect">
                          <img
                            src="https://s3-alpha-sig.figma.com/img/5576/3d45/9184a253721acd1b282d80cd874bd19b?Expires=1696204800&Signature=UQ5eomleNvpUUSpQS86uDad~u8vuI2lMK3UmMNd2HGHrDm-LwoHSHnpwdF0pWECGqHV0ObidoR8tVgt6oPBcocqVcH9VHJ5AyiN2fQbTbnC7m26jLNo2uxt6EI9apCNtZsqZhtus0zKa68zyKUXOb34VzKeiVeM77gdYnw0HVzxFDaPMX9pmPoz3kIXLl6S1pIjk0LRAbMgstkiivTsDoP9GsfIFZtFx1net-wUjmRr2oY1znxHRZO2LVMNfuU6rjZdjzrjSp2~b1akf4ZliTim5z4Na60zrm1NGW1y5zogBwcupGqkRLjNDBTGKr5S-rZ1y~-pYdg~XimIJ-YFHxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt=""
                          />
                        </div>
                        <div className="pay_rev-pro-details">
                          <p>Girls Pink Moana Printed Dress</p>
                          <span>$80.00</span>
                          <span>Size: S</span>
                        </div>
                      </div>
                      <div className="payment_review-rect"></div>
                    </div>
                  </div>
                </div>
                <div className="payment_review-shipping">
                  <div className="payment_review-shipping-name">
                    <p>Shipping Address</p>
                  </div>
                  <div className="payment_review-shipping-info">
                    <div className="payment_review-shipping-text">
                      <p>Robert Fox</p>
                      <span>
                        4517 Washington Ave. Manchester, Kentucky 39495
                      </span>
                    </div>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_642_2077)">
                          <path
                            d="M18.3334 10.0003V15.0003C18.3334 16.8413 16.841 18.3337 15.0001 18.3337H5.00008C3.15913 18.3337 1.66675 16.8413 1.66675 15.0003V5.00033C1.66675 3.15938 3.15913 1.66699 5.00008 1.66699H10.0001M13.072 3.35262C13.072 3.35262 13.072 4.54453 14.264 5.73644C15.4559 6.92836 16.6478 6.92836 16.6478 6.92836M7.62898 13.325L10.132 12.9674C10.493 12.9158 10.8276 12.7485 11.0855 12.4906L17.8397 5.73644C18.498 5.07817 18.498 4.01089 17.8397 3.35261L16.6478 2.1607C15.9895 1.50242 14.9222 1.50242 14.264 2.1607L7.50978 8.91488C7.25189 9.17277 7.0846 9.50736 7.03302 9.86841L6.67544 12.3714C6.59598 12.9277 7.07275 13.4044 7.62898 13.325Z"
                            stroke="#131118"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_642_2077">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                  <div className="payment_review-rect"></div>
                </div>
                <div className="payment_review-pay-met">
                  <div className="payment_review-pay-met-name">
                    <p>Payment Method</p>
                  </div>
                  <div className="payment_review-pay-met-info">
                    <div className="payment_review-pay-met-text">
                      <p>Debit Card (.... .... .... ..89)</p>
                    </div>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_642_2077)">
                          <path
                            d="M18.3334 10.0003V15.0003C18.3334 16.8413 16.841 18.3337 15.0001 18.3337H5.00008C3.15913 18.3337 1.66675 16.8413 1.66675 15.0003V5.00033C1.66675 3.15938 3.15913 1.66699 5.00008 1.66699H10.0001M13.072 3.35262C13.072 3.35262 13.072 4.54453 14.264 5.73644C15.4559 6.92836 16.6478 6.92836 16.6478 6.92836M7.62898 13.325L10.132 12.9674C10.493 12.9158 10.8276 12.7485 11.0855 12.4906L17.8397 5.73644C18.498 5.07817 18.498 4.01089 17.8397 3.35261L16.6478 2.1607C15.9895 1.50242 14.9222 1.50242 14.264 2.1607L7.50978 8.91488C7.25189 9.17277 7.0846 9.50736 7.03302 9.86841L6.67544 12.3714C6.59598 12.9277 7.07275 13.4044 7.62898 13.325Z"
                            stroke="#131118"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_642_2077">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                  <div className="payment_review-rect"></div>
                </div>
              </div>
            </div>
            <div className="subtotal-right">
              <div className="subtotal-subtotal">
                <p>Subtotal</p>
                <p>$200.00</p>
              </div>
              <div className="subtotal-rect1"></div>
              <div className="subtotal-input">
                <p>Enter Discount Code</p>
                <div className="subtotal-apply">
                  <input type="text" />
                  <button>Apply</button>
                </div>
              </div>
              <div className="subtotal-delivery">
                <p>Delivery Charge</p>
                <p>$5.00</p>
              </div>
              <div className="subtotal-rect1"></div>
              <div className="subtotal-total">
                <p>Grand Total</p>
                <p>$205.00</p>
              </div>
              <button
                className="place-order-btn"
                onClick={handleAddNewAddressClick}
              >
                {open && <Place_order_modal />}
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment_review;
