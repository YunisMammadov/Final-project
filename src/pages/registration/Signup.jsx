import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../../schemas";
import "./Registration.css"

function Signup() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      terms: false,
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      navigate("/forgot_password");
    },
  });
  return (
    <section className="signup">
      <div className="signup-logo">
        <NavLink to="/">
          <img src="/logo.png" alt="" />
        </NavLink>
      </div>
      <div className="signup-img">
        <img src="/signup.png" alt="" />
      </div>
      <div className="signup-text">
        <div className="signup-txt">
          <h1>Create New Account </h1>
          <h2>Please enter details</h2>
        </div>
        <form className="signup-form" onSubmit={formik.handleSubmit}>
          <div className="signup-address">
            <p>First Name</p>
            <input
              id="firstname"
              name="firstname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstname}
              type="text"
              placeholder="please write your first name"
            />
            {formik.errors.firstname && formik.touched.firstname && (
              <p style={{ color: "red" }}>{formik.errors.firstname}</p>
            )}
          </div>
          <div className="signup-address">
            <p>Last Name</p>
            <input
              id="lastname"
              name="lastname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname}
              type="text"
              placeholder="please write your last name"
            />
            {formik.errors.lastname && formik.touched.lastname && (
              <p style={{ color: "red" }}>{formik.errors.lastname}</p>
            )}
          </div>
          <div className="signup-address">
            <p>Email Address</p>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="please write your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <p style={{ color: "red" }}>{formik.errors.email}</p>
            )}
          </div>
          <div className="signup-address">
            <p>Password</p>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="please write your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <p style={{ color: "red" }}>{formik.errors.password}</p>
            )}
          </div>
          <div className="signup-rem">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              onChange={formik.handleChange}
              value={formik.values.terms}
            />
            <label htmlFor="terms">
              I agree to the <span>Terms & Conditions</span>
            </label>
          </div>
            {formik.errors.terms && (
              <p style={{ color: "red" }}>{formik.errors.terms}</p>
            )}

          <button to="/forgot_password" type="submit">
            Signup
          </button>
        </form>
      </div>
    </section>
  );
}

export default Signup;
