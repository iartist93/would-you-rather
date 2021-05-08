import React, { useEffect } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { Container } from "../CustomStyles";
import { recieveActive } from "../../actions/active";
import { navItems } from "../navbar/Navbar";

const AnsweredList = ({ authedUserId, questions, users, dispatch }) => {
  useEffect(() => {
    dispatch(recieveActive(navItems.Answered.name));
  }, [dispatch]);

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
