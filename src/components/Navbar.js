import React from "react";
import LogoImage from "../logo2.png";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

class Navbar extends React.Component {
  render() {
    const { active, onActiveChange } = this.props;

    const NavItem = styled.div`
      display: inline-block;
      padding-bottom: 1.2rem;
      padding-top: 1.6rem;
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
      width: 8rem;
      background: transparent;
      color: black;
      /* border: 2px solid black; */
      text-decoration: none;
      list-style: none;

      ${(props) =>
        props.primary &&
        css`
          background: white;
          color: green;
        `};

      ${(props) =>
        props.active === true &&
        css`
          font-weight: 600;
          border-bottom: 3px solid #15b06e;
          background-color: #f1f1f1;
        `};
    `;

    const Header = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 3.4rem;
      border-bottom: 3px solid #eeeeee;
    `;

    const Logo = styled.img`
      width: 40px;
      height: 40px;
      margin: 0 2rem;
    `;

    const Nav = styled.div``;

    const NavUser = styled.div`
      background: transparent;
      border-radius: 3px;
      border: 2px solid #15b06e;
      color: #15b06e;
      margin: 0.5em 1em;
      padding: 0.5em 1.4em;
      font-size: 1rem;
      font-weight: 500;
      text-decoration: none;

      ${(props) =>
        props.primary &&
        css`
          background: palevioletred;
          color: white;
        `};
    `;

    const NavLink = styled(Link)`
      text-decoration: none;
      color: black;
    `;

    return (
      <Header>
        <Logo src={LogoImage} />
        <Nav>
          {Object.entries(navItems).map(([key, value]) => (
            <NavItem active={active === key} key={key}>
              <NavLink to={value} onClick={() => onActiveChange(key)}>
                {key}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <NavUser>
          <NavLink to="/new" onClick={() => onActiveChange(null)}>
            New Poll
          </NavLink>
        </NavUser>
      </Header>
    );
  }
}

export const navItems = {
  Latest: "/",
  Answered: "/answered",
  Stared: "/stared",
};

export default Navbar;
