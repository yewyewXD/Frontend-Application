import React from "react";
import styled from "styled-components";
import logo from "../../images/innoloft_white_logo.svg";
import { GoSearch } from "react-icons/go";
import { CgChevronDown } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { VscThreeBars } from "react-icons/vsc";
import profileAvatar from "../../images/avatar.jpg";

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

const NavbarContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0.5rem 13rem;

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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 19%;
  img {
    width: 50%;
  }

  @media (max-width: 1100px) {
    width: min-content;
    img {
      width: 90px;
    }
  }
`;

const NavbarToggler = styled.span`
  display: none;
  margin-right: 20px;
  color: white;
  font-size: 1.5rem;

  @media (max-width: 1100px) {
    display: flex;
  }
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const NavSearch = styled.form`
  width: 49%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 30px;

  .search-input {
    padding: 0.4rem 2.2rem 0.4rem 0.6rem;
    width: 100%;
    border-radius: 10px;
  }

  .search-btn {
    font-size: 18px;
    position: absolute;
    margin: 5px 0.6rem 0 0;
    cursor: pointer;
    background: none;
  }

  @media (max-width: 1100px) {
    justify-content: center;
    margin: 0;
    width: min-content;
    .search-input {
      width: 400px;
    }
  }

  @media (max-width: 768px) {
    .search-input {
      width: 40vw;
    }
  }
  @media (max-width: 576px) {
    justify-content: flex-end;

    .search-input {
      width: 30vw;
    }
  }
`;

const NavSearchContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavbarNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 26%;

  .language-toggler,
  .notification,
  .profile {
    cursor: pointer;
    color: white;
  }

  .notification {
    margin: 0 15px;
  }

  .profile img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
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
    <Navbar className="navbar bg-theme">
      <NavbarContainer className="navbar-container">
        <NavbarToggler className="navbar-toggler btn all-center" type="button">
          <VscThreeBars />
        </NavbarToggler>

        <NavbarBrand className="navbar-brand" href="/">
          <img src={logo} alt="" />
        </NavbarBrand>

        <NavSearch className="nav-search">
          <NavSearchContainer className="nav-search-container">
            <input
              class="search-input"
              type="text"
              placeholder="Enter interests, keywords, company name, etc..."
            />
            <button class="search-btn btn" type="submit">
              <GoSearch />
            </button>
          </NavSearchContainer>
        </NavSearch>

        <NavbarNav className="navbar-nav">
          <div className="language-toggler all-center">
            EN <CgChevronDown fontSize="1.2rem" />
          </div>

          <div className="notification all-center">
            <IoMdNotificationsOutline fontSize="1.5rem" />
          </div>

          <div className="profile all-center">
            <img src={profileAvatar} alt="" />
          </div>
        </NavbarNav>
      </NavbarContainer>
    </Navbar>
  );
}
