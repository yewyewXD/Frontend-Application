import React from "react";

export default function UserSetting() {
  return (
    <form className="user-setting">
      <div className="form-group">
        <label htmlFor="firstName" className="form-label">
          <b>First Name</b>
        </label>
        <input type="text" className="form-input" />
      </div>

      <div className="form-group">
        <label htmlFor="lastName" className="form-label">
          <b>Last Name</b>
        </label>
        <input type="text" className="form-input" />
      </div>

      <div className="form-group">
        <label htmlFor="address" className="form-label">
          <b>Address</b>
        </label>
        <input type="text" className="form-input" />
      </div>

      <div className="form-group">
        <label htmlFor="country" className="form-label">
          <b>Country</b>
        </label>
        <input type="text" className="form-input" />
      </div>

      <button className="btn btn-primary btn-md">Save Changes</button>
    </form>
  );
}
