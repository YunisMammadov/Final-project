import "./Saved_cards.css";
import { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function Saved_cards({ words, lang }) {
  const [payments, setPayments] = useState(
    JSON.parse(localStorage.getItem("payments")) || []
  );

  const deleteHandler = (index) => {
    let deleteCards = payments.filter((item, i) => i !== index);
    setPayments(deleteCards);
    let items = [...deleteCards];
    localStorage.setItem("payments", JSON.stringify(items));
  };
  return (
    <>
      <div className="profile-down-right">
        <div className="profile-saved-cards">
          <button className="saved-btn">
            <NavLink to="/Payment_method">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.25 1C8.25 0.585786 7.91421 0.25 7.5 0.25C7.08579 0.25 6.75 0.585786 6.75 1V6.25H1.5C1.08579 6.25 0.75 6.58579 0.75 7C0.75 7.41421 1.08579 7.75 1.5 7.75H6.75V13C6.75 13.4142 7.08579 13.75 7.5 13.75C7.91421 13.75 8.25 13.4142 8.25 13V7.75H13.5C13.9142 7.75 14.25 7.41421 14.25 7C14.25 6.58579 13.9142 6.25 13.5 6.25H8.25V1Z"
                  fill="white"
                />
              </svg>
              <span>{words[lang].addcard}</span>
            </NavLink>
          </button>
          <div className="saved-cards">
            {payments.map((card, index) => (
              <>
                <div className="saved-card" key={index}>
                  <div className="saved-card-info">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="62"
                      height="62"
                      viewBox="0 0 62 62"
                      fill="none"
                    >
                      <rect
                        width="62"
                        height="62"
                        rx="8"
                        fill="#A4A1AA"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M50.069 31.5C50.069 37.8569 44.8079 43 38.3052 43C35.5603 43 33.0442 42.0736 31.0508 40.5402C33.7957 38.4319 35.5276 35.1736 35.5276 31.5C35.5276 27.8264 33.7631 24.568 31.0508 22.4597C33.0442 20.9264 35.5603 20 38.3052 20C44.8079 20 50.069 25.175 50.069 31.5Z"
                        fill="#F79E1B"
                      />
                      <path
                        d="M31.0508 22.4597C31.0508 22.4597 31.0508 22.4597 31.0508 22.4597C33.7631 24.568 35.5276 27.8264 35.5276 31.5C35.5276 35.1736 33.7957 38.4319 31.0508 40.5402L31.018 40.5402C28.3059 38.4639 26.5414 35.1736 26.5414 31.5C26.5414 27.8264 28.3059 24.5681 31.0181 22.4598C31.0181 22.4598 31.0182 22.4598 31.0181 22.4598L31.0508 22.4597Z"
                        fill="#FF5F00"
                      />
                      <path
                        d="M26.5414 31.5C26.5414 27.8264 28.3059 24.5681 31.0181 22.4598C29.0248 20.9265 26.5087 20 23.7638 20C17.261 20 12 25.1431 12 31.5C12 37.857 17.261 43 23.7638 43C26.5087 43 29.0247 42.0736 31.018 40.5402C28.3059 38.4639 26.5414 35.1736 26.5414 31.5Z"
                        fill="#EB001B"
                      />
                    </svg>
                    <div className="saved-card-text">
                      <h1>
                        {card.name.charAt(0).toUpperCase() + card.name.slice(1)}
                      </h1>
                      <p>({card.num})</p>
                    </div>
                  </div>
                  <button
                    className="saved-del-btn"
                    onClick={() => {
                      deleteHandler(index);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M4.66667 6.66699V15.0003C4.66667 16.8413 6.15905 18.3337 8 18.3337H13C14.8409 18.3337 16.3333 16.8413 16.3333 15.0003V6.66699M12.1667 9.16699V14.167M8.83333 9.16699L8.83333 14.167M13.8333 4.16699L12.6614 2.40916C12.3523 1.94549 11.8319 1.66699 11.2747 1.66699H9.72531C9.16805 1.66699 8.64767 1.94549 8.33856 2.40916L7.16667 4.16699M13.8333 4.16699H7.16667M13.8333 4.16699H18M7.16667 4.16699H3"
                        stroke="#FF7262"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>{words[lang].del}</span>
                  </button>
                </div>
                <div className="saved-card-rect"></div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const t = (a) => a;
export default connect(t)(Saved_cards);
