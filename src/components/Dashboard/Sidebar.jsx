import React from "react";
import styled from "styled-components";
import profileAvatar from "../../images/avatar.jpg";

const SidebarContentContainer = styled.div`
  height: 83%;
  border-bottom: solid 1px lightgrey;
  overflow-y: scroll;
`;

const SidebarContent = styled.div``;

const SidebarFooter = styled.div`
  height: 17%;
  padding: 1rem 0;
`;

const SidebarProfile = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 90px;
    width: 90px;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

export default function Sidebar() {
  return (
    <div className="dashboard-sidebar">
      <SidebarContentContainer className="sidebar-content-container">
        <SidebarContent className="sidebar-content">
          <SidebarProfile className="sidebar-profile">
            <img src={profileAvatar} alt="" />
            <button className="btn btn-primary btn-sm">Login</button>
          </SidebarProfile>
        </SidebarContent>
      </SidebarContentContainer>

      <SidebarFooter className="sidebar-footer">footer</SidebarFooter>
    </div>
  );
}
