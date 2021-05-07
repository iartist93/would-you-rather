import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import Question from "./Question";

const AnsweredList = ({ questions, users }) => {
  const Centered = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  // TODO:: Change this to answers
  const ids = Object.keys(questions).filter(
    (id) =>
      questions[id].answered === undefined || questions[id].answered === false
  );

  return (
    <Centered>
      <h3 style={{ marginTop: 40 }}>All Answered Questions</h3>
      {ids.map((id) => (
        <Question key={id} id={id} />
      ))}
    </Centered>
  );
};

const mapStateToProps = (state) => ({
  questions: state.questions,
  users: state.users,
});

export default connect(mapStateToProps)(AnsweredList);
