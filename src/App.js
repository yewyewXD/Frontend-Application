import React from "react";
import "./styles/AppStyles.scss";
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateAccountInfo: () => dispatch(updateAccountInfo()),
    updateUserInfo: () => dispatch(updateUserInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
