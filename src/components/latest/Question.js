import React from "react";
import { connect } from "react-redux";

import Header from "../question/Header";
import Content from "./Content";

import { RoundedContainer } from "../CustomStyles";

const Question = ({ qid, question, users, authedUserId }) => {
  // get all voters for current question
  const voters = question.optionOne.votes.concat(question.optionTwo.votes);
  const votersAvatars = voters.map((voter) => users[voter].avatarURL);

  return (
    <RoundedContainer>
      <Header
        avatarURL={users[question.author].avatarURL}
        author={users[question.author].name}
        timestamp={question.timestamp}
        qid={qid}
        showDetails
      />
      <Content question={question} votersAvatars={votersAvatars} />
      {/* TODO:: Re-Enable the comments again */}
      {/* <Footer avatarURL={users[authedUser].avatarURL} /> */}
    </RoundedContainer>
  );
};

const mapStateToProps = (state, { qid }) => ({
  authedUserId: state.authedUser?.id,
  question: state.questions[qid],
  users: state.users,
  qid,
});

export default connect(mapStateToProps)(Question);
