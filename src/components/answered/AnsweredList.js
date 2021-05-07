import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { Container } from "../CustomStyles";

const AnsweredList = ({ user }) => {
  const ids = Object.keys(user.answers);

  return (
    <Container centered aligncenter column>
      <h3 style={{ marginTop: 40 }}>All Answered Questions</h3>
      {ids.map((id) => (
        <Question key={id} id={id} />
      ))}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  //TODO : listem for the current authed user only
  user: state.users["johndoe"],
});

export default connect(mapStateToProps)(AnsweredList);
