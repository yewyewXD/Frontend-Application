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
      </MainCard>
    </div>
  );
}
