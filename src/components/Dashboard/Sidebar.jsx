import React from "react";
import styled from "styled-components";
import profileAvatar from "../../images/avatar.jpg";

const SidebarContentContainer = styled.div`
  height: 83%;
  border-bottom: solid 1px lightgrey;
  overflow-y: auto;
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

const SidebarLink = styled.a`
  display: block;
  padding: 15px;
  transition: 0.3s;
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    background: lightgrey;
  }
`;

const Footer = styled.div`
  height: 17%;
  padding: 1rem 0;
  text-align: center;

  .footer-copyright {
    margin: 5px 0;
  }
`;

const FooterLinks = styled.div`
  flex-wrap: wrap;

  .footer-link {
    text-decoration: none;
    margin: 3px 7px;
    color: grey;
    &:hover {
      color: #272e71;
    }
  }
`;

const FooterSocialIcons = styled.div`
  margin: 5px 0;
  .footer-social-icon {
    margin: 0 5px;
  }
`;

const sidebarLinks = [
  { icon: "", text: "Home", path: "/" },
  { icon: "", text: "Members", path: "/" },
  { icon: "", text: "Marketplace", path: "/" },
  { icon: "", text: "Matching", path: "/" },
  { icon: "", text: "News", path: "/" },
  { icon: "", text: "Startups", path: "/" },
  { icon: "", text: "Companies", path: "/" },
  { icon: "", text: "Ecosystem", path: "/" },
  { icon: "", text: "Events", path: "/" },
  { icon: "", text: "Tools", path: "/" },
];

const footerLinks = [
  { text: "Contact", path: "/" },
  { text: "Data Privacy", path: "/" },
  { text: "Imprint", path: "/" },
  { text: "Terms of use", path: "/" },
  { text: "Blog", path: "/" },
];

const footerSocialIcons = [
  { icon: "", path: "/" },
  { icon: "", path: "/" },
  { icon: "", path: "/" },
  { icon: "", path: "/" },
  { icon: "", path: "/" },
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

          {sidebarLinks.map((link) => (
            <SidebarLink href={link.path} key={link.text}>
              {link.text}
            </SidebarLink>
          ))}
        </div>
      </SidebarContentContainer>

      <Footer className="footer">
        <FooterLinks className="footer-links all-center">
          {footerLinks.map((footerLink) => (
            <a
              href={footerLink.path}
              key={footerLink.text}
              className="footer-link"
            >
              {footerLink.text}
            </a>
          ))}
        </FooterLinks>

        <div className="footer-copyright">&copy; 2020 Innoloft GmbH</div>

        <FooterSocialIcons className="footer-social-icons">
          {footerSocialIcons.map((socialIcon) => (
            <a className="footer-social-icon" href={socialIcon.path}>
              {socialIcon.icon}
            </a>
          ))}
        </FooterSocialIcons>
      </Footer>
    </div>
  );
}
