import { NavLink } from "react-router-dom";
import "./Manage_address.css";
import { useState } from "react";
function Address_modal() {
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
            <p>Add a new address</p>
          </div>
          <form className="address-modal-down">
            <div className="address-modal-input">
              <p>Name</p>
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="address-modal-input">
              <p>Mobile Number</p>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="address-modal-input">
              <p>Flat, House no., Building, Company, Apartment</p>
              <input
                type="text"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
            </div>
            <div className="address-modal-input">
              <p>Area, Colony, Street, Sector, Village</p>
              <input
                type="text"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </div>
            <div className="address-modal-input">
              <p>City</p>
              <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="Baku">Baku</option>
                <option value="London">London</option>
                <option value="Washington">Washington</option>
                <option value="Berlin">Berlin</option>
                <option value="Ankara">Ankara</option>
                <option value="Paris">Paris</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="address-modal-input">
              <p>Pin Code</p>
              <input
                type="text"
                placeholder="Enter Pin Code"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
            <div className="address-modal-input">
              <p>State</p>
              <select value={state} onChange={(e) => setState(e.target.value)}>
                <option value="Azerbaijan">Azerbaijan</option>
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
              <p>Use as my default address</p>
            </div>
            <div className="address-modal-buttons">
              <button className="modal-cancel-btn">
                <NavLink>Cancel</NavLink>
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

export default Address_modal;
