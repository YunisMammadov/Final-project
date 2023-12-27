import { NavLink } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import "./Header.css";

function Header({ dispatch, lang, words, cartItems, wishlist }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const changeLang = (lang) => {
    localStorage.setItem("language", lang);
    dispatch({
      type: "SET_LANG",
      payload: lang,
    });
    setMenuOpen(false);
  };

  const handleCategoryClick = (categoryId) => {
    dispatch({ type: "SET_SELECTED_CATEGORIES", payload: [categoryId] });
  };
  let favs = cartItems.length;
  let wishlists = wishlist.length;
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <NavLink to="/">
              <img src="/logo.png" alt="" />
            </NavLink>
          </div>
          <ul className={`header-menu ${menuOpen ? "open" : ""}`}>
            <li>
              <NavLink to="/">{words[lang].home}</NavLink>
            </li>
            <li className="has-dropdown">
              <NavLink to="/product">
                {words[lang].shop}

                <div className="dropdown">
                  <div className="megamenu-card">
                    <div className="megamenu-up">
                      <div className="megamenu-inner-up">
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(1)}
                          >
                            {words[lang].men}
                          </NavLink>
                        </li>
                      </div>

                      <div className="megamenu-inner">
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(14)}
                          >
                            {words[lang].Tshirts}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(15)}
                          >
                            {words[lang].casualshirt}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(16)}
                          >
                            {words[lang].formalshirt}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(17)}
                          >
                            {words[lang].Jackets}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(18)}
                          >
                            {words[lang].Blazerscoats}
                          </NavLink>
                        </li>
                      </div>
                    </div>
                    <div className="megamenu-down">
                      <div className="megamenu-inner-up">
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(2)}
                          >
                            {words[lang].indian}
                          </NavLink>
                        </li>
                      </div>
                      <div className="megamenu-inner">
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(19)}
                          >
                            {words[lang].kurtas}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(20)}
                          >
                            Sherwanis
                          </NavLink>
                        </li>
                      </div>
                    </div>
                  </div>
                  <div className="mega_rectangle"></div>
                  <div className="megamenu-card">
                    <div className="megamenu-up">
                      <div className="megamenu-inner-up">
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(3)}
                          >
                            {words[lang].women}
                          </NavLink>
                        </li>
                      </div>

                      <div className="megamenu-inner">
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(21)}
                          >
                            {words[lang].kurtas1}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(22)}
                          >
                            {words[lang].Sarees}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(23)}
                          >
                            {words[lang].EthnicWear}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(24)}
                          >
                            Lehenga Cholis
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(25)}
                          >
                            {words[lang].Jackets}
                          </NavLink>
                        </li>
                      </div>
                    </div>
                    <div className="megamenu-down">
                      <div className="megamenu-inner-up">
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(4)}
                          >
                            {words[lang].western}
                          </NavLink>
                        </li>
                      </div>
                      <div className="megamenu-inner">
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(26)}
                          >
                            {words[lang].Dresses}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(27)}
                          >
                            {words[lang].Jumpsuits}
                          </NavLink>
                        </li>
                      </div>
                    </div>
                  </div>
                  <div className="mega_rectangle"></div>
                  <div className="megamenu-card">
                    <div className="megamenu-up">
                      <div className="megamenu-inner-up">
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(5)}
                          >
                            {words[lang].Footwear}
                          </NavLink>
                        </li>
                      </div>

                      <div className="megamenu-inner">
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(28)}
                          >
                            {words[lang].Flats}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(29)}
                          >
                            {words[lang].CasualShoes}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(30)}
                          >
                            {words[lang].Heels}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(31)}
                          >
                            {words[lang].Boots}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(32)}
                          >
                            {words[lang].SportsShoes}
                          </NavLink>
                        </li>
                      </div>
                    </div>
                    <div className="megamenu-down">
                      <div className="megamenu-inner-up">
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(6)}
                          >
                            {words[lang].ProductFeatures}
                          </NavLink>
                        </li>
                      </div>
                      <div className="megamenu-inner">
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(33)}
                          >
                            {words[lang].ProductViewers}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(34)}
                          >
                            {words[lang].ProductVideo}
                          </NavLink>
                        </li>
                      </div>
                    </div>
                  </div>
                  <div className="mega_rectangle"></div>
                  <div className="megamenu-card1">
                    <div className="megamenu-up">
                      <div className="megamenu-inner-up">
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(7)}
                          >
                            {words[lang].kids}
                          </NavLink>
                        </li>
                      </div>

                      <div className="megamenu-inner">
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(35)}
                          >
                            {words[lang].Tshirts}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(36)}
                          >
                            {words[lang].shirt}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(37)}
                          >
                            {words[lang].Jeans}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(38)}
                          >
                            {words[lang].Trousers}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(39)}
                          >
                            {words[lang].PartyWear}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(40)}
                          >
                            {words[lang].InnerwearThermal}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(41)}
                          >
                            {words[lang].TrackPants}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/product"
                            onClick={() => handleCategoryClick(42)}
                          >
                            {words[lang].ValuePack}
                          </NavLink>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="our_story">{words[lang].ourstory}</NavLink>
            </li>
            <li>
              <NavLink to="/blog">{words[lang].blog}</NavLink>
            </li>
            <li>
              <NavLink to="/contact_us">{words[lang].contact}</NavLink>
            </li>
          </ul>
          <ul className="breadcrumb">
            <div style={{ position: "relative" }}>
              <button className="language-button" onClick={toggleMenu}>
                <img
                  style={{ width: 50 }}
                  src={
                    lang === "az"
                      ? "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Azerbaijan_%281991%E2%80%932013%29.svg"
                      : "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png"
                  }
                  alt=""
                />
              </button>
              {menuOpen && (
                <div className="dropdown1">
                  {lang === "az" ? (
                    <button
                      className="language-button"
                      style={{ color: lang === "en" ? "red" : "#000" }}
                      onClick={() => changeLang("en")}
                    >
                      <img
                        style={{ width: 50 }}
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png"
                        alt=""
                      />
                    </button>
                  ) : (
                    <>
                      <button
                        className="language-button"
                        style={{ color: lang === "az" ? "red" : "#000" }}
                        onClick={() => changeLang("az")}
                      >
                        <img
                          style={{ width: 50 }}
                          src="https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Azerbaijan_%281991%E2%80%932013%29.svg"
                          alt=""
                        />
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            <li
              onClick={() => {
                dispatch({
                  type: "SEARCHVISIBLE",
                  payload: true,
                });
              }}
            >
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
              <NavLink to="/my_profile">
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
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                {wishlists ? wishlists : null}
              </NavLink>
            </li>
            <li>
              <NavLink to="/checkout">
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
                {favs ? favs : null}
              </NavLink>
            </li>
            <button>
              <NavLink to="/login">{words[lang].login}</NavLink>
            </button>
          </ul>
          <div
            className="menu-btn"
            onClick={() => {
              dispatch({ type: "SIDEBAROPEN", payload: true });
            }}
          >
            <span>
              <AiOutlineMenu color="black" size={"30px"} />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
const t = (a) => a;
export default connect(t)(Header);
