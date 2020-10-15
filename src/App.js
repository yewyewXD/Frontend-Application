import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { updateAccountInfo, updateUserInfo } from "./redux/actions/UserProfile";

function App(props) {
  return (
    <div className="App">
      <hi>hi from app {props.email}</hi>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.userProfile.email,
  };
};

export default connect(mapStateToProps, { updateAccountInfo, updateUserInfo })(
  App
);
