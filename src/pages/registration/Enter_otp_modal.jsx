import { NavLink } from "react-router-dom";
import "./Registration.css"

function Enter_otp_modal() {
  return (
    <section className="enter-modal">
      <div className="enter-modal-password">
        <div className="enter-modal-rectangle">
          <div className="modal-ellipse">
            <svg
              width="108"
              height="108"
              viewBox="0 0 108 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                id="Ellipse19"
                cx="54"
                cy="54"
                r="54"
                fill="#131118"
                fill-opacity="0.05"
              />
            </svg>
            <svg
              width="86"
              height="86"
              viewBox="0 0 86 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                id="Ellipse18"
                cx="43"
                cy="43"
                r="43"
                fill="#131118"
                fill-opacity="0.1"
              />
            </svg>
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle id="Ellipse17" cx="32" cy="32" r="32" fill="#131118" />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Huge-icon/interface/solid/search 4">
                <path
                  id="Subtract"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.592 9.46049C16.8463 9.13353 16.7874 8.66232 16.4605 8.40802C16.1335 8.15372 15.6623 8.21262 15.408 8.53958L11.401 13.6914C11.3119 13.806 11.1443 13.8209 11.0364 13.7238L8.50173 11.4426C8.19385 11.1655 7.71963 11.1904 7.44254 11.4983C7.16544 11.8062 7.1904 12.2804 7.49828 12.5575L10.033 14.8387C10.7881 15.5183 11.9613 15.4143 12.585 14.6123L16.592 9.46049Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="enter-modal-text">
          <div className="enter-modal-txt">
            <h1>Password Changed Successfully</h1>
            <h2>Your password has been updated succesfully</h2>
          </div>
          <NavLink to="/login">Back to Login</NavLink>
        </div>
      </div>
    </section>
  );
}

export default Enter_otp_modal;
