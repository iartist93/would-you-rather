import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { Container } from "../CustomStyles";

const AnsweredList = ({ questions, users }) => {
  // TODO:: Change this to answers
  const ids = Object.keys(questions).filter(
    (id) =>
      questions[id].answered === undefined || questions[id].answered === false
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
});

export default connect(mapStateToProps)(AnsweredList);
