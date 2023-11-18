import { NavLink } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import "./Header.css";

function Header({ dispatch, lang, words }) {
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
  };
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
                          <NavLink>{words[lang].men}</NavLink>
                        </li>
                      </div>

                      <div className="megamenu-inner">
                        <li>
                          <NavLink>{words[lang].Tshirts}</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].casualshirt}</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].formalshirt}</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].Jackets}</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].Blazerscoats}</NavLink>
                        </li>
                      </div>
                    </div>
                    <div className="megamenu-down">
                      <div className="megamenu-inner-up">
                        <li>
                          <NavLink>{words[lang].indian}</NavLink>
                        </li>
                      </div>
                      <div className="megamenu-inner">
                        <li>
                          <NavLink>{words[lang].kurtas}</NavLink>
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
                          <NavLink>{words[lang].women}</NavLink>
                        </li>
                      </div>

                      <div className="megamenu-inner">
                        <li>
                          <NavLink>{words[lang].kurtas1}</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].Sarees}</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].EthnicWear}</NavLink>
                        </li>
                        <li>
                          <NavLink>Lehenga Cholis</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].Jackets}</NavLink>
                        </li>
                      </div>
                    </div>
                    <div className="megamenu-down">
                      <div className="megamenu-inner-up">
                        <li>
                          <NavLink>{words[lang].western}</NavLink>
                        </li>
                      </div>
                      <div className="megamenu-inner">
                        <li>
                          <NavLink>{words[lang].Dresses}</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].Jumpsuits}</NavLink>
                        </li>
                      </div>
                    </div>
                  </div>
                  <div className="mega_rectangle"></div>
                  <div className="megamenu-card">
                    <div className="megamenu-up">
                      <div className="megamenu-inner-up">
                        <li>
                          <NavLink>{words[lang].Footwear}</NavLink>
                        </li>
                      </div>

                      <div className="megamenu-inner">
                        <li>
                          <NavLink>{words[lang].Flats}</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].CasualShoes}</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].Heels}</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].Boots}</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].SportsShoes}</NavLink>
                        </li>
                      </div>
                    </div>
                    <div className="megamenu-down">
                      <div className="megamenu-inner-up">
                        <li>
                          <NavLink>{words[lang].ProductFeatures}</NavLink>
                        </li>
                      </div>
                      <div className="megamenu-inner">
                        <li>
                          <NavLink>{words[lang].ProductViewers}</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].ProductVideo}</NavLink>
                        </li>
                      </div>
                    </div>
                  </div>
                  <div className="mega_rectangle"></div>
                  <div className="megamenu-card1">
                    <div className="megamenu-up">
                      <div className="megamenu-inner-up">
                        <li>
                          <NavLink>{words[lang].kids}</NavLink>
                        </li>
                      </div>

                      <div className="megamenu-inner">
                        <li>
                          <NavLink>{words[lang].Tshirts}</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].shirt}</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].Jeans}</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].Trousers}</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].PartyWear}</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].InnerwearThermal}</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].TrackPants}</NavLink>
                        </li>
                        <li>
                          <NavLink>{words[lang].ValuePack}</NavLink>
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
            <select
              className="select_language"
              value={lang}
              onChange={(e) => changeLang(e.target.value)}
              style={{
                width: "50px",
                color: lang === "az" || lang === "en" ? "red" : "#000",
              }}
            >
              <option
                value="az"
                style={{ color: lang === "az" ? "red" : "#000" }}
              >
                AZE
              </option>
              <option
                value="en"
                style={{ color: lang === "en" ? "red" : "#000" }}
              >
                ENG
              </option>
            </select>
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
