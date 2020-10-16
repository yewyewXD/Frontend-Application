import React from "react";
import styled from "styled-components";
import profileAvatar from "../../images/avatar.jpg";

const SidebarContentContainer = styled.div`
  height: 83%;
  border-bottom: solid 1px lightgrey;
  overflow-y: scroll;
`;

const SidebarFooter = styled.div`
  height: 17%;
  padding: 1rem 0;
`;

const SidebarProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  img {
    height: 90px;
    width: 90px;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

const SidebarLink = styled.div`
  padding: 15px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: lightgrey;
  }
`;

const sidebarLinks = [
  { logo: "", text: "Home" },
  { logo: "", text: "Members" },
  { logo: "", text: "Marketplace" },
  { logo: "", text: "Matching" },
  { logo: "", text: "News" },
  { logo: "", text: "Startups" },
  { logo: "", text: "Companies" },
  { logo: "", text: "Ecosystem" },
  { logo: "", text: "Events" },
  { logo: "", text: "Tools" },
];

export default function Sidebar() {
  return (
    <div className="dashboard-sidebar">
      <SidebarContentContainer className="sidebar-content-container">
        <div className="sidebar-content">
          <SidebarProfile className="sidebar-profile">
            <img src={profileAvatar} alt="" />
            <button className="btn btn-primary btn-sm">Login</button>
          </SidebarProfile>

          {sidebarLinks.map((sidebarLink, index) => (
            <SidebarLink key={index}>{sidebarLink.text}</SidebarLink>
          ))}
        </div>
      </SidebarContentContainer>

      <SidebarFooter className="sidebar-footer">footer</SidebarFooter>
    </div>
  );
}
