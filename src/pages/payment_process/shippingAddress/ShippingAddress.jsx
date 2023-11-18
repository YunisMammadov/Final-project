import { NavLink } from "react-router-dom";
import "./ShippingAddress.css";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
function ShippingAddress({ totalAmount, words, lang }) {
  const [discountCode, setDiscountCode] = useState("");
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [country, setCountry] = useState("");
  const [cards, setCards] = useState([]);

  const [updateTrigger, setUpdateTrigger] = useState({});

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

    setCards([...cards, card]);
    
    let items = [...cards, card]
    localStorage.setItem('cards', JSON.stringify(items))

    setName("");
    setNumber("");
    setAddress("");
    setAddress2("");
    setCity("");
    setPin("");
    setCountry("");
  };

  const deleteHandler = (index) => {
    let deleteCards = cards.filter((item, i) => i !== index);
    console.log(deleteCards);
    setCards(deleteCards);
    let items = [...deleteCards]
    localStorage.setItem('cards', JSON.stringify(items))
  };

  const updateFinder = (index) => {
    let updateCard = cards.find((item, i) => i == index);
    setUpdateTrigger({ ...updateCard, index: index });
  };

  const updateHandler = (e) => {
    e.preventDefault();

    let updatedArr = cards.map((item, i) => {
      if (i == updateTrigger.index) {
        item.name = name;
        item.number = number;
        item.address = address;
        item.address2 = address2;
        item.city = city;
        item.pin = pin;
        item.country = country;
      }
      return item;
    });

    setCards(updatedArr);

    let items = [...updatedArr]
    localStorage.setItem('cards', JSON.stringify(items))

    setName("");
    setNumber("");
    setAddress("");
    setAddress2("");
    setCity("");
    setPin("");
    setCountry("");
    setUpdateTrigger({});
  };

  const applyDiscount = () => {
    if (isDiscountApplied) {
      alert("Discount code has already been used.");
      return;
    }
    if (discountCode === "Discount") {
      const discountAmount = totalAmount * 0.1;
      setAppliedDiscount(discountAmount);
      setIsDiscountApplied(true);
      localStorage.setItem("discountCode", "Discount");
    } else {
      alert("Geçersiz indirim kodu.");
    }
  };

  useEffect(() => {
    const storedDiscountCode = localStorage.getItem("discountCode");
    if (storedDiscountCode === "Discount") {
      setIsDiscountApplied(true);
      setAppliedDiscount(totalAmount * 0.1);
    }


    if(localStorage.getItem('cards')){
      console.log('var')
      setCards(JSON.parse(localStorage.getItem('cards')))
    }
    else{
      setCards([])
    }
  }, []);

  useEffect(() => {
    setName(updateTrigger.name);
    setNumber(updateTrigger.number);
    setAddress(updateTrigger.address);
    setAddress2(updateTrigger.address2);
    setCity(updateTrigger.city);
    setPin(updateTrigger.pin);
    setCountry(updateTrigger.country);
  }, [updateTrigger]);

  return (
    <>
      <div className="container">
        <div className="shipping">
          <div className="shipping-address-name">
            <p>{words[lang].shipaddress}</p>
          </div>
          <div className="shipping-address">
            <div className="shipping-address-left">
              <div className="shipping-address-up">
                <div className="payment-address">
                  <div className="payment-address-rect">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M13.3333 18.3337V15.0003C13.3333 13.1594 11.8409 11.667 10 11.667C8.15905 11.667 6.66667 13.1594 6.66667 15.0003V18.3337M17.5 8.45894V14.9727C17.5 16.8289 16.0076 18.3337 14.1667 18.3337H5.83333C3.99238 18.3337 2.5 16.8289 2.5 14.9727V8.45894C2.5 7.4498 2.9497 6.49407 3.72488 5.85576L7.89155 2.42478C9.11859 1.4144 10.8814 1.41439 12.1084 2.42478L16.2751 5.85576C17.0503 6.49407 17.5 7.4498 17.5 8.45894Z"
                        stroke="white"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                  <p>{words[lang].address}</p>
                </div>
                <div className="process-rect2"></div>
                <div className="payment-method">
                  <div className="payment-method-rect">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M1.66669 5.83333C1.66669 3.99238 3.15907 2.5 5.00002 2.5H15C16.841 2.5 18.3334 3.99238 18.3334 5.83333V14.1667C18.3334 16.0076 16.841 17.5 15 17.5H5.00002C3.15907 17.5 1.66669 16.0076 1.66669 14.1667V5.83333Z"
                        stroke="#131118"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.66669 5.83301H18.3334V9.16634H1.66669V5.83301Z"
                        stroke="#131118"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.66667 14.167H5"
                        stroke="#131118"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <p>{words[lang].payment}</p>
                </div>
                <div className="process-rect"></div>
                <div className="payment-review">
                  <div className="payment-review-rect">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M3.33331 5.66699C3.33331 3.45785 5.12417 1.66699 7.33331 1.66699H12.5098C13.5707 1.66699 14.5881 2.08842 15.3382 2.83857L17.1617 4.66209C17.9119 5.41223 18.3333 6.42965 18.3333 7.49051V14.3337C18.3333 16.5428 16.5425 18.3337 14.3333 18.3337H7.33331C5.12417 18.3337 3.33331 16.5428 3.33331 14.3337V5.66699Z"
                        stroke="#131118"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 5.83301L14.1667 5.83301"
                        stroke="#131118"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M7.5 10H14.1667"
                        stroke="#131118"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M7.5 14.167H10.8333"
                        stroke="#131118"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <p>{words[lang].reviews}</p>
                </div>
              </div>
              <div className="shipping-address-center">
                <div className="delivery">
                  <div className="delivery-info">
                    <h1>{words[lang].shipadddel}</h1>
                    <p>{words[lang].shipadddel1}</p>
                  </div>
                  <div className="delivery-rects">
                    {cards.map((address, index) => (
                      <div className="delivery-rect" key={index}>
                        <div className="delivery-rect-name">
                          <h1>{address.name}</h1>
                          {/* <input type="checkbox" /> */}
                        </div>
                        <span>
                          {address.number},{address.address}, {address.address2}
                          , {address.city}- {address.pin}, {address.country}
                        </span>
                        <div className="delivery-rect-buttons">
                          <button
                            className="edit-btn"
                            onClick={() => {
                              updateFinder(index);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_611_2101)">
                                <path
                                  d="M16.5 9V13.5C16.5 15.1569 15.1569 16.5 13.5 16.5H4.5C2.84315 16.5 1.5 15.1569 1.5 13.5V4.5C1.5 2.84315 2.84315 1.5 4.5 1.5H9M11.7648 3.01706C11.7648 3.01706 11.7648 4.08978 12.8375 5.16251C13.9102 6.23523 14.9829 6.23523 14.9829 6.23523M6.866 11.9922L9.11872 11.6704C9.44367 11.6239 9.7448 11.4734 9.9769 11.2413L16.0557 5.1625C16.6481 4.57006 16.6481 3.60951 16.0557 3.01706L14.9829 1.94434C14.3905 1.35189 13.4299 1.35189 12.8375 1.94434L6.75873 8.0231C6.52663 8.2552 6.37606 8.55633 6.32964 8.88128L6.00783 11.134C5.93631 11.6346 6.3654 12.0637 6.866 11.9922Z"
                                  stroke="#131118"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_611_2101">
                                  <rect width="18" height="18" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            {words[lang].edit}
                          </button>
                          <button
                            className="delete-btn"
                            onClick={() => {
                              deleteHandler(index);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="19"
                              height="18"
                              viewBox="0 0 19 18"
                              fill="none"
                            >
                              <path
                                d="M4.25 6V13.5C4.25 15.1569 5.59315 16.5 7.25 16.5H11.75C13.4069 16.5 14.75 15.1569 14.75 13.5V6M11 8.25V12.75M8 8.25L8 12.75M12.5 3.75L11.4453 2.16795C11.1671 1.75065 10.6988 1.5 10.1972 1.5H8.80278C8.30125 1.5 7.8329 1.75065 7.5547 2.16795L6.5 3.75M12.5 3.75H6.5M12.5 3.75H16.25M6.5 3.75H2.75"
                                stroke="#FF7262"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            {words[lang].del}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="delivery-btn">
                  <NavLink to="/payment_method">
                    {words[lang].deliveryhere}
                  </NavLink>
                </button>
                <div className="delivery-big-rect"></div>
              </div>
              <div className="shipping-address-down">
                <div className="new-address-up">
                  <p>{words[lang].addaddress}</p>
                </div>
                {/* <form className="new-address-down">
                  <div className="new-address-input">
                    <p>{words[lang].name}</p>
                    <input
                      type="text"
                      placeholder={words[lang].entername}
                      value={
                        editIndex !== null ? newAddresses[editIndex].name : name
                      }
                      onChange={(e) => handleInputChange(e, "name")}
                    />
                  </div>
                  <div className="new-address-input">
                    <p>{words[lang].mobilenumber}</p>
                    <input
                      type="text"
                      placeholder={words[lang].addmobilenumber}
                      value={
                        editIndex !== null
                          ? newAddresses[editIndex].mobileNumber
                          : mobileNumber
                      }
                      onChange={(e) => handleInputChange(e, "mobileNumber")}
                    />
                  </div>
                  <div className="new-address-input">
                    <p>{words[lang].flat}</p>
                    <input
                      type="text"
                      value={
                        editIndex !== null
                          ? newAddresses[editIndex].address1
                          : address1
                      }
                      onChange={(e) => handleInputChange(e, "address1")}
                    />
                  </div>
                  <div className="new-address-input">
                    <p>{words[lang].area}</p>
                    <input
                      type="text"
                      value={
                        editIndex !== null
                          ? newAddresses[editIndex].address2
                          : address2
                      }
                      onChange={(e) => handleInputChange(e, "address2")}
                    />
                  </div>
                  <div className="new-address-input">
                    <p>{words[lang].city}</p>
                    <select
                      value={
                        editIndex !== null ? newAddresses[editIndex].city : city
                      }
                      onChange={(e) => handleInputChange(e, "city")}
                    >
                      <option value="Baku">{words[lang].baku}</option>
                      <option value="London">London</option>
                      <option value="Washington">Washington</option>
                      <option value="Berlin">Berlin</option>
                      <option value="Ankara">Ankara</option>
                      <option value="Paris">Paris</option>
                    </select>
                  </div>
                  <div className="new-address-input">
                    <p>{words[lang].pinkod}</p>
                    <input
                      type="text"
                      placeholder={words[lang].addpinkod}
                      value={
                        editIndex !== null
                          ? newAddresses[editIndex].pinCode
                          : pinCode
                      }
                      onChange={(e) => handleInputChange(e, "pinCode")}
                    />
                  </div>
                  <div className="new-address-input">
                    <p>{words[lang].state}</p>
                    <select
                      value={
                        editIndex !== null
                          ? newAddresses[editIndex].state
                          : state
                      }
                      onChange={(e) => handleInputChange(e, "state")}
                    >
                      <option value="Azerbaijan">{words[lang].aze}</option>
                      <option value="England">England</option>
                      <option value="USA">USA</option>
                      <option value="Germany">Germany</option>
                      <option value="Turkey">Türkiye</option>
                      <option value="France">France</option>
                    </select>
                  </div>
                  <div className="default-address">
                    <input
                      type="checkbox"
                      name="useAsDefault"
                      id="useAsDefault"
                      checked={
                        editIndex !== null
                          ? newAddresses[editIndex].useAsDefault
                          : useAsDefault
                      }
                      onChange={(e) => handleInputChange(e, "useAsDefault")}
                    />
                    <p>{words[lang].useaddress}</p>
                  </div>

                  <button
                    className="new-address-btn"
                    type="button"
                    onClick={addNewAddress}
                  >
                    {editIndex !== null
                      ? words[lang].updateaddress
                      : words[lang].addaddress}
                  </button>
                </form> */}
                {Object.keys(updateTrigger).length == 0 ? (
                  <form className="new-address-down" onSubmit={submitHandler}>
                    <div className="new-address-input">
                      <p>{words[lang].name}</p>
                      <input
                        type="text"
                        placeholder={words[lang].entername}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="new-address-input">
                      <p>{words[lang].mobilenumber}</p>
                      <input
                        type="text"
                        placeholder={words[lang].addmobilenumber}
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                    <div className="new-address-input">
                      <p>{words[lang].flat}</p>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="new-address-input">
                      <p>{words[lang].area}</p>
                      <input
                        type="text"
                        value={address2}
                        onChange={(e) => setAddress2(e.target.value)}
                      />
                    </div>
                    <div className="new-address-input">
                      <p>{words[lang].city}</p>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      >
                        <option value="Baku">{words[lang].baku}</option>
                        <option value="London">London</option>
                        <option value="Washington">Washington</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Ankara">Ankara</option>
                        <option value="Paris">Paris</option>
                      </select>
                    </div>
                    <div className="new-address-input">
                      <p>{words[lang].pinkod}</p>
                      <input
                        type="text"
                        placeholder={words[lang].addpinkod}
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                      />
                    </div>
                    <div className="new-address-input">
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
                    {/* <div className="default-address">
                    <input
                      type="checkbox"
                      name="useAsDefault"
                      id="useAsDefault"
                      checked={
                        editIndex !== null
                          ? newAddresses[editIndex].useAsDefault
                          : useAsDefault
                      }
                      onChange={(e) => handleInputChange(e, "useAsDefault")}
                    />
                    <p>{words[lang].useaddress}</p>
                  </div> */}

                    <button className="new-address-btn" type="submit">
                      {words[lang].submit}
                    </button>
                  </form>
                ) : (
                  <form className="new-address-down" onSubmit={updateHandler}>
                    <div className="new-address-input">
                      <p>{words[lang].name}</p>
                      <input
                        type="text"
                        placeholder={words[lang].entername}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="new-address-input">
                      <p>{words[lang].mobilenumber}</p>
                      <input
                        type="text"
                        placeholder={words[lang].addmobilenumber}
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                    <div className="new-address-input">
                      <p>{words[lang].flat}</p>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="new-address-input">
                      <p>{words[lang].area}</p>
                      <input
                        type="text"
                        value={address2}
                        onChange={(e) => setAddress2(e.target.value)}
                      />
                    </div>
                    <div className="new-address-input">
                      <p>{words[lang].city}</p>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      >
                        <option value="Baku">{words[lang].baku}</option>
                        <option value="London">London</option>
                        <option value="Washington">Washington</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Ankara">Ankara</option>
                        <option value="Paris">Paris</option>
                      </select>
                    </div>
                    <div className="new-address-input">
                      <p>{words[lang].pinkod}</p>
                      <input
                        type="text"
                        placeholder={words[lang].addpinkod}
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                      />
                    </div>
                    <div className="new-address-input">
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
                    {/* <div className="default-address">
                    <input
                      type="checkbox"
                      name="useAsDefault"
                      id="useAsDefault"
                      checked={
                        editIndex !== null
                          ? newAddresses[editIndex].useAsDefault
                          : useAsDefault
                      }
                      onChange={(e) => handleInputChange(e, "useAsDefault")}
                    />
                    <p>{words[lang].useaddress}</p>
                  </div> */}

                    <button className="new-address-btn" type="submit">
                      {words[lang].updateaddress}
                    </button>
                  </form>
                )}
              </div>
            </div>
            <div className="subtotal-right1">
              <div className="subtotal-total">
                <p>{words[lang].subtotal}</p>
                <p>${totalAmount}</p>
              </div>
              <div className="subtotal-rect1"></div>
              <div className="subtotal-input">
                <p>{words[lang].discount}</p>
                <div className="subtotal-apply">
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                  />
                  <button onClick={applyDiscount}>{words[lang].apply}</button>
                </div>
              </div>
              <div className="subtotal-delivery">
                <p>{words[lang].delcharge}</p>
                <p>$5</p>
              </div>
              <div className="subtotal-rect1"></div>
              <div className="subtotal-total">
                <p>{words[lang].grandtotal}</p>
                <p>${totalAmount + 5 - appliedDiscount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const t = (a) => a;
export default connect(t)(ShippingAddress);
