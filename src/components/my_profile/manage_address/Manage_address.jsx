import { useState } from "react";
import "./Manage_address.css";
import Address_modal from "./Address_modal";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function Manage_address({ words, lang }) {
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );

  const deleteHandler = (index) => {
    let deleteCards = cards.filter((item, i) => i !== index);
    setCards(deleteCards);
    let items = [...deleteCards];
    localStorage.setItem("cards", JSON.stringify(items));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddNewAddressClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="profile-down-right">
      <div className="manage-address">
        <button className="address-btn" onClick={handleAddNewAddressClick}>
          {isModalOpen && <Address_modal onClose={handleCloseModal} />}
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
          <span>{words[lang].addaddress}</span>
        </button>
        <div className="address-cards">
          {cards.map((card, index) => (
            <>
              <div key={index} className="address-card">
                <div className="address-text">
                  <h1>{card.name}</h1>
                  <p>
                    {card.address} {card.address2} {card.city} {card.country}
                  </p>
                  <div className="address-tel">
                    <span>{card.number}</span>
                  </div>
                </div>

                <div className="address-buttons">
                  <button className="address-edit-btn">
                    <NavLink to="/shippingaddress">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_549_2237)">
                          <path
                            d="M18.3333 10.0003V15.0003C18.3333 16.8413 16.8409 18.3337 15 18.3337H4.99996C3.15901 18.3337 1.66663 16.8413 1.66663 15.0003V5.00033C1.66663 3.15938 3.15901 1.66699 4.99996 1.66699H9.99996M13.0719 3.35262C13.0719 3.35262 13.0719 4.54453 14.2638 5.73644C15.4558 6.92836 16.6477 6.92836 16.6477 6.92836M7.62885 13.325L10.1319 12.9674C10.4929 12.9158 10.8275 12.7485 11.0854 12.4906L17.8396 5.73644C18.4979 5.07817 18.4979 4.01089 17.8396 3.35261L16.6477 2.1607C15.9894 1.50242 14.9221 1.50242 14.2638 2.1607L7.50966 8.91488C7.25177 9.17277 7.08448 9.50736 7.0329 9.86841L6.67532 12.3714C6.59586 12.9277 7.07263 13.4044 7.62885 13.325Z"
                            stroke="#131118"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_549_2237">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>{words[lang].edit}</span>
                    </NavLink>
                  </button>
                  <button
                    className="address-delete-btn"
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
              </div>
              <div className="address-rect"></div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(Manage_address);
