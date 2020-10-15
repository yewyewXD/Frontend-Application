import React from "react";
import "./styles/AppStyles.scss";
import { connect } from "react-redux";
import { updateAccountInfo, updateUserInfo } from "./redux/actions/UserProfile";

function App(props) {
  return (
    <div className="App">
      <h1>hi from app {props.email}</h1>
      <h2>hi from {props.address}</h2>
      <button
        onClick={() => props.updateAccountInfo("email@mail.com", "email")}
      >
        change
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  const {
    email,
    password,
    firstName,
    lastName,
    address,
    country,
  } = state.userProfile;
  return {
    email,
    address,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAccountInfo: (email, password) =>
      dispatch(updateAccountInfo(email, password)),

    updateUserInfo: (firstName, lastName, address, country) =>
      dispatch(updateUserInfo(firstName, lastName, address, country)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
