import React, { useState } from "react";
import "../components/styles/SettingsPage.css";

const SettingsPage = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [theme, setTheme] = useState("Light");
  const [email, setEmail] = useState("user@example.com");
  const [username, setUsername] = useState("User123");

  const handleSave = () => {
    alert("Settings have been saved successfully!");
    console.log({
      notificationsEnabled,
      theme,
      email,
      username,
    });
  };

  const handleClearData = () => {
    alert("Your journal data has been cleared.");
  };

  const handleExportData = () => {
    alert("Exporting your journal data...");
  };

  return (
    <div className="settings-container">
      <h1 className="settings-title">Settings</h1>

      {/* General Settings */}
      <section className="settings-section">
        <h2>General</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </section>

      {/* Notification Settings */}
      <section className="settings-section">
        <h2>Notifications</h2>
        <label className="toggle-label">
          Enable Notifications:
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
          />
        </label>
      </section>

      {/* Theme Selection */}
      <section className="settings-section">
        <h2>Appearance</h2>
        <label>
          Theme:
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </label>
      </section>

      {/* Privacy Settings */}
      <section className="settings-section">
        <h2>Privacy</h2>
        <button onClick={handleClearData} className="danger-button">
          Clear Journal Data
        </button>
        <button onClick={handleExportData} className="normal-button">
          Export Journal Data
        </button>
      </section>

      {/* Save Button */}
      <div className="save-container">
        <button onClick={handleSave} className="save-button">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
