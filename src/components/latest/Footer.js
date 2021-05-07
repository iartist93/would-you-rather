import React from "react";
import styled from "@emotion/styled";
import { Container, Avatar } from "../CustomStyles";

const Footer = ({ avatarURL }) => {
  const Input = styled.input`
    width: 100%;
    height: 2rem;
    border-radius: 0 1.4rem 1.4rem 1.6rem;
    outline: none;
    border: 1px solid #d7d8da;
    padding: 0.2rem 1.1rem;
    font-size: 1.05rem;
  `;

  return (
    <Container top="2.5rem">
      <Avatar src={avatarURL} size="2rem" />
      <Input type="text" name="text" placeholder="Write a comment ..." />
    </Container>
  );
};

export default Footer;
