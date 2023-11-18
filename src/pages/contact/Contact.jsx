import "./Contact.css";
import { connect } from "react-redux";

function Contact({ lang, words }) {
  return (
    <main>
      <div className="container">
        <div className="contact">
          <div className="contact-text">
            <h1>
              <span>{words[lang].contactus}</span>
            </h1>
            <h2>{words[lang].contactus1}:)</h2>
            <form>
              <div
                className="inp"
                style={{
                  display: "flex",
                  gap: 5,
                  justifyContent: "space-between",
                }}
              >
                <input
                  name="Name"
                  placeholder={words[lang].name}
                  type="text"
                  required
                />
                <input
                  name="Surname"
                  placeholder={words[lang].surname}
                  type="text"
                  required
                />
              </div>
              <input
                name="Email"
                placeholder={words[lang].emailaddress}
                type="email"
                required
              />
              <textarea
                name="Message"
                placeholder={words[lang].message}
                cols="30"
                rows="10"
              ></textarea>
              <button type="submit" className="formSubmitBtn">
                {words[lang].submit}
              </button>
            </form>
          </div>
          <div className="contact-map">
            <div className="contact-map-info">
              <span>Yunis {words[lang].Mammadov},</span>
              <span> {words[lang].aze},</span>
              <span>C.Cabbarli 8b/26</span>
              <span>Mmmdov1905@gmail.com</span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d757.4952128432536!2d49.680798760257716!3d40.5861780814995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403096c7bbfcc65d%3A0xbe9dc20d22ead5e9!2sJafar%20Jabbarli%2C%20Sumqayit%205004!5e0!3m2!1saz!2saz!4v1694176881876!5m2!1saz!2saz"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

const t = (a) => a;
export default connect(t)(Contact);
