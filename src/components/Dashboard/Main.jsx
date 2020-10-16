import React from "react";
import styled from "styled-components";

const MainHeading = styled.h1`
  font-size: 22px;
  margin: 0 0 15px 0;
`;

const MainSubheading = styled.div`
  font-size: 16px;
  margin: 0 0 30px 0;
  font-weight: 300;
`;

const MainCard = styled.div`
  border-radius: 5px;
  background: white;
  box-shadow: lightgrey 0px 0px 5px;

  .account-setting-tab,
  .user-setting-tab {
    transition: 0.3s;
    cursor: pointer;
    width: 50%;
    border-radius: 5px 0 0 0;
    text-align: center;
    padding: 10px 0;
    &.active {
      background: #272e71;
      color: white;
    }
    &:hover {
      opacity: 0.8;
    }
  }

  .user-setting-tab {
    border-radius: 0 5px 0 0;
  }
`;

const MainCardContent = styled.div`
  padding: 30px 25px;

  .form-group {
    margin-bottom: 24px;
  }
  .form-label {
    display: block;
    margin-bottom: 7px;
  }
  .form-input {
    font-size: 16px;
    padding: 10px;
    width: 60%;
    border: none;
    outline: none;
    background: #f4f4f4;
    &:focus {
      border-bottom: 3px solid #272e71;
      background: lightgrey;
    }
  }
  button {
    margin-top: 10px;
  }
`;

export default function Feed() {
  return (
    <div className="dashboard-main">
      <MainHeading className="main-heading">User Profile Setting</MainHeading>

      <MainSubheading className="main-subheading">
        Edit you account and personal information here
      </MainSubheading>

      <MainCard className="main-card">
        <div className="main-card-tabs all-center">
          <div className="account-setting-tab active">Account Setting</div>
          <div className="user-setting-tab">User Setting</div>
        </div>

        <MainCardContent className="main-card-content">
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
        </MainCardContent>
      </MainCard>
    </div>
  );
}
