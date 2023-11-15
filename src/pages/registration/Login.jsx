import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import { connect } from "react-redux";
import "./Registration.css"
function Login({ words, lang }) {
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
          <h1>{words[lang].welcome} 👋 </h1>
          <h2>{words[lang].pleaselogin}</h2>
        </div>
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <div className="login-address">
            <p>{words[lang].emailaddress}</p>
            <input
              className={
                formik.errors.email && formik.touched.email ? "input-error" : ""
              }
              id="email"
              name="email"
              type="email"
              placeholder={words[lang].enteremail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            {formik.errors.email && formik.touched.email && (
              <p style={{ color: "red" }}>{formik.errors.email}</p>
            )}
          </div>
          <div className="login-address">
            <p>{words[lang].password}</p>
            <input
              className={
                formik.errors.password && formik.touched.password
                  ? "input-error"
                  : ""
              }
              id="password"
              name="password"
              type="password"
              placeholder={words[lang].pleasepassword}
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
              <p>{words[lang].rememberme}</p>
            </div>
            <div className="login-forgot">
              <span>{words[lang].forgotpassword}</span>
            </div>
          </div>
          <button type="submit" style={{ border: "none" }}>
          {words[lang].submit}
          </button>
        </form>
      </div>
    </section>
  );
}
const t = (a) => a;
export default connect(t)(Login);