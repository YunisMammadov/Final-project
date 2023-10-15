import { NavLink } from "react-router-dom";
import "./Header.css"
import "./Header_resp.css"
function Header() {
  return (
    <header>
      <div className="header">
        <div className="header-logo">
          <NavLink to="/">
            <img src="/logo.png" alt="" />
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="has-dropdown">
            <NavLink to="/product">
              Shop
              <svg
                width="24"
                height="18"
                viewBox=" 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Huge-icon/arrows/outline/direction-down 01">
                  <path
                    id="Vector 175"
                    d="M7 10.5L12 14.5L17 10.5"
                    stroke="#131118"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              {/* <div className="dropdown">
                {category.map((category, index) => {
                  return (
                    <div className="megamenu-card" key={category.id}>
                      {index % 2 === 0 && (
                        <div className="megamenu-up">
                          <div className="megamenu-inner-up">
                            <li>
                              <NavLink>{category.category}</NavLink>
                            </li>
                          </div>
                          <div className="megamenu-inner">
                            {category.subcategories.map((subcategory) => (
                              <li>
                                <NavLink>{subcategory}</NavLink>
                              </li>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {index % 2 === 1 && (
                        <div className="megamenu-down">
                          <div className="megamenu-inner-up">
                            <li>
                              <NavLink>{category.category}</NavLink>
                            </li>
                          </div>
                          <div className="megamenu-inner">
                            {category.subcategories.map((subcategory) => (
                              <li>
                                <NavLink>{subcategory}</NavLink>
                              </li>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div> */}
              <div className="dropdown">
                <div className="megamenu-card">
                  <div className="megamenu-up">
                    <div className="megamenu-inner-up">
                      <li>
                        <NavLink>Men</NavLink>
                      </li>
                    </div>

                    <div className="megamenu-inner">
                      <li>
                        <NavLink>T-Shirts</NavLink>
                      </li>
                      <li>
                        <NavLink>Casual Shirts</NavLink>
                      </li>
                      <li>
                        <NavLink>Formal Shirts</NavLink>
                      </li>
                      <li>
                        <NavLink>Jackets</NavLink>
                      </li>
                      <li>
                        <NavLink>Blazers & Coats</NavLink>
                      </li>
                    </div>
                  </div>
                  <div className="megamenu-down">
                    <div className="megamenu-inner-up">
                      <li>
                        <NavLink>Indian & Festive Wear</NavLink>
                      </li>
                    </div>
                    <div className="megamenu-inner">
                      <li>
                        <NavLink>Kurtas & Kurta Sets</NavLink>
                      </li>
                      <li>
                        <NavLink>Sherwanis</NavLink>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="mega_rectangle"></div>
                <div className="megamenu-card">
                  <div className="megamenu-up">
                    <div className="megamenu-inner-up">
                      <li>
                        <NavLink>Women</NavLink>
                      </li>
                    </div>

                    <div className="megamenu-inner">
                      <li>
                        <NavLink>Kurtas & Suits</NavLink>
                      </li>
                      <li>
                        <NavLink>Sarees</NavLink>
                      </li>
                      <li>
                        <NavLink>Ethnic Wear</NavLink>
                      </li>
                      <li>
                        <NavLink>Lehenga Cholis</NavLink>
                      </li>
                      <li>
                        <NavLink>Jackets</NavLink>
                      </li>
                    </div>
                  </div>
                  <div className="megamenu-down">
                    <div className="megamenu-inner-up">
                      <li>
                        <NavLink>Western Wear</NavLink>
                      </li>
                    </div>
                    <div className="megamenu-inner">
                      <li>
                        <NavLink>Dresses</NavLink>
                      </li>
                      <li>
                        <NavLink>Jumpsuits</NavLink>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="mega_rectangle"></div>
                <div className="megamenu-card">
                  <div className="megamenu-up">
                    <div className="megamenu-inner-up">
                      <li>
                        <NavLink>Footwear</NavLink>
                      </li>
                    </div>

                    <div className="megamenu-inner">
                      <li>
                        <NavLink>Flats</NavLink>
                      </li>
                      <li>
                        <NavLink>Casual Shoes</NavLink>
                      </li>
                      <li>
                        <NavLink>Heels</NavLink>
                      </li>
                      <li>
                        <NavLink>Boots</NavLink>
                      </li>
                      <li>
                        <NavLink>Sports Shoes</NavLink>
                      </li>
                    </div>
                  </div>
                  <div className="megamenu-down">
                    <div className="megamenu-inner-up">
                      <li>
                        <NavLink>Product Features</NavLink>
                      </li>
                    </div>
                    <div className="megamenu-inner">
                      <li>
                        <NavLink>360 Product Viewers</NavLink>
                      </li>
                      <li>
                        <NavLink>Product with Video</NavLink>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="mega_rectangle"></div>
                <div className="megamenu-card1">
                  <div className="megamenu-up">
                    <div className="megamenu-inner-up">
                      <li>
                        <NavLink>Kids</NavLink>
                      </li>
                    </div>

                    <div className="megamenu-inner">
                      <li>
                        <NavLink>T-Shirts</NavLink>
                      </li>
                      <li>
                        <NavLink>Shirts</NavLink>
                      </li>
                      <li>
                        <NavLink>Jeans</NavLink>
                      </li>
                      <li>
                        <NavLink>Trousers</NavLink>
                      </li>
                      <li>
                        <NavLink>Party Wear</NavLink>
                      </li>
                      <li>
                        <NavLink>Innerwear & Thermal</NavLink>
                      </li>
                      <li>
                        <NavLink>Track Pants</NavLink>
                      </li>
                      <li>
                        <NavLink>Value Pack</NavLink>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="our_story">Our Story</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact_us">Contact us</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Huge-icon/interface/solid/search 02">
                <path
                  id="Union"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5ZM11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75Z"
                  fill="#131118"
                />
              </g>
            </svg>
          </li>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Huge-icon/interface/solid/search 3">
                <path
                  id="Vector"
                  d="M12.765 4.70229L12 5.52422L11.235 4.70229C9.12233 2.43257 5.69709 2.43257 3.58447 4.70229C1.47184 6.972 1.47184 10.6519 3.58447 12.9217L10.4699 20.3191C11.315 21.227 12.685 21.227 13.5301 20.3191L20.4155 12.9217C22.5282 10.6519 22.5282 6.972 20.4155 4.70229C18.3029 2.43257 14.8777 2.43257 12.765 4.70229Z"
                  stroke="#131118"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </li>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Huge-icon/interface/solid/search 4">
                <path
                  id="Rectangle 773"
                  d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
                  stroke="#131118"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Rectangle 772"
                  d="M15.6116 3H8.3886C6.43325 3 4.76449 4.41365 4.44303 6.3424L2.77636 16.3424C2.37001 18.7805 4.25018 21 6.72194 21H17.2783C19.75 21 21.6302 18.7805 21.2238 16.3424L19.5572 6.3424C19.2357 4.41365 17.5669 3 15.6116 3Z"
                  stroke="#131118"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </li>
          <button>
            <NavLink to="/login">Login</NavLink>
          </button>
        </ul>
      </div>
    </header>
  );
}
export default Header;
