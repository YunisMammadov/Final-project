import React from "react";
import Checkout_modal from "../../pages/payment_process/checkout/Checkout_modal";
import { useState } from "react";
import { connect } from "react-redux";

const AddToCard = ({ product, dispatch, words, lang }) => {
  const [amount, setAmount] = useState(1);
  const [open, setOpen] = useState(false);

  const handleCheckout = (e) => {
    e.preventDefault();
    setOpen(true);
    dispatch({
      type: "BASKET",
      payload: {
        amount: amount,
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.new_price,
      },
    });
  };
  const handleDecrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  return (
    <>
      <div className="product-dec-inc">
        <div className="product-dec" onClick={handleDecrease}>
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
          <p>{amount}</p>
        </div>
        <div className="product-inc" onClick={() => setAmount(amount + 1)}>
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
      <button type="submit" onClick={handleCheckout}>
        {words[lang].addtocart}
      </button>
      {open && <Checkout_modal open={open} close={() => setOpen(false)} />}
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
    </>
  );
};

const t = (a) => a;
export default connect(t)(AddToCard);
