import React from "react";
import styled from "@emotion/styled";

import { connect } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const Question = ({ id, question, users }) => {
  const PollContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 40rem;
    height: 18rem;
    margin: 1rem 0;

    display: flex;
    flex-direction: column;
    padding: 1.2rem;

    -webkit-box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
    -moz-box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
    box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
  `;

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
      <Content question={question} />
      <Footer votersAvatars={votersAvatars} />
    </PollContainer>
  );
};

const mapStateToProps = (state, { id }) => ({
  question: state.questions[id],
  users: state.users,
  id,
});

export default connect(mapStateToProps)(Question);
