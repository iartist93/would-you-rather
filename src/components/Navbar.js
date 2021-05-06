import React from "react";
import LogoImage from "../logo2.png";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { PrimaryColor, Button } from "./CustomStyles";
import { RiAddLine } from "react-icons/ri";

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
          border-bottom: 3px solid ${PrimaryColor};
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
      width: 5.5rem;
      height: 2.5rem;
      border-radius: 5px;
      font-size: 1rem;
      margin-right: 1.5rem;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      background-color: ${PrimaryColor};
      border-color: transparent;
    `;

    const NavLink = styled(Link)`
      text-decoration: none;
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;

      ${(props) =>
        props.asbutton &&
        css`
          color: white;
        `}
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
          <NavLink to="/new" onClick={() => onActiveChange(null)} asbutton>
            <RiAddLine size="1.5rem" /> New
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
  Leaderboard: "/leaderboard",
};

export default Navbar;
