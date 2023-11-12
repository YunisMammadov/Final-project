import CountUp from "react-countup";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

function Deals_month({ words, lang }) {
  return (
    <section className="deals">
      <div className="container">
        <div className="deals-month">
          <div className="deals-month-text">
            <div className="deals-month-txt">
              <div className="deals-month-info">
                <p>{words[lang].dealsmonth}</p>
                <span>{words[lang].dealmonth}</span>
              </div>
              <div className="counters">
                <div className="counter">
                  <CountUp
                    start={0}
                    enableScrollSpy={true}
                    end={120}
                    duration={3}
                    delay={0}
                  >
                    {({ countUpRef, start }) => (
                      <div className="counter__inner">
                        <span ref={countUpRef} />
                        <p>{words[lang].days}</p>
                      </div>
                    )}
                  </CountUp>
                </div>
                <div className="counter">
                  <CountUp
                    start={0}
                    end={18}
                    duration={3}
                    enableScrollSpy={true}
                    delay={0}
                  >
                    {({ countUpRef, start }) => (
                      <div className="counter__inner">
                        <span ref={countUpRef} />
                        <p>{words[lang].hours}</p>
                      </div>
                    )}
                  </CountUp>
                </div>
                <div className="counter">
                  <CountUp
                    start={0}
                    end={15}
                    duration={3}
                    enableScrollSpy={true}
                    delay={0}
                  >
                    {({ countUpRef, start }) => (
                      <div className="counter__inner">
                        <span ref={countUpRef} />
                        <p>{words[lang].mins}</p>
                      </div>
                    )}
                  </CountUp>
                </div>
                <div className="counter">
                  <CountUp
                    start={0}
                    end={10}
                    duration={3}
                    enableScrollSpy={true}
                    delay={0}
                  >
                    {({ countUpRef, start }) => (
                      <div className="counter__inner">
                        <span ref={countUpRef} />
                        <p>{words[lang].secs}</p>
                      </div>
                    )}
                  </CountUp>
                </div>
              </div>
            </div>
            <button>
              <NavLink to="/product">
                <p>{words[lang].wievproducts}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5303 4.46967C13.8232 4.76256 13.8232 5.23744 13.5303 5.53033L9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967L11.1893 5.75L1 5.75C0.585787 5.75 0.25 5.41421 0.25 5C0.25 4.58579 0.585787 4.25 1 4.25L11.1893 4.25L8.46967 1.53033C8.17678 1.23744 8.17678 0.762563 8.46967 0.46967C8.76256 0.176776 9.23744 0.176776 9.53033 0.46967L13.5303 4.46967Z"
                    fill="white"
                  />
                </svg>
              </NavLink>
            </button>
          </div>
          <div className="deals-month-image">
            <img src="/Rectangle-month.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

const t = (a) => a;
export default connect(t)(Deals_month);
