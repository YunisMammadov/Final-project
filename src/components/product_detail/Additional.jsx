import React from "react";
import { connect } from "react-redux";

function Additional({ words, lang }) {
  return (
    <div className="product-down-text">
      <div className="product-info-color">
        <p>{words[lang].color}</p>
        <span>{words[lang].colors}</span>
      </div>
      <div className="product-info-size">
        <p>{words[lang].size}</p>
        <span> S, M, L, XL, XXL</span>
      </div>
    </div>
  );
}
const t = (a) => a;
export default connect(t)(Additional);
