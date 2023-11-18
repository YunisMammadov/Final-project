import { NavLink } from "react-router-dom";
import "./Manage_address.css";
import { useState } from "react";
import { connect } from "react-redux";

function Address_modal({ words, lang }) {
  const [newAddresses, setNewAddresses] = useState([]);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("Baku");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("Azerbaijan");
  const [useAsDefault, setUseAsDefault] = useState(false);

  const addNewAddress = () => {
    const newAddress = {
      name: name,
      mobileNumber: mobileNumber,
      address1: address1,
      address2: address2,
      city: city,
      pinCode: pinCode,
      state: state,
      useAsDefault: useAsDefault,
    };

    setNewAddresses([...newAddresses, newAddress]);
    setName("");
    setMobileNumber("");
    setAddress1("");
    setAddress2("");
    setCity("Baku");
    setPinCode("");
    setState("Azerbaijan");
    setUseAsDefault(false);
  };
  return (
    <>
      <section id="address-modal">
        <div className="address-modal">
          <div className="address-modal-up">
            <p>{words[lang].addaddress}</p>
          </div>
          <form className="address-modal-down">
            <div className="address-modal-input">
              <p>{words[lang].name}</p>
              <input
                type="text"
                placeholder={words[lang].entername}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="address-modal-input">
              <p>{words[lang].mobilenumber}</p>
              <input
                type="text"
                placeholder={words[lang].addmobilenumber}
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="address-modal-input">
              <p>{words[lang].flat}</p>
              <input
                type="text"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
            </div>
            <div className="address-modal-input">
              <p>{words[lang].area}</p>
              <input
                type="text"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </div>
            <div className="address-modal-input">
              <p>{words[lang].city}</p>
              <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="Baku">{words[lang].baku}</option>
                <option value="London">London</option>
                <option value="Washington">Washington</option>
                <option value="Berlin">Berlin</option>
                <option value="Ankara">Ankara</option>
                <option value="Paris">Paris</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="address-modal-input">
              <p>{words[lang].pinkod}</p>
              <input
                type="text"
                placeholder={words[lang].addpinkod}
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
            <div className="address-modal-input">
              <p>{words[lang].state}</p>
              <select value={state} onChange={(e) => setState(e.target.value)}>
                <option value="Azerbaijan">{words[lang].aze}</option>
                <option value="England">England</option>
                <option value="USA">USA</option>
                <option value="Germany">Germany</option>
                <option value="Turkey">Turkey</option>
                <option value="France">France</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="default-address-modal">
              <input
                type="checkbox"
                name="useAsDefault"
                id="useAsDefault"
                checked={useAsDefault}
                onChange={(e) => setUseAsDefault(e.target.checked)}
              />
              <p>{words[lang].useaddress}</p>
            </div>
            <div className="address-modal-buttons">
              <button className="modal-cancel-btn">
                <NavLink>{words[lang].cancel}</NavLink>
              </button>
              <button
                className="address-modal-btn"
                type="button"
                onClick={addNewAddress}
              >
                <NavLink>Add New Address</NavLink>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

const t = (a) => a;
export default connect(t)(Address_modal);
