import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Payment_method.css";
function Payment_method({ totalAmount, words, lang }) {
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
  const activeSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <g clip-path="url(#clip0_3250_3172)">
        <path
          d="M12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM12 20.5C7.58 20.5 4 16.92 4 12.5C4 8.08 7.58 4.5 12 4.5C16.42 4.5 20 8.08 20 12.5C20 16.92 16.42 20.5 12 20.5Z"
          fill="#131118"
        />
        <path
          d="M12 17.5C14.7614 17.5 17 15.2614 17 12.5C17 9.73858 14.7614 7.5 12 7.5C9.23858 7.5 7 9.73858 7 12.5C7 15.2614 9.23858 17.5 12 17.5Z"
          fill="#131118"
        />
      </g>
      <defs>
        <clipPath id="clip0_3250_3172">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  const inactiveSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <g clip-path="url(#clip0_3250_3185)">
        <path
          d="M12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM12 20.5C7.58 20.5 4 16.92 4 12.5C4 8.08 7.58 4.5 12 4.5C16.42 4.5 20 8.08 20 12.5C20 16.92 16.42 20.5 12 20.5Z"
          fill="#131118"
          fill-opacity="0.1"
        />
      </g>
      <defs>
        <clipPath id="clip0_3250_3185">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  const [activeAccordion, setActiveAccordion] = useState(0);
  const handleAccordionClick = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };
  useEffect(() => {
    setActiveAccordion(0);
  }, []);
  return (
    <>
      <div className="container">
        <div className="payment_method">
          <div className="payment_method-name">
            <p>{words[lang].payment}</p>
          </div>
          <div className="payment_methods">
            <div className="payment_method-left">
              <div className="payment_method-up">
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
                  <p>{words[lang].address}</p>
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
                  <p>{words[lang].payment}</p>
                </div>
                <div className="process-rect"></div>
                <div className="payment-review">
                  <div className="payment-review-rect">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M3.33331 5.66699C3.33331 3.45785 5.12417 1.66699 7.33331 1.66699H12.5098C13.5707 1.66699 14.5881 2.08842 15.3382 2.83857L17.1617 4.66209C17.9119 5.41223 18.3333 6.42965 18.3333 7.49051V14.3337C18.3333 16.5428 16.5425 18.3337 14.3333 18.3337H7.33331C5.12417 18.3337 3.33331 16.5428 3.33331 14.3337V5.66699Z"
                        stroke="#131118"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 5.83301L14.1667 5.83301"
                        stroke="#131118"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M7.5 10H14.1667"
                        stroke="#131118"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M7.5 14.167H10.8333"
                        stroke="#131118"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <p>{words[lang].reviews}</p>
                </div>
              </div>
              <div className="payment_method-down">
                <div className="select-payment-method">
                  <p>{words[lang].selpayment}</p>
                </div>
                <form className="payment-form">
                  <div
                    className={`debit-card accordion-item ${
                      activeAccordion === 0 ? "active" : ""
                    }`}
                  >
                    <div
                      className={`payment-form-title ${
                        activeAccordion === 0 ? "active" : ""
                      }`}
                      onClick={() => handleAccordionClick(0)}
                    >
                      {activeAccordion === 0 ? activeSVG : inactiveSVG}
                      <span>{words[lang].debit}</span>
                    </div>
                    <div class="accordion-content">
                      <div className="payment-form-input">
                        <p>{words[lang].cardnum}</p>
                        <input type="tel" placeholder="XXXX XXXX XXXX XXXX" />
                      </div>
                      <div className="payment-form-input">
                        <p>{words[lang].cardname}</p>
                        <input
                          type="text"
                          placeholder={words[lang].entercardname}
                        />
                      </div>
                      <div className="payment-form-input-big">
                        <div className="payment-form-input-lit">
                          <p>{words[lang].expiredate}</p>
                          <input type="tel" placeholder="XX/XX" />
                        </div>
                        <div className="payment-form-input-lit">
                          <p>CVV</p>
                          <input type="tel" placeholder="XXX" />
                        </div>
                      </div>
                      <button className="add-card-btn">
                        {words[lang].addcard}
                      </button>
                    </div>
                  </div>
                  <div
                    className={`google-pay accordion-item ${
                      activeAccordion === 1 ? "active" : ""
                    }`}
                  >
                    <div className="add-card-rect"></div>

                    <div
                      className={`payment-form-title ${
                        activeAccordion === 1 ? "active" : ""
                      }`}
                      onClick={() => handleAccordionClick(1)}
                    >
                      {activeAccordion === 1 ? activeSVG : inactiveSVG}
                      <span>Google Pay</span>
                    </div>
                    <div class="accordion-content">
                      <div className="payment-form-input">
                        <p>{words[lang].cardnum}</p>
                        <input type="tel" placeholder="XXXX XXXX XXXX XXXX" />
                      </div>
                      <div className="payment-form-input">
                        <p>{words[lang].cardname}</p>
                        <input
                          type="text"
                          placeholder={words[lang].entercardname}
                        />
                      </div>
                      <div className="payment-form-input-big">
                        <div className="payment-form-input-lit">
                          <p>{words[lang].expiredate}</p>
                          <input type="tel" placeholder="XX/XX" />
                        </div>
                        <div className="payment-form-input-lit">
                          <p>CVV</p>
                          <input type="tel" placeholder="XXX" />
                        </div>
                      </div>
                      <button className="add-card-btn">
                        {words[lang].addcard}
                      </button>
                    </div>
                  </div>
                  <div
                    className={`paypal accordion-item ${
                      activeAccordion === 2 ? "active" : ""
                    }`}
                  >
                    <div className="add-card-rect"></div>

                    <div
                      className="payment-form-title"
                      onClick={() => handleAccordionClick(2)}
                    >
                      {activeAccordion === 2 ? activeSVG : inactiveSVG}

                      <span>Paypal</span>
                    </div>
                    <div class="accordion-content">
                      <div className="payment-form-input">
                        <p>{words[lang].cardnum}</p>
                        <input type="tel" placeholder="XXXX XXXX XXXX XXXX" />
                      </div>
                      <div className="payment-form-input">
                        <p>{words[lang].cardname}</p>
                        <input
                          type="text"
                          placeholder={words[lang].entercardname}
                        />
                      </div>
                      <div className="payment-form-input-big">
                        <div className="payment-form-input-lit">
                          <p>{words[lang].expiredate}</p>
                          <input type="tel" placeholder="XX/XX" />
                        </div>
                        <div className="payment-form-input-lit">
                          <p>CVV</p>
                          <input type="tel" placeholder="XXX" />
                        </div>
                      </div>
                      <button className="add-card-btn">
                        {words[lang].addcard}
                      </button>
                    </div>
                  </div>
                  <div
                    className={`cash-on-delivery accordion-item ${
                      activeAccordion === 3 ? "active" : ""
                    }`}
                  >
                    <div className="add-card-rect"></div>

                    <div
                      className="payment-form-title"
                      onClick={() => handleAccordionClick(3)}
                    >
                      {activeAccordion === 3 ? activeSVG : inactiveSVG}
                      <span>{words[lang].cash}</span>
                    </div>
                    <div class="accordion-content">
                      <div className="payment-form-input">
                        <p>{words[lang].cardnum}</p>
                        <input type="tel" placeholder="XXXX XXXX XXXX XXXX" />
                      </div>
                      <div className="payment-form-input">
                        <p>{words[lang].cardname}</p>
                        <input
                          type="text"
                          placeholder={words[lang].entercardname}
                        />
                      </div>
                      <div className="payment-form-input-big">
                        <div className="payment-form-input-lit">
                          <p>{words[lang].expiredate}</p>
                          <input type="tel" placeholder="XX/XX" />
                        </div>
                        <div className="payment-form-input-lit">
                          <p>CVV</p>
                          <input type="tel" placeholder="XXX" />
                        </div>
                      </div>
                      <button className="add-card-btn">
                        {words[lang].addcard}
                      </button>
                    </div>
                  </div>

                  <button className="continue-btn">
                    <NavLink to="/payment_review">
                      {words[lang].continue}
                    </NavLink>
                  </button>
                </form>
              </div>
            </div>
            <div className="subtotal-right1">
              <div className="subtotal-total">
                <p>{words[lang].subtotal}</p>
                <p>${totalAmount}</p>
              </div>
              <div className="subtotal-rect1"></div>
              <div className="subtotal-input">
                <p>{words[lang].discount}</p>
                <div className="subtotal-apply">
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                  />
                  <button onClick={applyDiscount}>{words[lang].apply}</button>
                </div>
              </div>
              <div className="subtotal-delivery">
                <p>{words[lang].delcharge}</p>
                <p>$5</p>
              </div>
              <div className="subtotal-rect1"></div>
              <div className="subtotal-total">
                <p>{words[lang].grandtotal}</p>
                <p>${totalAmount + 5 - appliedDiscount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const t = (a) => a;
export default connect(t)(Payment_method);
