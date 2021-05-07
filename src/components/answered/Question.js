import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

import { RoundedContainer } from "../CustomStyles";

const Question = ({ id, question, users }) => {
  const voters = question.optionOne.votes.concat(question.optionTwo.votes);
  const votersAvatars = voters.map((voter) => users[voter].avatarURL);

  return (
    <RoundedContainer>
      <Header
        avatarURL={users[question.author].avatarURL}
        author={question.author}
        timestamp={question.timestamp}
      />
      <Content question={question} />
      <Footer votersAvatars={votersAvatars} />
    </RoundedContainer>
  );
};

const mapStateToProps = (state, { id }) => ({
  question: state.questions[id],
  users: state.users,
  id,
});

export default connect(mapStateToProps)(Question);
