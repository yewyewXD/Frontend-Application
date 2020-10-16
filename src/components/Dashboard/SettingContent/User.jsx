import React, { useState } from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../../redux/actions/UserProfile";

function UserSetting(props) {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [address, setAddress] = useState(props.address);
  const [country, setCountry] = useState(props.country);

  function submitUserSetting(e) {
    e.preventDefault();
    props.updateUserInfo(firstName, lastName, address, country);
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

const mapStateToProps = (state) => {
  const { firstName, lastName, address, country } = state.userProfile;
  return {
    firstName,
    lastName,
    address,
    country,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserInfo: (firstName, lastName, address, country) =>
      dispatch(updateUserInfo(firstName, lastName, address, country)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSetting);
