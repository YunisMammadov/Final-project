import "./Our_story.css";
import { connect } from "react-redux";

function Our_story({ lang, words }) {
  return (
    <section className="our_story">
      <div className="our-story-banner"></div>
      <div className="container">
        <div className="our-story">
          <h2>{words[lang].ourstory}</h2>
          <ul className="timeline">
            <li className="event">
              <div className="event-year">2013</div>
              <div className="event-details">
                <h3>{words[lang].foundcompany}</h3>
                <p>{words[lang].foundcompany1}</p>
              </div>
              <div className="event-image">
                <img
                  src="https://minutes.co/wp-content/uploads/2019/03/shutterstock_1030961317-e1553607691316.jpg"
                  alt=""
                />
              </div>
            </li>
            <li className="event">
              <div className="event-year">2017</div>
              <div className="event-details">
                <h3>{words[lang].MilestoneAchieved}</h3>
                <p>{words[lang].MilestoneAchieved1}</p>
              </div>
              <div className="event-image">
                <img
                  src="https://www.sacfirm.com/wp-content/uploads/2018/05/GettyImages-616237916.jpg"
                  alt=""
                />
              </div>
            </li>
            <li className="event">
              <div className="event-year">2020</div>
              <div className="event-details">
                <h3>{words[lang].ExpandingHorizons}</h3>
                <p>{words[lang].ExpandingHorizons1}</p>
              </div>
              <div className="event-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttp5wGCoPEzosqTX158AWDKy8LtDBkH4GGQ&usqp=CAU"
                  alt=""
                />
              </div>
            </li>
            <li className="event">
              <div className="event-year">2023</div>
              <div className="event-details">
                <h3>{words[lang].DecadeSuccess}</h3>
                <p>{words[lang].DecadeSuccess1}</p>
              </div>
              <div className="event-image">
                <img
                  src="https://www.xiatech.co.uk/wp-content/uploads/2023/09/10-Years-of-Xiatech.png"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const t = (a) => a;
export default connect(t)(Our_story);
