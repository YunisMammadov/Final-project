import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Search.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Search({ searchVisible, products, dispatch, words, lang }) {
  const search = useRef("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (search.current.value.trim() !== "") {
      const data = products.filter((x) =>
        x.title.toLowerCase().includes(search.current.value.toLowerCase())
      );
      setFilteredProducts(data);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <section
      className="searchSection"
      style={{ display: searchVisible ? "flex" : "none" }}
    >
      <div id="container">
        <form onSubmit={submitHandler} className="form">
          <div className="formItem">
            <input
              className="searchBar"
              ref={search}
              type="search"
              placeholder={words[lang].search}
            />
            <button style={{ color: "white", cursor: "pointer" }} type="submit">
              <svg
                width="30"
                height="30"
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
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch({
                  type: "SEARCHNOVISIBLE",
                  payload: false,
                });
              }}
              style={{ cursor: "pointer", color: "black" }}
            >
              <AiOutlineCloseCircle size={30} />
            </button>
          </div>

          {filteredProducts.length > 0 && (
            <div className="searchList">
              {filteredProducts.map((item) => {
                return (
                  <Link
                    to={`${item.id}/product_detail`}
                    onClick={() => {
                      setFilteredProducts(false);
                    }}
                    className="searchItem"
                    key={item.id}
                  >
                    <div className="item-title"> {item.title}</div>
                    <div className="item-img">
                      <img src={item.image} alt="" />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

const t = (a) => a;
export default connect(t)(Search);
