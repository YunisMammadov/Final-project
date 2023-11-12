import "./Settings.css";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

function Settings({ dispatch, words, lang }) {
  const [switchStates, setSwitchStates] = useState({
    language: false,
    twoFactorAuth: false,
    pushNotifications: false,
    desktopNotifications: false,
    emailNotifications: false,
  });

  useEffect(() => {
    const savedSwitchStates = JSON.parse(localStorage.getItem("switchStates"));
    if (savedSwitchStates) {
      setSwitchStates(savedSwitchStates);
    }
  }, []);

  const handleSwitchToggle = (switchName) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [switchName]: !prevState[switchName],
    }));
  };

  useEffect(() => {
    localStorage.setItem("switchStates", JSON.stringify(switchStates));
  }, [switchStates]);

  return (
    <div className="profile-down-right">
      <div className="all-settings">
        <div className="settings-card">
          <div className="settings-left">
            <h1>{words[lang].Language}</h1>
            <p>{words[lang].Language1}</p>
          </div>
          <div className="settings-right">
            <select name="" id="">
              <option value="az">{words[lang].aze}</option>
              <option value="en">{words[lang].eng}</option>
            </select>
          </div>
        </div>
        <div className="settings-rect"></div>
        <div className="settings-card">
          <div className="settings-left">
            <h1>{words[lang].twofactor}</h1>
            <p>{words[lang].twofactor1}</p>
          </div>
          <div className="settings-right">
            <div
              className={`switcher ${switchStates.twoFactorAuth ? "on" : ""}`}
              onClick={() => handleSwitchToggle("twoFactorAuth")}
            >
              <div
                className={`slider ${switchStates.twoFactorAuth ? "on" : ""}`}
              ></div>
            </div>
          </div>
        </div>
        <div className="settings-rect"></div>
        <div className="settings-card">
          <div className="settings-left">
            <h1>{words[lang].pushnoti}</h1>
            <p>{words[lang].pushnoti1}</p>
          </div>
          <div className="settings-right">
            <div
              className={`switcher ${
                switchStates.pushNotifications ? "on" : ""
              }`}
              onClick={() => handleSwitchToggle("pushNotifications")}
            >
              <div
                className={`slider ${
                  switchStates.pushNotifications ? "on" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div className="settings-rect"></div>
        <div className="settings-card">
          <div className="settings-left">
            <h1>{words[lang].detskompnoti}</h1>
            <p>{words[lang].detskompnoti1}</p>
          </div>
          <div className="settings-right">
            <div
              className={`switcher ${
                switchStates.desktopNotifications ? "on" : ""
              }`}
              onClick={() => handleSwitchToggle("desktopNotifications")}
            >
              <div
                className={`slider ${
                  switchStates.desktopNotifications ? "on" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div className="settings-rect"></div>
        <div className="settings-card">
          <div className="settings-left">
            <h1>{words[lang].emailnoti}</h1>
            <p>{words[lang].emailnoti1}</p>
          </div>
          <div className="settings-right">
            <div
              className={`switcher ${
                switchStates.emailNotifications ? "on" : ""
              }`}
              onClick={() => handleSwitchToggle("emailNotifications")}
            >
              <div
                className={`slider ${
                  switchStates.emailNotifications ? "on" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(Settings);
