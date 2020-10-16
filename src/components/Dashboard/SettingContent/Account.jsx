import React from "react";

export default function AccountSetting() {
  return (
    <form className="account-setting">
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          <b>Email</b>
        </label>
        <input type="text" className="form-input" />
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">
          <b>Password</b>
        </label>
        <input type="password" className="form-input" />
      </div>

      <div className="form-group">
        <label htmlFor="passwordRepeat" className="form-label">
          <b>Password Repeat</b>
        </label>
        <input type="password" className="form-input" />
      </div>

      <button className="btn btn-primary btn-md">Save Changes</button>
    </form>
  );
}
