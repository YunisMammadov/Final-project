import React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

function Reviews({ words, lang }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
  });

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const storedReviews = localStorage.getItem("reviews");
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name: formData.name,
      email: formData.email,
      review: formData.review,
      starRating: currentValue,
      date: new Date().toLocaleDateString(),
    };
    setReviews([...reviews, newReview]);
    setFormData({
      name: "",
      email: "",
      review: "",
    });
  };

  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const handleLeave = () => {
    setHoverValue(undefined);
  };
  const handleCurrent = (index) => {
    setCurrentValue(index);
  };
  const handleHover = (index) => {
    setHoverValue(index);
  };
  const emptyCurrent = () => {
    setCurrentValue(0);
  };
  return (
    <div className="product-down-text">
      <div className="product-text-up">
        <div className="product-text-up-title">
          <p>{words[lang].customerrev}</p>
        </div>
        <div className="product-text-up-reviews">
          {reviews.map((review, index) => (
            <div key={index} className="product-text-up-review">
              <div className="product-text-up-review-per">
                <div className="product-up-rev-per-img">
                  <img src="/menbanner.png" alt="" />
                </div>
                <div className="product-up-rev-txt">
                  <p>{review.name}</p>
                  {Array(review.starRating)
                    .fill(0)
                    .map((_, starIndex) => (
                      <FaStar key={starIndex} color="orange" />
                    ))}
                </div>
              </div>
              <div className="product-text-up-review-txt">
                <h2>{review.review}</h2>
                <h3>
                  Review by <span>{review.email}</span> Posted on
                  <span>{review.date}</span>
                </h3>
              </div>
            </div>
          ))}
          <div className="product-text-up-rect"></div>
        </div>
      </div>
      <div className="product-text-down">
        <div className="product-text-down-title">
          <p>{words[lang].addrev}</p>
        </div>
        <form className="product-review" onSubmit={handleSubmit}>
          <div className="prod-review-name">
            <p>{words[lang].yourrate}</p>
            <div className="prod-review-stars">
              {stars.map((_, index) => {
                return (
                  <FaStar
                    onMouseOver={() => handleHover(index + 1)}
                    onClick={() => handleCurrent(index + 1)}
                    onDoubleClick={emptyCurrent}
                    onMouseLeave={handleLeave}
                    color={
                      hoverValue > index || currentValue > index
                        ? "orange"
                        : "gray"
                    }
                  />
                );
              })}
              <div className="prod-review-star-rect"></div>
            </div>
          </div>
          <div className="prod-review-inputs">
            <div className="prod-review-input-name">
              <span>{words[lang].name}</span>
              <input
                type="text"
                name="name"
                placeholder={words[lang].entername}
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="prod-review-input-name">
              <span>{words[lang].emailaddress}</span>
              <input
                type="email"
                name="email"
                placeholder={words[lang].enteremail}
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="prod-review-input-name">
              <span>{words[lang].yourrev}</span>
              <input
                type="text"
                name="review"
                placeholder={words[lang].addrev}
                value={formData.review}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button>{words[lang].submit}</button>
        </form>
      </div>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(Reviews);
