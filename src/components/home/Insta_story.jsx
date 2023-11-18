import { connect } from "react-redux";
function Insta_Story({ words, lang }) {
  return (
    <section className="instagram">
      <div className="container">
        <div className="insta">
          <div className="insta-text">
            <p>{words[lang].instastory}</p>
          </div>
          <div className="insta-stories">
            <div className="insta-story">
              <img src="/insta-story1.png" alt="" />
              <div className="insta-icon">
                <a href="https://www.instagram.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <rect
                      x="1.66675"
                      y="1.6665"
                      width="16.6667"
                      height="16.6667"
                      rx="4"
                      stroke="#131118"
                      stroke-width="1.5"
                    />
                    <ellipse
                      cx="15.0001"
                      cy="4.99984"
                      rx="0.833333"
                      ry="0.833333"
                      fill="#131118"
                    />
                    <circle
                      cx="9.99992"
                      cy="10.0002"
                      r="4.16667"
                      stroke="#131118"
                      stroke-width="1.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="insta-story">
              <img src="/insta-story2.png" alt="" />
              <div className="insta-icon">
                <a href="https://www.instagram.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <rect
                      x="1.66675"
                      y="1.6665"
                      width="16.6667"
                      height="16.6667"
                      rx="4"
                      stroke="#131118"
                      stroke-width="1.5"
                    />
                    <ellipse
                      cx="15.0001"
                      cy="4.99984"
                      rx="0.833333"
                      ry="0.833333"
                      fill="#131118"
                    />
                    <circle
                      cx="9.99992"
                      cy="10.0002"
                      r="4.16667"
                      stroke="#131118"
                      stroke-width="1.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="insta-story">
              <img src="/insta-story3.png" alt="" />
              <div className="insta-icon">
                <a href="https://www.instagram.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <rect
                      x="1.66675"
                      y="1.6665"
                      width="16.6667"
                      height="16.6667"
                      rx="4"
                      stroke="#131118"
                      stroke-width="1.5"
                    />
                    <ellipse
                      cx="15.0001"
                      cy="4.99984"
                      rx="0.833333"
                      ry="0.833333"
                      fill="#131118"
                    />
                    <circle
                      cx="9.99992"
                      cy="10.0002"
                      r="4.16667"
                      stroke="#131118"
                      stroke-width="1.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="insta-story1">
              <img src="/signup.png" alt="" />
              <div className="insta-icon">
                <a href="https://www.instagram.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <rect
                      x="1.66675"
                      y="1.6665"
                      width="16.6667"
                      height="16.6667"
                      rx="4"
                      stroke="#131118"
                      stroke-width="1.5"
                    />
                    <ellipse
                      cx="15.0001"
                      cy="4.99984"
                      rx="0.833333"
                      ry="0.833333"
                      fill="#131118"
                    />
                    <circle
                      cx="9.99992"
                      cy="10.0002"
                      r="4.16667"
                      stroke="#131118"
                      stroke-width="1.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const t = (a) => a;
export default connect(t)(Insta_Story);
