import "./Checkout.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Checkout({ cartItems, totalAmount, dispatch }) {
  const [discountCode, setDiscountCode] = useState("");
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const applyDiscount = () => {
    if (isDiscountApplied) {
      alert("Discount code has already been used.");
      return;
    }
    if (discountCode === "Discount") {
      const discountAmount = totalAmount * 0.1;
      setAppliedDiscount(discountAmount);
      setIsDiscountApplied(true);
      localStorage.setItem("discountCode", "Discount");
    } else {
      alert("Geçersiz indirim kodu.");
    }
  };
  useEffect(() => {
    const storedDiscountCode = localStorage.getItem("discountCode");
    if (storedDiscountCode === "Discount") {
      setIsDiscountApplied(true);
      setAppliedDiscount(totalAmount * 0.1);
    }
  }, []);
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
              {cartItems ? (
                cartItems.map((item) => (
                  <div key={item} className="checkout-row1">
                    <div className="checkout-row-info">
                      <div className="checkout-row-left">
                        <div className="checkout-img">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="checkout-info">
                          <h1>{item.title}</h1>
                          <p>Size: {item.size}</p>
                        </div>
                      </div>
                      <div className="checkout-row-right">
                        <p>{item.price}</p>
                        <div className="checkout-dec-inc">
                          <div
                            className="checkout-dec"
                            onClick={() =>
                              dispatch({
                                type: "BASKETITEMDEC",
                                payload: {
                                  size: item.size,
                                  amount: item.amount - 1,
                                },
                              })
                            }
                          >
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
                            <p>{item.amount}</p>
                          </div>
                          <div
                            className="checkout-inc"
                            onClick={() =>
                              dispatch({
                                type: "BASKETITEMINC",
                                payload: {
                                  size: item.size,
                                  amount: item.amount + 1,
                                },
                              })
                            }
                          >
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
                        <p>{item.subtotal}</p>
                        <button
                          className="checkout-del-btn"
                          onClick={() =>
                            dispatch({
                              type: "BASKETDELETE",
                              payload: item.size,
                            })
                          }
                        >
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
                ))
              ) : (
                <span></span>
              )}
            </div>
            <div className="subtotal-right">
              <div className="subtotal-total">
                <p>Subtotal</p>
                <p>${totalAmount}</p>
              </div>
              <div className="subtotal-rect1"></div>
              <div className="subtotal-input">
                <p>Enter Discount Code</p>
                <div className="subtotal-apply">
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                  />
                  <button onClick={applyDiscount}>Apply</button>
                </div>
              </div>
              <div className="subtotal-delivery">
                <p>Delivery Charge</p>
                <p>$5</p>
              </div>
              <div className="subtotal-rect1"></div>
              <div className="subtotal-total">
                <p>Grand Total</p>
                <p>${totalAmount + 5 - appliedDiscount}</p>
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

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
  totalAmount: state.totalAmount,
});
export default connect(mapStateToProps)(Checkout);

// const t = (a) => a;
// export default connect(t)(Checkout);
