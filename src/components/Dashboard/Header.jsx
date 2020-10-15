import React from "react";
import styled from "styled-components";
import logo from "../../images/innoloft_white_logo.svg";

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
`;

const NavbarBrand = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 19%;
  img {
    width: 50%;
  }
`;

const NavbarToggler = styled.button`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
  }
`;

const NavSearch = styled.form`
  width: 49%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 30px;

  input {
    padding: 0.4rem 0.6rem;
    width: 100%;
    border-radius: 10px;
  }

  button {
    position: absolute;
    margin-right: 1rem;
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
  background: white;

  .language-toggler,
  .notification,
  .profile {
    width: 30%;
    color: white;
  }
`;

export default function Header() {
  return (
    <Navbar className="navbar bg-theme">
      <NavbarContainer className="navbar-container">
        <NavbarToggler className="navbar-toggler" type="button">
          button
        </NavbarToggler>

        <NavbarBrand className="navbar-brand" href="/">
          <img src={logo} alt="" />
        </NavbarBrand>

        <NavSearch className="nav-search">
          <NavSearchContainer className="nav-search-container">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Enter interests, keywords, company name, etc..."
            />
            <button class="search-btn" type="submit">
              Search
            </button>
          </NavSearchContainer>
        </NavSearch>

        <NavbarNav className="navbar-nav">
          <div className="language-toggler">lang</div>

          <div className="notification">not</div>

          <div className="profile">pro</div>
        </NavbarNav>
      </NavbarContainer>
    </Navbar>
  );
}
