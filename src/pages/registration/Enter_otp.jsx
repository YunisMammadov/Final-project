import { NavLink } from "react-router-dom";
import { useState } from "react";
import Enter_otp_modal from "./Enter_otp_modal";
import "./Registration.css"
import { connect } from "react-redux";

function Enter_otp({ words, lang }) {
  const [open, setOpen] = useState(false);
  const inputCount = 5;
  const [otpInputs, setOtpInputs] = useState(new Array(inputCount).fill(""));

  const handleInputChange = (index, value) => {
    const newOtpInputs = [...otpInputs];
    newOtpInputs[index] = value;
    setOtpInputs(newOtpInputs);

    if (value && index < inputCount - 1) {
      const nextInput = document.getElementById(`input-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };
  const handleVerifyClick = () => {
    const filledInputsCount = otpInputs.filter(
      (inputValue) => inputValue !== ""
    ).length;
    if (filledInputsCount === inputCount) {
      setOpen(!open);
    } else {
      console.log("Lütfen tüm alanları doldurun.");
    }
  };
  return (
    <section className="enter_otp">
      <div className="enter_otp-img">
        <img src="/enter_otp.png" alt="" />
      </div>
      <div className="enter_otp-text">
        <div className="enter_otp-back">
          <NavLink to="/forgot_password">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/linear/arrow-left">
                <g id="arrow-left">
                  <path
                    id="Vector (Stroke)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5304 3.54963C15.8232 3.84252 15.8232 4.31739 15.5304 4.61029L9.01036 11.1303C8.53325 11.6074 8.53325 12.3925 9.01036 12.8696L15.5304 19.3896C15.8232 19.6825 15.8232 20.1574 15.5304 20.4503C15.2375 20.7432 14.7626 20.7432 14.4697 20.4503L7.9497 13.9303C6.8868 12.8674 6.8868 11.1325 7.9497 10.0696L14.4697 3.54963C14.7626 3.25673 15.2375 3.25673 15.5304 3.54963Z"
                    fill="#131118"
                  />
                </g>
              </g>
            </svg>
            <p>{words[lang].back}</p>
          </NavLink>
        </div>
        <div className="enter_otp-txt">
          <h1>{words[lang].enterotp}</h1>
          <h2>{words[lang].registeremail}</h2>
        </div>
        <form className="enter_otp-form">
          {otpInputs.map((inputValue, index) => (
            <input
              key={index}
              id={`input-${index}`}
              type="tel"
              value={inputValue}
              onChange={(event) => handleInputChange(index, event.target.value)}
              maxLength="1"
            />
          ))}
          <button onClick={handleVerifyClick} type="button">
            {words[lang].verify}
          </button>
          {open && <Enter_otp_modal />}
        </form>
      </div>
    </section>
  );
}
const t = (a) => a;
export default connect(t)(Enter_otp);
