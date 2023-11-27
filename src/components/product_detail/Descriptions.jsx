import { connect } from "react-redux";

function Descriptions({ words, lang }) {
  return (
    <div className="product-down-text">
      <p>{words[lang].productdescription}</p>
      <span>{words[lang].productdescription1}</span>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(Descriptions);
