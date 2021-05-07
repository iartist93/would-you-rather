import React from "react";
import styled from "@emotion/styled";
import { Container, Avatar, Centered } from "../CustomStyles";
import { FiBarChart2 } from "react-icons/fi";

const Footer = ({ votersAvatars }) => {
  const EmptyAvatar = styled.div`
    border-radius: 50%;
    width: 2.1em;
    height: 2.1em;
    background-color: #e1efff;
    color: #154499;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 0.9rem;
    margin-left: 0.2rem;
    /* z-index: -6; */
  `;

  const Text = styled.span`
    font-size: 0.85rem;
    color: #3b545f;
    margin-right: 0.5rem;
  `;

  return (
    <Container spaced aligncenter top="2.5rem">
      <Centered>
        <Text>{votersAvatars.length} votes . Final Result</Text>
        <Centered trilling>
          <FiBarChart2 color="#154499" />
          <Text>Voted</Text>
          {votersAvatars.slice(0, 6).map((voter, index) => (
            <Avatar
              key={index}
              src={voter}
              size="1.4rem"
              stacked
              index={index}
            />
          ))}
          {votersAvatars.length > 6 && (
            <EmptyAvatar>+{votersAvatars.length - 6}</EmptyAvatar>
          )}
        </Centered>
      </Centered>
    </Container>
  );
};

export default Footer;
