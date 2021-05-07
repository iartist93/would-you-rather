import React from "react";
import styled from "@emotion/styled";
import { Centered, Avatar } from "../CustomStyles";

import { TimeStamp } from "../utilites";

const Header = ({ avatarURL, timestamp, author }) => {
  const PollHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 0.6rem;
    border-bottom: 1px solid #a7a7ff;
  `;

  const QuestionTimeStamp = styled(TimeStamp)`
    margin-left: 2.8rem;
    font-size: 0.7rem;
    margin-top: -0.5rem;
  `;

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
