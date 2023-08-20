import { NavLink } from "react-router-dom";
function Signup() {
  return (
    <section className="signup">
      <div className="signup-logo">
        <img src="/logo.png" alt="" />
      </div>
      <div className="signup-img">
        <img src="/signup.png" alt="" />
      </div>
      <div className="signup-text">
        <div className="signup-txt">
          <h1>Create New Account </h1>
          <h2>Please enter details</h2>
        </div>
        <form className="signup-form">
          <div className="signup-address">
            <p>First Name</p>
            <input type="text" placeholder="please write your first name" />
          </div>
          <div className="signup-address">
            <p>Last Name</p>
            <input type="text" placeholder="please write your last name" />
          </div>
          <div className="signup-address">
            <p>Email Address</p>
            <input type="email" placeholder="please write your email address" />
          </div>
          <div className="signup-address">
            <p>Password</p>
            <input type="password" placeholder="please write your password" />
          </div>
          <div className="signup-rem">
            <input type="checkbox" />
            <p>
              I agree to the <span>Terms & Conditions</span>
            </p>
          </div>
        </form>
        <NavLink to="/forgot_password" type="submit">
          Signup
        </NavLink>
      </div>
    </section>
  );
}

export default Signup;
