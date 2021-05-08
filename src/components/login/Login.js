import React from "react";
import GoogleButton from "react-google-button";
import { Container, RoundedContainer } from "../CustomStyles";
import LogoImage from "../../logo2.png";
import styled from "@emotion/styled";

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

const Login = () => {
  return (
    <Container centered aligncenter column top="8rem">
      <RoundedContainer aligncenter height="18rem">
        <Logo src={LogoImage} />
        <h3>Login with google</h3>
        <GoogleButton
          onClick={() => {
            console.log("Google button clicked");
          }}
        />
      </RoundedContainer>
      <p>
        Developed with ♥ by{" "}
        <Link href="https://www.linkedin.com/in/iartist93">@iartist93</Link>
      </p>
    </Container>
  );
};

export default Login;
