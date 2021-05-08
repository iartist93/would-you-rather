import React from "react";
import { GiTerror } from "react-icons/gi";
import { Button, Container } from "../CustomStyles";
import { useHistory } from "react-router-dom";

const NotFound = ({ id }) => {
  const history = useHistory();

  const handleBack = (e) => {
    e.preventDefault();
    history.replace("/");
  };

  return (
    <Container centered aligncenter column top="3rem">
      <GiTerror size={"13rem"} />
      <h3>Question not found</h3>
      <Button width="10rem" primary onClick={handleBack}>
        More questions
      </Button>
    </Container>
  );
};

export default NotFound;
