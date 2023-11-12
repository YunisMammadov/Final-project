import "./My_wishlists.css";
import { connect } from "react-redux";

function My_wishlists({ products, words, lang }) {
  const wishlists = products.filter((product) => product.wishlists);
  return (
    <>
      <div className="profile-down-right">
        <div className="wishlists-products">
          {wishlists.map((a) => (
            <div key={a.id} className="wishlists-product">
              <div className="wishlists-img">
                <img src={a.image} alt="" />
                <div className="wishlists-common">
                  <div className="wishlists-icons">
                    <button>
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
                  <div className="wishlists-btn-cart">
                    <button className="wishlists-cart">
                      {words[lang].movecard}
                    </button>
                  </div>
                </div>
              </div>
              <div className="wishlists-txt">
                <h1>{a.title}</h1>
                <h2>{a.text}</h2>
                <div className="wishlists-price">
                  <h3>${a.new_price}</h3>
                  <h4>${a.old_price}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const t = (a) => a;

export default connect(t)(My_wishlists);
