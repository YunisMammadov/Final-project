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
      text: "Shop",
      url: "/product",
    },
    {
      id: 3,
      text: "Our story",
      url: "/our_story",
    },
    {
      id: 4,
      text: "Blog",
      url: "/Bbog",
    },
    {
      id: 5,
      text: "Contact Us",
      url: "/contact_us",
    },
  ];
  const sidebarHandler = () => {
    dispatch({ type: "SIDEBARCLOSE", payload: false });
  };
  return (
    <>
      <div className="sidebar">
        <aside className={sidebar ? "sidebarActive aside" : "aside"}>
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
          </div>
        </aside>
      </div>
    </>
  );
};

const t = (a) => a;
export default connect(t)(Sidebar);
