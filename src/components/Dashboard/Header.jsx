import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 5.5rem;

  @media (min-width: 1200px) {
    .navbar-brand {
      width: 28rem;
    }
  }
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  max-width: 148rem;
  height: 5.5rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

export default function Header() {
  return (
    <Navbar>
      <NavbarContainer>
        <a class="navbar-brand" href="/">
          Navbar
        </a>
        <button class="navbar-toggler" type="button">
          button
        </button>
        <div class="navbar-collapse">
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>

          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/">
                Dropdown
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/">
                  Action 1
                </a>
                <a class="dropdown-item" href="/">
                  Action 2
                </a>
              </div>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Link
              </a>
            </li>
          </ul>
        </div>
      </NavbarContainer>
    </Navbar>
  );
}
