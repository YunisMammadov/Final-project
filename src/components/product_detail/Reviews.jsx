import React from "react";
import { connect } from "react-redux";

function Reviews({ words, lang }) {
  return (
    <div className="product-down-text">
      <div className="product-text-up">
        <div className="product-text-up-title">
          <p>{words[lang].customerrev}</p>
        </div>
        <div className="product-text-up-reviews">
          <div className="product-text-up-review">
            <div className="product-text-up-review-per">
              <div className="product-up-rev-per-img">
                <img
                  src="https://s3-alpha-sig.figma.com/img/032f/0c1a/398acdb0683ffbc6b37f43a3baed25dc?Expires=1694995200&Signature=Z2tuiH1tDuoFpFWbJxl-JRwe9omrctkvOB-n2VdVSdqnVgDhb86R1Eg8uRHf99GtXyi9WIFEvfoD-4kCfFn7NXyX7ig67OMPbRWAHTowEThR8-Aq7rr2pJ8PCYirSXp1BpUykglF5LC7TGmd-sjXyJDHAkxu4VOM3unnz1bgWLi665dUS7gYiUzJtj4PsuAUn81Q8H-nOk1uw91Vqa-8IHc82ljn0ISaoOd78jmX8D7OV5jlf~zxQog7b36ajuKjBajMySjttMMupN4VYwfH5UXLbJNlrYsvKRvvTw9Xw8HDOdfiJf6bNtXAJP9lfOWmZ6~Fus7otM5kdro~h3kF1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>
              <div className="product-up-rev-txt">
                <p>Mark Williams</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M8.36051 3.22601C9.03109 1.81334 10.9686 1.81333 11.6392 3.22601L12.7981 5.66749C13.0644 6.22846 13.5791 6.61728 14.1745 6.70724L16.766 7.09875C18.2654 7.32528 18.8641 9.24112 17.7791 10.3407L15.9039 12.2412C15.4731 12.6778 15.2765 13.307 15.3782 13.9235L15.8208 16.607C16.077 18.1596 14.5095 19.3437 13.1684 18.6106L10.8505 17.3437C10.318 17.0526 9.68172 17.0526 9.14915 17.3437L6.83131 18.6106C5.49016 19.3437 3.92269 18.1596 4.17883 16.607L4.62149 13.9235C4.72321 13.307 4.5266 12.6778 4.09574 12.2412L2.22057 10.3407C1.13556 9.24113 1.73428 7.32528 3.23372 7.09875L5.82515 6.70724C6.42058 6.61728 6.93531 6.22846 7.20159 5.66749L8.36051 3.22601Z"
                    fill="#F59E0B"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M8.36051 3.22601C9.03109 1.81334 10.9686 1.81333 11.6392 3.22601L12.7981 5.66749C13.0644 6.22846 13.5791 6.61728 14.1745 6.70724L16.766 7.09875C18.2654 7.32528 18.8641 9.24112 17.7791 10.3407L15.9039 12.2412C15.4731 12.6778 15.2765 13.307 15.3782 13.9235L15.8208 16.607C16.077 18.1596 14.5095 19.3437 13.1684 18.6106L10.8505 17.3437C10.318 17.0526 9.68172 17.0526 9.14915 17.3437L6.83131 18.6106C5.49016 19.3437 3.92269 18.1596 4.17883 16.607L4.62149 13.9235C4.72321 13.307 4.5266 12.6778 4.09574 12.2412L2.22057 10.3407C1.13556 9.24113 1.73428 7.32528 3.23372 7.09875L5.82515 6.70724C6.42058 6.61728 6.93531 6.22846 7.20159 5.66749L8.36051 3.22601Z"
                    fill="#F59E0B"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M8.36051 3.22601C9.03109 1.81334 10.9686 1.81333 11.6392 3.22601L12.7981 5.66749C13.0644 6.22846 13.5791 6.61728 14.1745 6.70724L16.766 7.09875C18.2654 7.32528 18.8641 9.24112 17.7791 10.3407L15.9039 12.2412C15.4731 12.6778 15.2765 13.307 15.3782 13.9235L15.8208 16.607C16.077 18.1596 14.5095 19.3437 13.1684 18.6106L10.8505 17.3437C10.318 17.0526 9.68172 17.0526 9.14915 17.3437L6.83131 18.6106C5.49016 19.3437 3.92269 18.1596 4.17883 16.607L4.62149 13.9235C4.72321 13.307 4.5266 12.6778 4.09574 12.2412L2.22057 10.3407C1.13556 9.24113 1.73428 7.32528 3.23372 7.09875L5.82515 6.70724C6.42058 6.61728 6.93531 6.22846 7.20159 5.66749L8.36051 3.22601Z"
                    fill="#F59E0B"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M8.36051 3.22601C9.03109 1.81334 10.9686 1.81333 11.6392 3.22601L12.7981 5.66749C13.0644 6.22846 13.5791 6.61728 14.1745 6.70724L16.766 7.09875C18.2654 7.32528 18.8641 9.24112 17.7791 10.3407L15.9039 12.2412C15.4731 12.6778 15.2765 13.307 15.3782 13.9235L15.8208 16.607C16.077 18.1596 14.5095 19.3437 13.1684 18.6106L10.8505 17.3437C10.318 17.0526 9.68172 17.0526 9.14915 17.3437L6.83131 18.6106C5.49016 19.3437 3.92269 18.1596 4.17883 16.607L4.62149 13.9235C4.72321 13.307 4.5266 12.6778 4.09574 12.2412L2.22057 10.3407C1.13556 9.24113 1.73428 7.32528 3.23372 7.09875L5.82515 6.70724C6.42058 6.61728 6.93531 6.22846 7.20159 5.66749L8.36051 3.22601Z"
                    fill="#F59E0B"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M8.36051 3.22601C9.03109 1.81334 10.9686 1.81333 11.6392 3.22601L12.7981 5.66749C13.0644 6.22846 13.5791 6.61728 14.1745 6.70724L16.766 7.09875C18.2654 7.32528 18.8641 9.24112 17.7791 10.3407L15.9039 12.2412C15.4731 12.6778 15.2765 13.307 15.3782 13.9235L15.8208 16.607C16.077 18.1596 14.5095 19.3437 13.1684 18.6106L10.8505 17.3437C10.318 17.0526 9.68172 17.0526 9.14915 17.3437L6.83131 18.6106C5.49016 19.3437 3.92269 18.1596 4.17883 16.607L4.62149 13.9235C4.72321 13.307 4.5266 12.6778 4.09574 12.2412L2.22057 10.3407C1.13556 9.24113 1.73428 7.32528 3.23372 7.09875L5.82515 6.70724C6.42058 6.61728 6.93531 6.22846 7.20159 5.66749L8.36051 3.22601Z"
                    fill="#F59E0B"
                  />
                </svg>
              </div>
            </div>
            <div className="product-text-up-review-txt">
              <h1>Excellent Product, I Love It 😍</h1>
              <h2>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </h2>
              <h3>
                Review by <span>Krist</span> Posted on
                <span> June 05, 2023</span>
              </h3>
            </div>
          </div>
          <div className="product-text-up-rect"></div>
          <div className="product-text-up-review">
            <div className="product-text-up-review-per">
              <div className="product-up-rev-per-img">
                <img
                  src="https://s3-alpha-sig.figma.com/img/c0b1/ee7e/c597213a34c8cfc42210991e5eaa646c?Expires=1694995200&Signature=nOyDj6DK-8eb6aYwbgZ3BE12CMAVgZVb2zDPubWDaWVct42~-rJqDZ3xqcnWkVZlMJWlK7UiP0lwrOJZcbn8BKbx-HhdW4vmFPsZpXutRWj7qXCtFKRAHcQT3JMJHvx3OEwtJxmPHwJvPYrHlfBk9MeoSQKRSKBTvvh9jMjlS2Ws6q2IxugKktYlg~2H1QiyyPHhmxgMHsmuYJWPmhrmyKDzvfU9hWhIUUSrpjw1yg56xdvQXJJFV2NGhBGPt~ybERlhc8FDnV6Zl34RkzDgzBcNBpNrECB8rjT0z0ng6a4qnBiyv8tlUK1MiGI1fUHm7JkRKQ~Xo7tZp9iBvgVsvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>
              <div className="product-up-rev-txt">
                <p>Alexa Johnson</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M8.36051 3.22601C9.03109 1.81334 10.9686 1.81333 11.6392 3.22601L12.7981 5.66749C13.0644 6.22846 13.5791 6.61728 14.1745 6.70724L16.766 7.09875C18.2654 7.32528 18.8641 9.24112 17.7791 10.3407L15.9039 12.2412C15.4731 12.6778 15.2765 13.307 15.3782 13.9235L15.8208 16.607C16.077 18.1596 14.5095 19.3437 13.1684 18.6106L10.8505 17.3437C10.318 17.0526 9.68172 17.0526 9.14915 17.3437L6.83131 18.6106C5.49016 19.3437 3.92269 18.1596 4.17883 16.607L4.62149 13.9235C4.72321 13.307 4.5266 12.6778 4.09574 12.2412L2.22057 10.3407C1.13556 9.24113 1.73428 7.32528 3.23372 7.09875L5.82515 6.70724C6.42058 6.61728 6.93531 6.22846 7.20159 5.66749L8.36051 3.22601Z"
                    fill="#F59E0B"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M8.36051 3.22601C9.03109 1.81334 10.9686 1.81333 11.6392 3.22601L12.7981 5.66749C13.0644 6.22846 13.5791 6.61728 14.1745 6.70724L16.766 7.09875C18.2654 7.32528 18.8641 9.24112 17.7791 10.3407L15.9039 12.2412C15.4731 12.6778 15.2765 13.307 15.3782 13.9235L15.8208 16.607C16.077 18.1596 14.5095 19.3437 13.1684 18.6106L10.8505 17.3437C10.318 17.0526 9.68172 17.0526 9.14915 17.3437L6.83131 18.6106C5.49016 19.3437 3.92269 18.1596 4.17883 16.607L4.62149 13.9235C4.72321 13.307 4.5266 12.6778 4.09574 12.2412L2.22057 10.3407C1.13556 9.24113 1.73428 7.32528 3.23372 7.09875L5.82515 6.70724C6.42058 6.61728 6.93531 6.22846 7.20159 5.66749L8.36051 3.22601Z"
                    fill="#F59E0B"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M8.36051 3.22601C9.03109 1.81334 10.9686 1.81333 11.6392 3.22601L12.7981 5.66749C13.0644 6.22846 13.5791 6.61728 14.1745 6.70724L16.766 7.09875C18.2654 7.32528 18.8641 9.24112 17.7791 10.3407L15.9039 12.2412C15.4731 12.6778 15.2765 13.307 15.3782 13.9235L15.8208 16.607C16.077 18.1596 14.5095 19.3437 13.1684 18.6106L10.8505 17.3437C10.318 17.0526 9.68172 17.0526 9.14915 17.3437L6.83131 18.6106C5.49016 19.3437 3.92269 18.1596 4.17883 16.607L4.62149 13.9235C4.72321 13.307 4.5266 12.6778 4.09574 12.2412L2.22057 10.3407C1.13556 9.24113 1.73428 7.32528 3.23372 7.09875L5.82515 6.70724C6.42058 6.61728 6.93531 6.22846 7.20159 5.66749L8.36051 3.22601Z"
                    fill="#F59E0B"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M8.36051 3.22601C9.03109 1.81334 10.9686 1.81333 11.6392 3.22601L12.7981 5.66749C13.0644 6.22846 13.5791 6.61728 14.1745 6.70724L16.766 7.09875C18.2654 7.32528 18.8641 9.24112 17.7791 10.3407L15.9039 12.2412C15.4731 12.6778 15.2765 13.307 15.3782 13.9235L15.8208 16.607C16.077 18.1596 14.5095 19.3437 13.1684 18.6106L10.8505 17.3437C10.318 17.0526 9.68172 17.0526 9.14915 17.3437L6.83131 18.6106C5.49016 19.3437 3.92269 18.1596 4.17883 16.607L4.62149 13.9235C4.72321 13.307 4.5266 12.6778 4.09574 12.2412L2.22057 10.3407C1.13556 9.24113 1.73428 7.32528 3.23372 7.09875L5.82515 6.70724C6.42058 6.61728 6.93531 6.22846 7.20159 5.66749L8.36051 3.22601Z"
                    fill="#F59E0B"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M8.36051 3.22601C9.03109 1.81334 10.9686 1.81333 11.6392 3.22601L12.7981 5.66749C13.0644 6.22846 13.5791 6.61728 14.1745 6.70724L16.766 7.09875C18.2654 7.32528 18.8641 9.24112 17.7791 10.3407L15.9039 12.2412C15.4731 12.6778 15.2765 13.307 15.3782 13.9235L15.8208 16.607C16.077 18.1596 14.5095 19.3437 13.1684 18.6106L10.8505 17.3437C10.318 17.0526 9.68172 17.0526 9.14915 17.3437L6.83131 18.6106C5.49016 19.3437 3.92269 18.1596 4.17883 16.607L4.62149 13.9235C4.72321 13.307 4.5266 12.6778 4.09574 12.2412L2.22057 10.3407C1.13556 9.24113 1.73428 7.32528 3.23372 7.09875L5.82515 6.70724C6.42058 6.61728 6.93531 6.22846 7.20159 5.66749L8.36051 3.22601Z"
                    fill="#F59E0B"
                  />
                </svg>
              </div>
            </div>
            <div className="product-text-up-review-txt">
              <h1>My Daughter is very much happy with this products</h1>
              <h2>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </h2>
              <h3>
                Review by <span>Krist</span> Posted on
                <span> June 05, 2023</span>
              </h3>
            </div>
          </div>
          <div className="product-text-up-rect"></div>
        </div>
      </div>
      <div className="product-text-down">
        <div className="product-text-down-title">
          <p>{words[lang].addrev}</p>
        </div>
        <form className="product-review">
          <div className="prod-review-name">
            <p>{words[lang].yourrate}</p>
            <div className="prod-review-stars">
              <div className="prod-review-star1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.36051 2.72601C9.03109 1.31334 10.9686 1.31333 11.6392 2.72601L12.7981 5.16749C13.0644 5.72846 13.5791 6.11728 14.1745 6.20724L16.766 6.59875C18.2654 6.82528 18.8641 8.74112 17.7791 9.84074L15.9039 11.7412C15.4731 12.1778 15.2765 12.807 15.3782 13.4235L15.8208 16.107C16.077 17.6596 14.5095 18.8437 13.1684 18.1106L10.8505 16.8437C10.318 16.5526 9.68172 16.5526 9.14915 16.8437L6.83131 18.1106C5.49016 18.8437 3.92269 17.6596 4.17883 16.107L4.62149 13.4235C4.72321 12.807 4.5266 12.1778 4.09574 11.7412L2.22057 9.84074C1.13556 8.74113 1.73428 6.82528 3.23372 6.59875L5.82515 6.20724C6.42058 6.11728 6.93531 5.72846 7.20159 5.16749L8.36051 2.72601Z"
                    stroke="#131118"
                    stroke-opacity="0.8"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="prod-review-star-rect"></div>
              <div className="prod-review-star2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.36051 2.72601C9.03109 1.31334 10.9686 1.31333 11.6392 2.72601L12.7981 5.16749C13.0644 5.72846 13.5791 6.11728 14.1745 6.20724L16.766 6.59875C18.2654 6.82528 18.8641 8.74112 17.7791 9.84074L15.9039 11.7412C15.4731 12.1778 15.2765 12.807 15.3782 13.4235L15.8208 16.107C16.077 17.6596 14.5095 18.8437 13.1684 18.1106L10.8505 16.8437C10.318 16.5526 9.68172 16.5526 9.14915 16.8437L6.83131 18.1106C5.49016 18.8437 3.92269 17.6596 4.17883 16.107L4.62149 13.4235C4.72321 12.807 4.5266 12.1778 4.09574 11.7412L2.22057 9.84074C1.13556 8.74113 1.73428 6.82528 3.23372 6.59875L5.82515 6.20724C6.42058 6.11728 6.93531 5.72846 7.20159 5.16749L8.36051 2.72601Z"
                    stroke="#131118"
                    stroke-opacity="0.8"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.36051 2.72601C9.03109 1.31334 10.9686 1.31333 11.6392 2.72601L12.7981 5.16749C13.0644 5.72846 13.5791 6.11728 14.1745 6.20724L16.766 6.59875C18.2654 6.82528 18.8641 8.74112 17.7791 9.84074L15.9039 11.7412C15.4731 12.1778 15.2765 12.807 15.3782 13.4235L15.8208 16.107C16.077 17.6596 14.5095 18.8437 13.1684 18.1106L10.8505 16.8437C10.318 16.5526 9.68172 16.5526 9.14915 16.8437L6.83131 18.1106C5.49016 18.8437 3.92269 17.6596 4.17883 16.107L4.62149 13.4235C4.72321 12.807 4.5266 12.1778 4.09574 11.7412L2.22057 9.84074C1.13556 8.74113 1.73428 6.82528 3.23372 6.59875L5.82515 6.20724C6.42058 6.11728 6.93531 5.72846 7.20159 5.16749L8.36051 2.72601Z"
                    stroke="#131118"
                    stroke-opacity="0.8"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="prod-review-star-rect"></div>
              <div className="prod-review-star3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.36051 2.72601C9.03109 1.31334 10.9686 1.31333 11.6392 2.72601L12.7981 5.16749C13.0644 5.72846 13.5791 6.11728 14.1745 6.20724L16.766 6.59875C18.2654 6.82528 18.8641 8.74112 17.7791 9.84074L15.9039 11.7412C15.4731 12.1778 15.2765 12.807 15.3782 13.4235L15.8208 16.107C16.077 17.6596 14.5095 18.8437 13.1684 18.1106L10.8505 16.8437C10.318 16.5526 9.68172 16.5526 9.14915 16.8437L6.83131 18.1106C5.49016 18.8437 3.92269 17.6596 4.17883 16.107L4.62149 13.4235C4.72321 12.807 4.5266 12.1778 4.09574 11.7412L2.22057 9.84074C1.13556 8.74113 1.73428 6.82528 3.23372 6.59875L5.82515 6.20724C6.42058 6.11728 6.93531 5.72846 7.20159 5.16749L8.36051 2.72601Z"
                    stroke="#131118"
                    stroke-opacity="0.8"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.36051 2.72601C9.03109 1.31334 10.9686 1.31333 11.6392 2.72601L12.7981 5.16749C13.0644 5.72846 13.5791 6.11728 14.1745 6.20724L16.766 6.59875C18.2654 6.82528 18.8641 8.74112 17.7791 9.84074L15.9039 11.7412C15.4731 12.1778 15.2765 12.807 15.3782 13.4235L15.8208 16.107C16.077 17.6596 14.5095 18.8437 13.1684 18.1106L10.8505 16.8437C10.318 16.5526 9.68172 16.5526 9.14915 16.8437L6.83131 18.1106C5.49016 18.8437 3.92269 17.6596 4.17883 16.107L4.62149 13.4235C4.72321 12.807 4.5266 12.1778 4.09574 11.7412L2.22057 9.84074C1.13556 8.74113 1.73428 6.82528 3.23372 6.59875L5.82515 6.20724C6.42058 6.11728 6.93531 5.72846 7.20159 5.16749L8.36051 2.72601Z"
                    stroke="#131118"
                    stroke-opacity="0.8"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.36051 2.72601C9.03109 1.31334 10.9686 1.31333 11.6392 2.72601L12.7981 5.16749C13.0644 5.72846 13.5791 6.11728 14.1745 6.20724L16.766 6.59875C18.2654 6.82528 18.8641 8.74112 17.7791 9.84074L15.9039 11.7412C15.4731 12.1778 15.2765 12.807 15.3782 13.4235L15.8208 16.107C16.077 17.6596 14.5095 18.8437 13.1684 18.1106L10.8505 16.8437C10.318 16.5526 9.68172 16.5526 9.14915 16.8437L6.83131 18.1106C5.49016 18.8437 3.92269 17.6596 4.17883 16.107L4.62149 13.4235C4.72321 12.807 4.5266 12.1778 4.09574 11.7412L2.22057 9.84074C1.13556 8.74113 1.73428 6.82528 3.23372 6.59875L5.82515 6.20724C6.42058 6.11728 6.93531 5.72846 7.20159 5.16749L8.36051 2.72601Z"
                    stroke="#131118"
                    stroke-opacity="0.8"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="prod-review-star-rect"></div>
              <div className="prod-review-star4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.36051 2.72601C9.03109 1.31334 10.9686 1.31333 11.6392 2.72601L12.7981 5.16749C13.0644 5.72846 13.5791 6.11728 14.1745 6.20724L16.766 6.59875C18.2654 6.82528 18.8641 8.74112 17.7791 9.84074L15.9039 11.7412C15.4731 12.1778 15.2765 12.807 15.3782 13.4235L15.8208 16.107C16.077 17.6596 14.5095 18.8437 13.1684 18.1106L10.8505 16.8437C10.318 16.5526 9.68172 16.5526 9.14915 16.8437L6.83131 18.1106C5.49016 18.8437 3.92269 17.6596 4.17883 16.107L4.62149 13.4235C4.72321 12.807 4.5266 12.1778 4.09574 11.7412L2.22057 9.84074C1.13556 8.74113 1.73428 6.82528 3.23372 6.59875L5.82515 6.20724C6.42058 6.11728 6.93531 5.72846 7.20159 5.16749L8.36051 2.72601Z"
                    stroke="#131118"
                    stroke-opacity="0.8"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.36051 2.72601C9.03109 1.31334 10.9686 1.31333 11.6392 2.72601L12.7981 5.16749C13.0644 5.72846 13.5791 6.11728 14.1745 6.20724L16.766 6.59875C18.2654 6.82528 18.8641 8.74112 17.7791 9.84074L15.9039 11.7412C15.4731 12.1778 15.2765 12.807 15.3782 13.4235L15.8208 16.107C16.077 17.6596 14.5095 18.8437 13.1684 18.1106L10.8505 16.8437C10.318 16.5526 9.68172 16.5526 9.14915 16.8437L6.83131 18.1106C5.49016 18.8437 3.92269 17.6596 4.17883 16.107L4.62149 13.4235C4.72321 12.807 4.5266 12.1778 4.09574 11.7412L2.22057 9.84074C1.13556 8.74113 1.73428 6.82528 3.23372 6.59875L5.82515 6.20724C6.42058 6.11728 6.93531 5.72846 7.20159 5.16749L8.36051 2.72601Z"
                    stroke="#131118"
                    stroke-opacity="0.8"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.36051 2.72601C9.03109 1.31334 10.9686 1.31333 11.6392 2.72601L12.7981 5.16749C13.0644 5.72846 13.5791 6.11728 14.1745 6.20724L16.766 6.59875C18.2654 6.82528 18.8641 8.74112 17.7791 9.84074L15.9039 11.7412C15.4731 12.1778 15.2765 12.807 15.3782 13.4235L15.8208 16.107C16.077 17.6596 14.5095 18.8437 13.1684 18.1106L10.8505 16.8437C10.318 16.5526 9.68172 16.5526 9.14915 16.8437L6.83131 18.1106C5.49016 18.8437 3.92269 17.6596 4.17883 16.107L4.62149 13.4235C4.72321 12.807 4.5266 12.1778 4.09574 11.7412L2.22057 9.84074C1.13556 8.74113 1.73428 6.82528 3.23372 6.59875L5.82515 6.20724C6.42058 6.11728 6.93531 5.72846 7.20159 5.16749L8.36051 2.72601Z"
                    stroke="#131118"
                    stroke-opacity="0.8"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.36051 2.72601C9.03109 1.31334 10.9686 1.31333 11.6392 2.72601L12.7981 5.16749C13.0644 5.72846 13.5791 6.11728 14.1745 6.20724L16.766 6.59875C18.2654 6.82528 18.8641 8.74112 17.7791 9.84074L15.9039 11.7412C15.4731 12.1778 15.2765 12.807 15.3782 13.4235L15.8208 16.107C16.077 17.6596 14.5095 18.8437 13.1684 18.1106L10.8505 16.8437C10.318 16.5526 9.68172 16.5526 9.14915 16.8437L6.83131 18.1106C5.49016 18.8437 3.92269 17.6596 4.17883 16.107L4.62149 13.4235C4.72321 12.807 4.5266 12.1778 4.09574 11.7412L2.22057 9.84074C1.13556 8.74113 1.73428 6.82528 3.23372 6.59875L5.82515 6.20724C6.42058 6.11728 6.93531 5.72846 7.20159 5.16749L8.36051 2.72601Z"
                    stroke="#131118"
                    stroke-opacity="0.8"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="prod-review-star-rect"></div>
              <div className="prod-review-star5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.36051 2.72601C9.03109 1.31334 10.9686 1.31333 11.6392 2.72601L12.7981 5.16749C13.0644 5.72846 13.5791 6.11728 14.1745 6.20724L16.766 6.59875C18.2654 6.82528 18.8641 8.74112 17.7791 9.84074L15.9039 11.7412C15.4731 12.1778 15.2765 12.807 15.3782 13.4235L15.8208 16.107C16.077 17.6596 14.5095 18.8437 13.1684 18.1106L10.8505 16.8437C10.318 16.5526 9.68172 16.5526 9.14915 16.8437L6.83131 18.1106C5.49016 18.8437 3.92269 17.6596 4.17883 16.107L4.62149 13.4235C4.72321 12.807 4.5266 12.1778 4.09574 11.7412L2.22057 9.84074C1.13556 8.74113 1.73428 6.82528 3.23372 6.59875L5.82515 6.20724C6.42058 6.11728 6.93531 5.72846 7.20159 5.16749L8.36051 2.72601Z"
                    stroke="#131118"
                    stroke-opacity="0.8"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.36051 2.72601C9.03109 1.31334 10.9686 1.31333 11.6392 2.72601L12.7981 5.16749C13.0644 5.72846 13.5791 6.11728 14.1745 6.20724L16.766 6.59875C18.2654 6.82528 18.8641 8.74112 17.7791 9.84074L15.9039 11.7412C15.4731 12.1778 15.2765 12.807 15.3782 13.4235L15.8208 16.107C16.077 17.6596 14.5095 18.8437 13.1684 18.1106L10.8505 16.8437C10.318 16.5526 9.68172 16.5526 9.14915 16.8437L6.83131 18.1106C5.49016 18.8437 3.92269 17.6596 4.17883 16.107L4.62149 13.4235C4.72321 12.807 4.5266 12.1778 4.09574 11.7412L2.22057 9.84074C1.13556 8.74113 1.73428 6.82528 3.23372 6.59875L5.82515 6.20724C6.42058 6.11728 6.93531 5.72846 7.20159 5.16749L8.36051 2.72601Z"
                    stroke="#131118"
                    stroke-opacity="0.8"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.36051 2.72601C9.03109 1.31334 10.9686 1.31333 11.6392 2.72601L12.7981 5.16749C13.0644 5.72846 13.5791 6.11728 14.1745 6.20724L16.766 6.59875C18.2654 6.82528 18.8641 8.74112 17.7791 9.84074L15.9039 11.7412C15.4731 12.1778 15.2765 12.807 15.3782 13.4235L15.8208 16.107C16.077 17.6596 14.5095 18.8437 13.1684 18.1106L10.8505 16.8437C10.318 16.5526 9.68172 16.5526 9.14915 16.8437L6.83131 18.1106C5.49016 18.8437 3.92269 17.6596 4.17883 16.107L4.62149 13.4235C4.72321 12.807 4.5266 12.1778 4.09574 11.7412L2.22057 9.84074C1.13556 8.74113 1.73428 6.82528 3.23372 6.59875L5.82515 6.20724C6.42058 6.11728 6.93531 5.72846 7.20159 5.16749L8.36051 2.72601Z"
                    stroke="#131118"
                    stroke-opacity="0.8"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.36051 2.72601C9.03109 1.31334 10.9686 1.31333 11.6392 2.72601L12.7981 5.16749C13.0644 5.72846 13.5791 6.11728 14.1745 6.20724L16.766 6.59875C18.2654 6.82528 18.8641 8.74112 17.7791 9.84074L15.9039 11.7412C15.4731 12.1778 15.2765 12.807 15.3782 13.4235L15.8208 16.107C16.077 17.6596 14.5095 18.8437 13.1684 18.1106L10.8505 16.8437C10.318 16.5526 9.68172 16.5526 9.14915 16.8437L6.83131 18.1106C5.49016 18.8437 3.92269 17.6596 4.17883 16.107L4.62149 13.4235C4.72321 12.807 4.5266 12.1778 4.09574 11.7412L2.22057 9.84074C1.13556 8.74113 1.73428 6.82528 3.23372 6.59875L5.82515 6.20724C6.42058 6.11728 6.93531 5.72846 7.20159 5.16749L8.36051 2.72601Z"
                    stroke="#131118"
                    stroke-opacity="0.8"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.36051 2.72601C9.03109 1.31334 10.9686 1.31333 11.6392 2.72601L12.7981 5.16749C13.0644 5.72846 13.5791 6.11728 14.1745 6.20724L16.766 6.59875C18.2654 6.82528 18.8641 8.74112 17.7791 9.84074L15.9039 11.7412C15.4731 12.1778 15.2765 12.807 15.3782 13.4235L15.8208 16.107C16.077 17.6596 14.5095 18.8437 13.1684 18.1106L10.8505 16.8437C10.318 16.5526 9.68172 16.5526 9.14915 16.8437L6.83131 18.1106C5.49016 18.8437 3.92269 17.6596 4.17883 16.107L4.62149 13.4235C4.72321 12.807 4.5266 12.1778 4.09574 11.7412L2.22057 9.84074C1.13556 8.74113 1.73428 6.82528 3.23372 6.59875L5.82515 6.20724C6.42058 6.11728 6.93531 5.72846 7.20159 5.16749L8.36051 2.72601Z"
                    stroke="#131118"
                    stroke-opacity="0.8"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="prod-review-inputs">
            <div className="prod-review-input-name">
              <span>{words[lang].name}</span>
              <input type="text" placeholder={words[lang].entername} />
            </div>
            <div className="prod-review-input-name">
              <span>{words[lang].emailaddress}</span>
              <input type="email" placeholder={words[lang].enteremail} />
            </div>
            <div className="prod-review-input-name">
              <span>{words[lang].yourrev}</span>
              <input type="text" placeholder={words[lang].addrev} />
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
