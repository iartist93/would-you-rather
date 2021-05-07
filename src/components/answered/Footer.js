import React from "react";
import {
  Container,
  Avatar,
  Centered,
  EmptyAvatar,
  Text,
} from "../CustomStyles";
import { FiBarChart2 } from "react-icons/fi";

const Footer = ({ votersAvatars }) => {
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
