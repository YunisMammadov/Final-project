import { connect } from "react-redux";

function Related_product({ products }) {
  const related = products.filter((product) => product.related);

  return (
    <>
      <section className="related">
        <div className="container">
          <div className="our_related">
            <div className="related-text">
              <p>Related Products</p>
            </div>
            <div className="related-products">
              {related.map((a) => (
                <div key={a.id} className="related-product">
                  <div className="related-img">
                    <img src={a.image} alt="" />
                    <div className="related-common">
                      <div className="related-icons">
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_214_534)">
                              <path
                                d="M8.36076 2.72601C9.03133 1.31334 10.9688 1.31333 11.6394 2.72601L12.7983 5.16749C13.0646 5.72846 13.5793 6.11728 14.1748 6.20724L16.7662 6.59875C18.2656 6.82528 18.8644 8.74112 17.7794 9.84074L15.9042 11.7412C15.4733 12.1778 15.2767 12.807 15.3784 13.4235L15.8211 16.107C16.0772 17.6596 14.5098 18.8437 13.1686 18.1106L10.8508 16.8437C10.3182 16.5526 9.68196 16.5526 9.14939 16.8437L6.83155 18.1106C5.49041 18.8437 3.92293 17.6596 4.17907 16.107L4.62174 13.4235C4.72345 12.807 4.52684 12.1778 4.09598 11.7412L2.22081 9.84074C1.1358 8.74112 1.73452 6.82528 3.23397 6.59875L5.82539 6.20724C6.42082 6.11728 6.93555 5.72846 7.20184 5.16749L8.36076 2.72601Z"
                                stroke="#131118"
                                stroke-width="1.5"
                                stroke-linejoin="round"
                              />
                            </g>
                          </svg>
                        </button>
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="14"
                            viewBox="0 0 12 14"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0.558058 9.89155C0.31398 10.1356 0.31398 10.5314 0.558058 10.7754L3.05806 13.2754C3.30214 13.5195 3.69786 13.5195 3.94194 13.2754C4.18602 13.0314 4.18602 12.6356 3.94194 12.3916L2.50888 10.9585L11 10.9585C11.3452 10.9585 11.625 10.6787 11.625 10.3335C11.625 9.98832 11.3452 9.7085 11 9.7085L2.50888 9.7085L3.94194 8.27544C4.18602 8.03136 4.18602 7.63563 3.94194 7.39155C3.69786 7.14748 3.30214 7.14748 3.05806 7.39155L0.558058 9.89155ZM8.94194 6.60877L11.4419 4.10877C11.686 3.86469 11.686 3.46897 11.4419 3.22489L8.94194 0.724887C8.69786 0.48081 8.30214 0.48081 8.05806 0.724888C7.81398 0.968965 7.81398 1.36469 8.05806 1.60877L9.49112 3.04183L1 3.04183C0.654822 3.04183 0.375 3.32165 0.375 3.66683C0.375 4.01201 0.654822 4.29183 1 4.29183L9.49112 4.29183L8.05806 5.72489C7.81398 5.96896 7.81398 6.36469 8.05806 6.60877C8.30214 6.85285 8.69786 6.85285 8.94194 6.60877Z"
                              fill="#131118"
                            />
                          </svg>
                        </button>
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M17.6087 8.21075C18.575 9.22748 18.575 10.7722 17.6087 11.7889C15.9788 13.5037 13.1797 15.8332 10.0001 15.8332C6.82049 15.8332 4.02133 13.5037 2.3915 11.7889C1.42516 10.7722 1.42516 9.22748 2.3915 8.21075C4.02132 6.49595 6.82049 4.1665 10.0001 4.1665C13.1797 4.1665 15.9788 6.49595 17.6087 8.21075Z"
                              stroke="#131118"
                              stroke-width="1.5"
                            />
                            <path
                              d="M12.5001 9.99984C12.5001 11.3805 11.3808 12.4998 10.0001 12.4998C8.61937 12.4998 7.50008 11.3805 7.50008 9.99984C7.50008 8.61913 8.61937 7.49984 10.0001 7.49984C11.3808 7.49984 12.5001 8.61913 12.5001 9.99984Z"
                              stroke="#131118"
                              stroke-width="1.5"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="related-btn-cart">
                        <button className="related-cart">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                  <div className="related-txt">
                    <h1>{a.title}</h1>
                    <h2>{a.text}</h2>
                    <div className="related-price">
                      <h3>${a.new_price}</h3>
                      <h4>${a.old_price}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
const t = (a) => a;

export default connect(t)(Related_product);
