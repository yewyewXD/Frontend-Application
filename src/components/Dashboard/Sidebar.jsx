import React from "react";
import styled from "styled-components";
import profileAvatar from "../../images/avatar.jpg";
import { FaFacebookF, FaTwitter, FaXing, FaLinkedinIn } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";

const SidebarContentContainer = styled.div`
  height: 83%;
  border-bottom: solid 1px lightgrey;
  overflow-y: auto;
`;

const SidebarProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  .profile-image {
    height: 90px;
    width: 90px;
    border-radius: 50%;
    margin-right: 1rem;
  }

  @media (max-width: 1300px) {
    .profile-image {
      height: 80px;
      width: 80px;
    }
  }

  .sidebar-profile-icon {
    margin-right: 5px;
  }
`;

const SidebarLink = styled.a`
  display: block;
  padding: 15px 10px;
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
    font-size: 12px;
  }
`;

const FooterLinks = styled.div`
  flex-wrap: wrap;

  .footer-link {
    text-decoration: none;
    margin: 3px 7px;
    color: grey;
    &:hover {
      color: #272e71; //refactor
    }
  }
`;

const FooterSocialIcons = styled.div`
  margin: 10px 0;
  .footer-social-icon {
    margin: 0 5px;
    color: grey;
    &:hover {
      color: #272e71;
    }
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
  { icon: <FaFacebookF />, path: "https://www.facebook.com/innoloft/" },
  { icon: <FaTwitter />, path: "https://twitter.com/innoloft_net" },
  {
    icon: <FaXing />,
    path: "https://www.xing.com/companies/innoloftgmbh%2Fenergieloft",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/company/innoloft-gmbh/",
  },
];

export default function Sidebar() {
  return (
    <div className="dashboard__sidebar">
      <SidebarContentContainer className="sidebar-content-container">
        <div className="sidebar-content">
          <SidebarProfile className="sidebar-profile">
            <img src={profileAvatar} alt="" className="profile-image" />
            <button className="btn btn-primary btn-sm all-center">
              <IoMdExit className="sidebar-profile-icon" />
              Login
            </button>
          </SidebarProfile>

          {sidebarLinks.map((link) => (
            <SidebarLink href={link.path} key={link.text} target="_blank">
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
            <a
              key={socialIcon.path}
              className="footer-social-icon"
              href={socialIcon.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialIcon.icon}
            </a>
          ))}
        </FooterSocialIcons>
      </Footer>
    </div>
  );
}
