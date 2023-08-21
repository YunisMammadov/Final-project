import { NavLink } from "react-router-dom";
import { useState } from "react";
function Forgot_password() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const handleEmailChange = (event) => {
    setIsTouched(true);
    setEmail(event.target.value);
    setErrorMessage("");
  };

  const handleSendOTP = (event) => {
    e.preventDefault();
    if (!email.includes("@") || email.length < 8) {
      setErrorMessage("Email is not correct!");
    } else {
      setErrorMessage("");
    }
  };
  const isEmailValid = email.includes("@");

  return (
    <section className="forgot_password">
      <div className="forgot_password-img">
        <img src="/forgot.png" alt="" />
      </div>
      <div className="forgot_password-text">
        <div className="forgot_password-back">
          <NavLink to="/signup">
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
            <p>Back</p>
          </NavLink>
        </div>
        <div className="forgot_password-txt">
          <h1>Forgot Password</h1>
          <h2>
            Enter your registered email address. we'll send you a code to reset
            your password
          </h2>
        </div>
        <form className="forgot_password-form">
          <div className="forgot_password-address">
            <p>Email Address</p>
            <input
              type="email"
              placeholder="please write your email"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => setIsTouched(true)}
            />
          </div>
          {isTouched && !isEmailValid && (
            <p style={{ color: "red", marginTop: "5px" }}>
              Invalid email address!
            </p>
          )}
          <button type="submit" style={{ border: "none" }} disabled={!isEmailValid || email.length === 0} onClick={handleSendOTP}>
            <NavLink to="/enter_otp">
              Send OTP
            </NavLink>
          </button>
        </form>
        {isTouched && errorMessage && (
          <p style={{ color: "red" }}>{errorMessage}</p>
        )}
      </div>
    </section>
  );
}

export default Forgot_password;
