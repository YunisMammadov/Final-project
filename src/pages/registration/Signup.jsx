import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../../schemas";
import "./Registration.css"
import { connect } from "react-redux";

function Signup({ words, lang }) {
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
          <h1>{words[lang].createaccount}</h1>
          <h2>{words[lang].enterdetails}</h2>
        </div>
        <form className="signup-form" onSubmit={formik.handleSubmit}>
          <div className="signup-address">
            <p>{words[lang].firstname}</p>
            <input
              id="firstname"
              name="firstname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstname}
              type="text"
              placeholder={words[lang].writefirstname}
            />
            {formik.errors.firstname && formik.touched.firstname && (
              <p style={{ color: "red" }}>{formik.errors.firstname}</p>
            )}
          </div>
          <div className="signup-address">
            <p>{words[lang].lastname}</p>
            <input
              id="lastname"
              name="lastname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname}
              type="text"
              placeholder={words[lang].writelastname}
            />
            {formik.errors.lastname && formik.touched.lastname && (
              <p style={{ color: "red" }}>{formik.errors.lastname}</p>
            )}
          </div>
          <div className="signup-address">
            <p>{words[lang].emailaddress}</p>
            <input
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
          <div className="signup-address">
            <p>{words[lang].password}</p>
            <input
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
          <div className="signup-rem">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              onChange={formik.handleChange}
              value={formik.values.terms}
            />
            <label htmlFor="terms">{words[lang].termsconditions}</label>
          </div>
          {formik.errors.terms && (
            <p style={{ color: "red" }}>{formik.errors.terms}</p>
          )}

          <button to="/forgot_password" type="submit">
            {words[lang].signup}
          </button>
        </form>
      </div>
    </section>
  );
}
const t = (a) => a;
export default connect(t)(Signup);
