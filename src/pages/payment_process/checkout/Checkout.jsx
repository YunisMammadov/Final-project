import "./Checkout.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Checkout() {
  const [addressVisible, setAddressVisible] = useState(true);

  const handleDeleteClick = () => {
    setAddressVisible(false);
  };
  return (
    <>
      <div className="container">
        <div className="checkout">
          <div className="checkout-up">
            <p>Checkout</p>
          </div>
          <div className="checkout-down">
            <div className="checkout-down-left">
              <div className="checkout-row">
                <div className="checkout-row-info">
                  <div className="checkout-row-left">
                    <p>Products</p>
                  </div>
                  <div className="checkout-row-right">
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                  </div>
                </div>
                <div className="checkout-rect"></div>
              </div>
              <div className="checkout-row1">
                <div className="checkout-row-info">
                  <div className="checkout-row-left">
                    <div className="checkout-img">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/5576/3d45/9184a253721acd1b282d80cd874bd19b?Expires=1696204800&Signature=UQ5eomleNvpUUSpQS86uDad~u8vuI2lMK3UmMNd2HGHrDm-LwoHSHnpwdF0pWECGqHV0ObidoR8tVgt6oPBcocqVcH9VHJ5AyiN2fQbTbnC7m26jLNo2uxt6EI9apCNtZsqZhtus0zKa68zyKUXOb34VzKeiVeM77gdYnw0HVzxFDaPMX9pmPoz3kIXLl6S1pIjk0LRAbMgstkiivTsDoP9GsfIFZtFx1net-wUjmRr2oY1znxHRZO2LVMNfuU6rjZdjzrjSp2~b1akf4ZliTim5z4Na60zrm1NGW1y5zogBwcupGqkRLjNDBTGKr5S-rZ1y~-pYdg~XimIJ-YFHxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt=""
                      />
                    </div>
                    <div className="checkout-info">
                      <h1>Girls Pink Moana Printed Dress</h1>
                      <p>Size: S</p>
                    </div>
                  </div>
                  <div className="checkout-row-right">
                    <p>$80.00</p>
                    <div className="checkout-dec-inc">
                      <div className="checkout-dec">
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
                      <div className="checkout-cart-count">
                        <p>1</p>
                      </div>
                      <div className="checkout-inc">
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
                    <p>$80.00</p>
                    <button className="checkout-del-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 6.66699V15.0003C4.16667 16.8413 5.65905 18.3337 7.5 18.3337H12.5C14.3409 18.3337 15.8333 16.8413 15.8333 15.0003V6.66699M11.6667 9.16699V14.167M8.33333 9.16699L8.33333 14.167M13.3333 4.16699L12.1614 2.40916C11.8523 1.94549 11.3319 1.66699 10.7747 1.66699H9.22531C8.66805 1.66699 8.14767 1.94549 7.83856 2.40916L6.66667 4.16699M13.3333 4.16699H6.66667M13.3333 4.16699H17.5M6.66667 4.16699H2.5"
                          stroke="#FF7262"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="checkout-rect"></div>
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
              <button className="proceed-btn">
                <NavLink to="/shippingaddress">Proceed to Checkout</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
