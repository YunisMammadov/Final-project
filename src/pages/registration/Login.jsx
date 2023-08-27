import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import "./Registration.css"
function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      navigate("/signUp");
    },
  });
  return (
    <section className="login">
      <div className="login-logo">
        <NavLink to="/">
          <img src="/logo.png" alt="" />
        </NavLink>
      </div>
      <div className="login-img">
        <img src="/login.png" alt="" />
      </div>
      <div className="login-text">
        <div className="login-txt">
          <h1>Welcome 👋 </h1>
          <h2>Please login here</h2>
        </div>
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <div className="login-address">
            <p>Email Address</p>
            <input
              className={
                formik.errors.email && formik.touched.email ? "input-error" : ""
              }
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
          <div className="login-address">
            <p>Password</p>
            <input
              className={
                formik.errors.password && formik.touched.password
                  ? "input-error"
                  : ""
              }
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
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
