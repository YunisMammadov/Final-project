import { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./My_orders.css";
function My_orders({ words, lang, cartItems , dispatch }) {
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <section id="myorder">
      <div className="profile-up-right">
        <div className="profile-up-right-inp">
          <input
            type="text"
            placeholder={words[lang].search}
            value={searchText}
            onChange={handleInputChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            style={{ display: searchText ? "none" : "block" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5ZM11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75Z"
              fill="#131118"
            />
          </svg>
        </div>
        <button>
          {words[lang].filter}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 6H10"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 12H12"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 12H21"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 6L21 6"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 18H20"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 18H6"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle cx="8" cy="18" r="2" stroke="white" stroke-width="1.5" />
            <circle cx="17" cy="12" r="2" stroke="white" stroke-width="1.5" />
            <circle cx="12" cy="6" r="2" stroke="white" stroke-width="1.5" />
          </svg>
        </button>
      </div>
      <div className="profile-down-right">
        <div className="profile-down-right-order">
          {cartItems ? (
            cartItems.map((item) => (
              <>
                <div key={item} className="my-order">
                  <div className="order-left">
                    <div className="order-left-up">
                      <div className="order-image">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="order-info">
                        <h3>{item.title}</h3>
                        <p>Size: S</p>
                        <p>{item.amount}</p>
                      </div>
                    </div>
                    <div className="order-left-bottom">
                      <button className="btn-inprocess">
                        {words[lang].inprocess}
                      </button>
                      <p>{words[lang].productprocess}</p>
                    </div>
                  </div>
                  <div className="order-right">
                    <div className="order-right-left">
                      <p>{item.amount * item.price} $</p>
                    </div>
                    <div className="order-right-right">
                      <button className="view-order">
                        <NavLink to="/payment_review">
                          {words[lang].vieworder}
                        </NavLink>
                      </button>
                      <button
                        onClick={() =>
                          dispatch({ type: "BASKETDELETE", payload: item.id })
                        }
                        className="cancel-order"
                      >
                        {words[lang].CancelOrder}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="my-order-rect"></div>
              </>
            ))
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </section>
  );
}

const t = (a) => a;
export default connect(t)(My_orders);
