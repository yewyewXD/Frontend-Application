import React, { useState } from "react";

export default function UserSetting() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");

  function submitUserSetting(e) {
    e.preventDefault();
  }

  return (
    <form className="user-setting" onSubmit={submitUserSetting}>
      <div className="form-group">
        <label htmlFor="firstName" className="form-label">
          <b>First Name</b>
        </label>
        <input
          type="text"
          className="form-input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName" className="form-label">
          <b>Last Name</b>
        </label>
        <input
          type="text"
          className="form-input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="address" className="form-label">
          <b>Address</b>
        </label>
        <input
          type="text"
          className="form-input"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="country" className="form-label">
          <b>Country</b>
        </label>
        <input
          type="text"
          className="form-input"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>

      <button className="btn btn-primary btn-md">Save Changes</button>
    </form>
  );
}
