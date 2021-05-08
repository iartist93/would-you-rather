import React, { useState } from "react";
import GoogleButton from "react-google-button";
import {
  Button,
  Container,
  RoundedContainer,
  Form,
  Space,
} from "../CustomStyles";
import LogoImage from "../../logo2.png";
import styled from "@emotion/styled";
import { handleSignin } from "../../firebase/firebase";
import { connect } from "react-redux";
import { handleExistingUserLogin } from "../../actions/authedUser";

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin: 1rem 0;
`;

const Link = styled.a`
  color: #3c58d3d3;
  text-decoration: none;
  font-weight: 600;
`;

const Option = styled.option`
  font-size: 1.3rem;
`;

const Select = styled.select`
  font-size: 1.3rem;
  border-radius: 1rem;
  padding: 0.3rem 0.8rem;
  outline: none;
`;

const Login = ({ users, dispatch }) => {
  const [selectedUser, setSelectedUser] = useState(existingUsers[0].id);

  const handleSelectedUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleLoginWithExistingUser = () => {
    dispatch(handleExistingUserLogin(users[selectedUser]));
  };

  return (
    <Container centered aligncenter column top="8rem">
      <RoundedContainer aligncenter height="26rem">
        <Logo src={LogoImage} />
        <h3>Login with google</h3>
        <GoogleButton
          onClick={() => {
            handleSignin();
          }}
        />
        <h3>Login with existing user</h3>
        <Form centered>
          <Select onChange={handleSelectedUserChange} value={selectedUser}>
            {existingUsers.map((user) => (
              <Option value={user.id}>{user.name}</Option>
            ))}
          </Select>
          <Space height="1rem" />
          <Button primary onClick={handleLoginWithExistingUser}>
            Login
          </Button>
        </Form>
      </RoundedContainer>
      <p>
        Developed with ♥ by{" "}
        <Link href="https://www.linkedin.com/in/iartist93">@iartist93</Link>
      </p>
    </Container>
  );
};

const existingUsers = [
  {
    id: "sarahedo",
    name: "Sarah Edo",
  },
  {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
  },
  {
    id: "johndoe",
    name: "John Doe",
  },
];

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(Login);
