import React, { useState } from "react";

export default function AccountSetting() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  function submitAccountSetting(e) {
    e.preventDefault();
  }

  return (
    <form className="account-setting" onSubmit={submitAccountSetting}>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          <b>Email</b>
        </label>
        <input
          type="text"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">
          <b>Password</b>
        </label>
        <input
          type="password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="passwordRepeat" className="form-label">
          <b>Password Repeat</b>
        </label>
        <input
          type="password"
          className="form-input"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
        />
      </div>

      <button className="btn btn-primary btn-md">Save Changes</button>
    </form>
  );
}
