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
        <div>
          Poll by <span style={{ fontWeight: 600 }}>@{author}</span>{" "}
        </div>
      </Centered>
      <QuestionTimeStamp timestamp={timestamp} />
    </PollHeader>
  );
};

export default Header;
