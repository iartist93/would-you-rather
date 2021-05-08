import React from "react";
import {
  Centered,
  Avatar,
  QuestionTimeStamp,
  PollHeader,
  Row,
  Button,
} from "../CustomStyles";

import { useHistory } from "react-router-dom";

const Header = ({ avatarURL, timestamp, author, showDetails, qid }) => {
  const history = useHistory();

  const handleOnShowClicked = (e) => {
    history.replace(`/questions/${qid}`);
  };

  return (
    <Row spaced>
      <PollHeader>
        <Centered>
          <Avatar src={avatarURL} />
          <div>
            Poll by <span style={{ fontWeight: 600 }}>@{author}</span>{" "}
          </div>
        </Centered>
        <QuestionTimeStamp timestamp={timestamp} />
      </PollHeader>
      {showDetails && <Button onClick={handleOnShowClicked}>Show</Button>}
    </Row>
  );
};

export default Header;
