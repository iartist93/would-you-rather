import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { Container } from "../CustomStyles";

const AnsweredList = ({ authedUserId, questions, users }) => {
  console.log(users[authedUserId.answers]);

  const ids = Object.keys(users[authedUserId].answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

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
  questions: state.questions,
  users: state.users,
  authedUserId: state.authedUser?.id,
});

export default connect(mapStateToProps)(AnsweredList);
