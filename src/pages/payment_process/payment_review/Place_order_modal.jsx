import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "./Payment_review.css";
function Place_order_modal({ words, lang }) {
  return (
    <section className="place_order-modal">
      <div className="place_order-confirm">
        <div className="place_order-rectangle">
          <div className="place_order-ellipse">
            <svg
              width="108"
              height="108"
              viewBox="0 0 108 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                id="Ellipse19"
                cx="54"
                cy="54"
                r="54"
                fill="#131118"
                fill-opacity="0.05"
              />
            </svg>
            <svg
              width="86"
              height="86"
              viewBox="0 0 86 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                id="Ellipse18"
                cx="43"
                cy="43"
                r="43"
                fill="#131118"
                fill-opacity="0.1"
              />
            </svg>
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle id="Ellipse17" cx="32" cy="32" r="32" fill="#131118" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.6113 3H8.38836C6.433 3 4.76424 4.41365 4.44278 6.3424L2.77612 16.3424C2.36976 18.7805 4.24994 21 6.72169 21H17.278C19.7498 21 21.6299 18.7805 21.2236 16.3424L19.5569 6.3424C19.2355 4.41365 17.5667 3 15.6113 3Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="place_order-text">
          <div className="place_order-txt">
            <h1>{words[lang].yourorder}</h1>
            <h2>{words[lang].thanksshop}</h2>
          </div>
          <div className="place_order-buttons">
            <NavLink to="/my_profile" className="view-order-btn">
              {words[lang].vieworder}
            </NavLink>
            <NavLink to="/" className="back-home-btn">
              {words[lang].backhome}
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

const t = (a) => a;
export default connect(t)(Place_order_modal);
