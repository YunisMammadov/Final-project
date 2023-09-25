import "./Settings.css";
import { useState, useEffect } from "react";

function Settings() {
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
            <h1>Language</h1>
            <p>Select your language</p>
          </div>
          <div className="settings-right">
            <select name="" id="">
              <option value="">English</option>
              <option value="">Azerbaijan</option>
            </select>
          </div>
        </div>
        <div className="settings-rect"></div>
        <div className="settings-card">
          <div className="settings-left">
            <h1>Two-factor Authentication</h1>
            <p>Keep your account secure by enabling 2FA via mail</p>
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
            <h1>Push Notifications</h1>
            <p>Receive push notification</p>
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
            <h1>Desktop Notifications</h1>
            <p>Receive push notification in desktop</p>
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
            <h1>Email Notifications</h1>
            <p>Receive email notification</p>
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

export default Settings;
