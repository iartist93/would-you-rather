import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const Question = ({ qid, question, users }) => {
  const PollContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 40rem;
    height: 23rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    -webkit-box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
    -moz-box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
    box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
  `;

  //TODO: replace this with state
  const authedUser = "johndoe";

  const votersAvatars = question.voters.map(
    (voter) => users[voter.user].avatarURL
  );

  return (
    <PollContainer>
      <Header
        avatarURL={users[question.author].avatarURL}
        author={question.author}
        timestamp={question.timestamp}
      />
      <Content question={question} votersAvatars={votersAvatars} />
      <Footer avatarURL={users[authedUser].avatarURL} />
    </PollContainer>
  );
};

const mapStateToProps = (state, { qid }) => ({
  question: state.questions[qid],
  users: state.users,
  qid,
});

export default connect(mapStateToProps)(Question);
