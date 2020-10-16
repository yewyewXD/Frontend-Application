import React from "react";
import "./styles/AppStyles.scss";
import "./styles/global.scss";
import { connect } from "react-redux";
import { updateAccountInfo, updateUserInfo } from "./redux/actions/UserProfile";
import Header from "./components/Dashboard/Header";
import Sidebar from "./components/Dashboard/Sidebar";
import Main from "./components/Dashboard/Main";
import News from "./components/Dashboard/News";

function App(props) {
  return (
    <>
      <Header />

      <main className="dashboard">
        <div className="dashboard-container">
          <Sidebar />
          <div className="dashboard-main-container">
            <Main />
            <News />
          </div>
        </div>
      </main>
    </>
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
    password,
    firstName,
    lastName,
    address,
    country,
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
