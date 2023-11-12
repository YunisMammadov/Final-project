import React from "react";
import "./sidebar.css";
import { AiOutlineClose } from "react-icons/ai";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebar, dispatch }) => {
  const links = [
    {
      id: 1,
      text: "Home",
      url: "/",
    },
    {
      id: 2,
      text: "About",
      url: "/about",
    },
    {
      id: 3,
      text: "Products",
      url: "/product",
    },
    {
      id: 4,
      text: "Contact",
      url: "/contact",
    },
  ];
  const sidebarHandler = () => {
    dispatch({ type: "SIDEBARCLOSE", payload: false });
  };
  return (
    <>
      <div className="sidebar">
        <aside className={sidebar === true ? "sidebarActive aside" : "aside"}>
          <div className="container">
            <div className="logoClose">
              <div className="header-logo">
                <NavLink to="/">
                  <img src="/logo.png" alt="" />
                </NavLink>
              </div>
              <div
                className="close"
                onClick={() => {
                  dispatch({ type: "SIDEBARCLOSE", payload: false });
                }}
              >
                <span>
                  <AiOutlineClose size={"30px"} />
                </span>
              </div>
            </div>
          </div>
          <div className="navlinks">
            <ul className="ul">
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id} className="menuItem">
                    <Link
                      onClick={sidebarHandler}
                      style={{ textDecoration: "none", width: "100%" }}
                      to={url}
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="icons">
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
        </aside>
      </div>
    </>
  );
};

const t = (a) => a;
export default connect(t)(Sidebar);
