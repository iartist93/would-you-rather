import LogoImage from "../../logo2.png";
import React from "react";
import styled from "@emotion/styled";
import { RiAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { PrimaryColor, Space } from "../CustomStyles";
import { recieveActive } from "../../actions/active";
import { connect } from "react-redux";
import UserDetails from "./UserDetails";

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

const NavLinks = styled.div``;

const NavButton = styled.div`
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

//TODO: Refactor this > UserDetails
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 2rem;
`;

class Navbar extends React.Component {
  render() {
    const { active, dispatch, authedUser } = this.props;

    return (
      <Header>
        <Avatar src={LogoImage} />
        <NavLinks>
          {Object.values(navItems).map((path) => (
            <NavItem active={active === path.name} key={path.name}>
              <NavLink
                to={path.route}
                onClick={() => dispatch(recieveActive(path.name))}
              >
                {path.name}
              </NavLink>
            </NavItem>
          ))}
        </NavLinks>
        <Space />
        <UserDetails authedUser={authedUser} />
        <NavButton>
          <NavLink
            to="/add"
            onClick={() => dispatch(recieveActive(null))}
            asbutton
          >
            <RiAddLine size="1.5rem" /> New
          </NavLink>
        </NavButton>
      </Header>
    );
  }
}

export const navItems = {
  Latest: { name: "Latest", route: "/" },
  Answered: { name: "Answered", route: "/answered" },
  // Stared: { name: "stared", route: "/stared" },
  Leaderboard: { name: "Leaderboard", route: "/leaderboard" },
};

const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(Navbar);
