import React from "react";
import { Button, Row } from "../CustomStyles";
import styled from "@emotion/styled";

import { handleSignout } from "../../firebase/firebase";

//TODO: Refactor this
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const UserDetails = ({ authedUser }) => {
  return (
    <Row>
      <Avatar src={authedUser.avatarURL} />
      <p>{authedUser.name}</p>
      <Button flat onClick={() => handleSignout()}>
        Logout
      </Button>
    </Row>
  );
};

export default UserDetails;
