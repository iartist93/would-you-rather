import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

import { RoundedContainer } from "../CustomStyles";

const Question = ({ qid, question, users }) => {
  //TODO: replace this with state
  const authedUser = "johndoe";

  const votersAvatars = question.voters.map(
    (voter) => users[voter.user].avatarURL
  );

  return (
    <RoundedContainer>
      <Header
        avatarURL={users[question.author].avatarURL}
        author={question.author}
        timestamp={question.timestamp}
      />
      <Content question={question} votersAvatars={votersAvatars} />
      <Footer avatarURL={users[authedUser].avatarURL} />
    </RoundedContainer>
  );
};

const mapStateToProps = (state, { qid }) => ({
  question: state.questions[qid],
  users: state.users,
  qid,
});

export default connect(mapStateToProps)(Question);
