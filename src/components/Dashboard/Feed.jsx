import React from "react";
import styled from "styled-components";

const FeedHeading = styled.h1`
  font-size: 22px;
  margin: 0 0 15px 0;
`;

const FeedSubheading = styled.div`
  font-size: 16px;
  margin: 0 0 15px 0;
  font-weight: 300;
`;

export default function Feed() {
  return (
    <div className="dashboard-feed">
      <FeedHeading className="feed-heading">User Profile Setting</FeedHeading>

      <FeedSubheading className="feed-subheading">
        Edit you account and personal information here
      </FeedSubheading>
    </div>
  );
}
