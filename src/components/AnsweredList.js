import React from "react";
import styled from "@emotion/styled";
import Answered from "./Answered";
import { connect } from "react-redux";

const AnsweredList = ({ questions, users }) => {
  const Centered = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const ids = Object.keys(questions).filter(
    (id) =>
      questions[id].answered === undefined || questions[id].answered === false
  );

  return (
    <Centered>
      <h3 style={{ marginTop: 40 }}>All Answered Questions</h3>
      {ids.map((id) => (
        <Answered key={id} id={id} questions={questions} users={users} />
      ))}
    </Centered>
  );
};

const mapStateToProps = (state) => ({
  questions: state.questions,
  users: state.users,
});

export default connect(mapStateToProps)(AnsweredList);
