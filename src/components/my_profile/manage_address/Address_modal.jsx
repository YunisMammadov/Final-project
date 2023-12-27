import "./Manage_address.css";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

function Address_modal({ words, lang, onClose }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [country, setCountry] = useState("");
  const [cards, setCards] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    let card = {
      name: name,
      number: number,
      address: address,
      address2: address2,
      city: city,
      pin: pin,
      country: country,
    };

    let items = [...cards, card];
    setCards(items);

    localStorage.setItem("cards", JSON.stringify(items));

    setName("");
    setNumber("");
    setAddress("");
    setAddress2("");
    setCity("");
    setPin("");
    setCountry("");

    onClose();
  };

  useEffect(() => {
    if (localStorage.getItem("cards")) {
      setCards(JSON.parse(localStorage.getItem("cards")));
    } else {
      setCards([]);
    }
  }, []);

  return (
    <>
      <section id="address-modal">
        <div className="address-modal" onClick={(e) => e.stopPropagation()}>
          <div className="address-modal-up">
            <p>{words[lang].addaddress}</p>
          </div>

          <form className="address-modal-down" onSubmit={submitHandler}>
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
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="address-modal-input">
              <p>{words[lang].flat}</p>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
              </select>
            </div>
            <div className="address-modal-input">
              <p>{words[lang].pinkod}</p>
              <input
                type="text"
                placeholder={words[lang].addpinkod}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </div>
            <div className="address-modal-input">
              <p>{words[lang].state}</p>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="Azerbaijan">{words[lang].aze}</option>
                <option value="England">England</option>
                <option value="USA">USA</option>
                <option value="Germany">Germany</option>
                <option value="Turkey">Türkiye</option>
                <option value="France">France</option>
              </select>
            </div>
            <div className="address-modal-buttons">
              <button
                className="modal-cancel-btn"
                type="button"
                onClick={onClose}
              >
                {words[lang].cancel}
              </button>
              <button className="address-modal-btn" type="submit">
                {words[lang].addaddress}
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
