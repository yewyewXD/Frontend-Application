import React from "react";
import styled from "styled-components";
import logo from "../../images/innoloft_white_logo.svg";
import { GoSearch } from "react-icons/go";
import { CgChevronDown } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { VscThreeBars } from "react-icons/vsc";
import profileAvatar from "../../images/avatar.jpg";

const NavbarContainer = styled.div`
  @media (max-width: 1700px) {
    padding: 0.5rem 10rem;
  }
  @media (max-width: 1500px) {
    padding: 0.5rem 5rem;
  }
  @media (max-width: 1300px) {
    padding: 0.5rem 2rem;
  }
  @media (max-width: 1100px) {
    padding: 0.5rem 3rem;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const NavbarBrand = styled.a`
  @media (max-width: 1100px) {
    width: min-content;
    .logo-image {
      width: 90px;
    }
  }
`;

const NavbarToggler = styled.span`
  @media (max-width: 1100px) {
    display: flex !important;
  }
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const NavSearch = styled.form`
  @media (max-width: 1100px) {
    justify-content: center;
    margin: 0;
    width: min-content;
    .search-inner__input-bar {
      width: 400px;
    }
  }

  @media (max-width: 768px) {
    .search-inner__input-bar {
      width: 40vw;
    }
  }
  @media (max-width: 576px) {
    justify-content: flex-end;

    .search-inner__input-bar {
      width: 30vw;
    }
  }
`;

const NavbarNav = styled.div`
  @media (max-width: 1100px) {
    width: min-content;
  }
  @media (max-width: 576px) {
    .language-toggler,
    .notification {
      display: none;
    }
  }
`;

export default function Header() {
  return (
    <nav className="navbar">
      <NavbarContainer className="navbar__container">
        <NavbarToggler
          className="navbar__menu-toggler btn all-center"
          type="button"
        >
          <VscThreeBars />
        </NavbarToggler>

        <NavbarBrand className="navbar__brand" href="/">
          <img src={logo} alt="" className="logo-image" />
        </NavbarBrand>

        <NavSearch className="navbar__search">
          <div className="search-inner">
            <input
              className="search-inner__input-bar"
              type="text"
              placeholder="Enter interests, keywords, company name, etc..."
            />
            <button className="search-inner__search-btn btn" type="submit">
              <GoSearch />
            </button>
          </div>
        </NavSearch>

        <NavbarNav className="navbar__content">
          <div className="language-toggler all-center">
            EN <CgChevronDown fontSize="1.2rem" />
          </div>

          <div className="notification all-center">
            <IoMdNotificationsOutline fontSize="1.5rem" />
          </div>

          <div className="profile all-center">
            <img src={profileAvatar} alt="" className="profile__image" />
          </div>
        </NavbarNav>
      </NavbarContainer>
    </nav>
  );
}
