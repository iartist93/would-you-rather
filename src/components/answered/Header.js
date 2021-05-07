import React from "react";
import {
  Centered,
  Avatar,
  QuestionTimeStamp,
  PollHeader,
} from "../CustomStyles";

const Header = ({ avatarURL, timestamp, author }) => {
  return (
    <PollHeader>
      <Centered>
        <Avatar src={avatarURL} />
        <span>Poll by @{author} </span>
      </Centered>
      <QuestionTimeStamp timestamp={timestamp} />
    </PollHeader>
  );
};

export default Header;
