import React from "react";
import styled from "styled-components";

const MainHeading = styled.h1`
  font-size: 22px;
  margin: 0 0 15px 0;
`;

const MainSubheading = styled.div`
  font-size: 16px;
  margin: 0 0 15px 0;
  font-weight: 300;
`;

export default function Feed() {
  return (
    <div className="dashboard-main">
      <MainHeading className="main-heading">User Profile Setting</MainHeading>

      <MainSubheading className="main-subheading">
        Edit you account and personal information here
      </MainSubheading>
    </div>
  );
}
