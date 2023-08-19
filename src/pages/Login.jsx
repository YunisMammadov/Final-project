import { NavLink } from "react-router-dom";
import { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const handleEmailChange = (event) => {
    setIsTouched(true);
    setEmail(event.target.value);
    setErrorMessage("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handlelogin = (e) => {
    e.preventDefault();
    if (!email.includes("@") || email.length < 8 || password.length < 8) {
      setErrorMessage("Email or password are not correct!");
    } else {
      setErrorMessage("");
    }
  };

  const isEmailValid = email.includes("@");

  return (
    <section className="login">
      <div className="login-logo">
        <img src="/logo.png" alt="" />
      </div>
      <div className="login-img">
        <img src="/login.png" alt="" />
      </div>
      <div className="login-text">
        <div className="login-txt">
          <h1>Welcome 👋 </h1>
          <h2>Please login here</h2>
        </div>
        <form className="login-form" onSubmit={handlelogin}>
          <div className="login-address">
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
              Email is not correct        </p>
          )}
          <div className="login-address">
            <p>Password</p>
            <input
              type="password"
              placeholder="please write your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="login-remember">
            <div className="login-rem">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <div className="login-forgot">
              <span>Forgot Password?</span>
            </div>
          </div>
          <button type="submit" style={{ border: "none" }}>
            <NavLink to="/signup" type="submit">
              Login
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

export default Login;

