import React, { useState } from "react";
import styled from "styled-components";
import AccountSetting from "./SettingContent/Account";
import UserSetting from "./SettingContent/User";

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
  const [setting, setSetting] = useState("account");

  function changeSettingContent(content) {
    setSetting(content);
  }

  return (
    <div className="dashboard-main">
      <MainHeading className="main-heading">User Profile Setting</MainHeading>

      <MainSubheading className="main-subheading">
        Edit you account and personal information here
      </MainSubheading>

      <MainCard className="main-card">
        <div className="main-card-tabs all-center">
          <div
            className={`account-setting-tab ${
              setting === "account" && "active"
            }`}
            onClick={() => changeSettingContent("account")}
          >
            Account Setting
          </div>
          <div
            className={`user-setting-tab ${setting === "user" && "active"}`}
            onClick={() => changeSettingContent("user")}
          >
            User Setting
          </div>
        </div>

        <MainCardContent className="main-card-content">
          {setting === "account" && <AccountSetting />}
          {setting === "user" && <UserSetting />}
        </MainCardContent>
      </MainCard>
    </div>
  );
}
