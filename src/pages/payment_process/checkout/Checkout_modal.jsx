import { NavLink } from "react-router-dom";
import "./Checkout.css";
import { connect } from "react-redux";

function Checkout_modal({
  cartItems,
  totalAmount,
  open,
  close,
  dispatch,
  words,
  lang,
}) {
  return (
    <div onClick={close} className={`checkout_modal ${open ? "active" : ""}`}>
      <div onClick={(e) => e.stopPropagation()} className="minicart">
        <div className="minicart-up">
          <p>
            {words[lang].youhave} {cartItems.length} {words[lang].itemcart}
          </p>
        </div>
        <div className="minicart-down">
          <div className="minicart-products">
            {cartItems ? (
              cartItems.map((item) => (
                <div key={item.id} className="minicart-product">
                  <div className="minicart1">
                    <div className="minicart-product-img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="minicart-product-details">
                      <p>{item.title}</p>
                      <h1>
                        {item.amount} x ${item.price}
                      </h1>
                      <div className="minicart-product-det">
                        <span>
                          {words[lang].size}: {item.size}{" "}
                        </span>
                        <button
                          id="check-modal-del-btn"
                          onClick={() => {
                            dispatch({
                              type: "BASKETDELETE",
                              payload: item.size,
                            });
                          }}
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
                  </div>

                  <div className="minicart-rect"></div>
                </div>
              ))
            ) : (
              <span></span>
            )}
          </div>
          <div className="minicart-subtotal">
            <p>{words[lang].subtotal}</p>
            <p>{totalAmount}</p>
          </div>
          <div className="minicart-buttons">
            <NavLink to="/checkout" className="checkout-btn">
              {words[lang].checkout}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(Checkout_modal);
