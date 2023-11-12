import { useState } from "react";
import { connect } from "react-redux";

import "./My_orders.css";
function My_orders({ words, lang }) {
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <section id="myorder">
      <div className="profile-up-right">
        <div className="profile-up-right-inp">
          <input
            type="text"
            placeholder={words[lang].search}
            value={searchText}
            onChange={handleInputChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            style={{ display: searchText ? "none" : "block" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5ZM11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75Z"
              fill="#131118"
            />
          </svg>
        </div>
        <button>
          {words[lang].filter}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 6H10"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 12H12"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 12H21"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 6L21 6"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 18H20"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 18H6"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle cx="8" cy="18" r="2" stroke="white" stroke-width="1.5" />
            <circle cx="17" cy="12" r="2" stroke="white" stroke-width="1.5" />
            <circle cx="12" cy="6" r="2" stroke="white" stroke-width="1.5" />
          </svg>
        </button>
      </div>
      <div className="profile-down-right">
        <div className="profile-down-right-order">
          <div className="my-order">
            <div className="order-left">
              <div className="order-left-up">
                <div className="order-image">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/5576/3d45/9184a253721acd1b282d80cd874bd19b?Expires=1695600000&Signature=KJK3ItcUgxxx5Qm8kWNZ8yyCGPdP5rQtkAEsR~0EthnfjJ4X6iUgQ2cmCJP7abHLZFK208bC~o1U7vANgcXz85clL5Pt6VDYIuXnPNGc~wufH0Okp~UTqLosBpMFkv-HS1c315bHnW0Y9woVqIOhWnxMsvbYz55yuJeVb2~AzXJwRqURC2mFF4Jn16f30NNXHr5-nJ1wdAtilhZZZ6rgHp-Kl8zZ3iobbVrenZGGM8dLBNXe9s~EmwRL~Gt3U06YRv1vrsitlOAW2hMgEZNFszk4a0UwoDodv2pbNmOyT2nuyd299CVM6Llp6fD67suBKI96zV4dfZ-a6XmT0XofTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div className="order-info">
                  <h3>Girls Pink Moana Printed Dress</h3>
                  <p>Size: S</p>
                  <p>Qyt: 1</p>
                </div>
              </div>
              <div className="order-left-bottom">
                <button className="btn-delivered">
                  {words[lang].Delivered}
                </button>
                <p>{words[lang].productdel}</p>
              </div>
            </div>
            <div className="order-right">
              <div className="order-right-left">
                <p>$80.00</p>
              </div>
              <div className="order-right-right">
                <button className="view-order">{words[lang].vieworder}</button>
                <button className="write-order">
                  {words[lang].writereview}
                </button>
              </div>
            </div>
          </div>
          <div className="my-order-rect"></div>
          <div className="my-order">
            <div className="order-left">
              <div className="order-left-up">
                <div className="order-image">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/3d30/4ae5/ab098881655b8003736dc40c7b639ebf?Expires=1695600000&Signature=ncqryaH6DWS4xL2xE-ngc6M0v1AmR9gZqY8uzQbt~Ch7N1lyJ-QGX6CkEdqhkrEMVWr24KdpY63UA~j9tJWf2Y3EkC4hUm2zMyvQi9-OLlaHmg1MC0QSIZMAli3~hwzkR1Cy83GA1DtvN7JyF0N6g7SKxqF10fAZgZZQAHXv72~r9Yy41fscVfLD4bK0HaTsdh~F-aZJsyzXWm1wcR77urFhOijaL~r1nosy5XbrsnMOpWvVIFr-NatFaPeDYDI8vRVnpAtelNmAAvQQ~1xkKVFb1agY2M1ifcGv7gjRiW5rQDs20fZBXl8OB04EPkGGRta-L~phXLsTuBBw11BdsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div className="order-info">
                  <h3>Women Textured Handheld Bag</h3>
                  <p>Size: Regular</p>
                  <p>Qyt: 1</p>
                </div>
              </div>
              <div className="order-left-bottom">
                <button className="btn-inprocess">
                  {words[lang].inprocess}
                </button>
                <p>{words[lang].productprocess}</p>
              </div>
            </div>
            <div className="order-right">
              <div className="order-right-left">
                <p>$80.00</p>
              </div>
              <div className="order-right-right">
                <button className="view-order">{words[lang].vieworder}</button>
                <button className="cancel-order">
                  {words[lang].CancelOrder}
                </button>
              </div>
            </div>
          </div>
          <div className="my-order-rect"></div>
         
        </div>
      </div>
    </section>
  );
}

const t = (a) => a;
export default connect(t)(My_orders);