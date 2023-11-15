import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { forgotpasswordSchema } from "../../schemas";
import "./Registration.css"
import { connect } from "react-redux";


function Forgot_password({ words, lang }) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotpasswordSchema,
    onSubmit: (values) => {
      navigate("/enter_otp");
    },
  });

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
            <p>{words[lang].back}</p>
          </NavLink>
        </div>
        <div className="forgot_password-txt">
          <h1>{words[lang].forgotpassword}</h1>
          <h2>{words[lang].enterforgotpassword}</h2>
        </div>
        <form className="forgot_password-form" onSubmit={formik.handleSubmit}>
          <div className="forgot_password-address">
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
          <button type="submit" style={{ border: "none" }}>
            {words[lang].sentotp}
          </button>
        </form>
      </div>
    </section>
  );
}
const t = (a) => a;
export default connect(t)(Forgot_password);

