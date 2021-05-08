import React, { useImperativeHandle } from "react";
import { connect } from "react-redux";
import { useParams, useRouteMatch } from "react-router-dom";

import Header from "../question/Header";
import AnsweredFooter from "../answered/Footer";
import UnAnsweredFooter from "../latest/Footer";

import AnsweredContent from "../answered/Content";
import UnAnsweredContent from "../latest/Content";

import { Container, RoundedContainer } from "../CustomStyles";

const QuestionDetails = ({ questions, users, authedUser }) => {
  const { id } = useParams();
  const question = questions[id];
  const voters = question.optionOne.votes.concat(question.optionTwo.votes);
  const votersAvatars = voters.map((voter) => users[voter].avatarURL);

  console.log(votersAvatars);
  return (
    <Container centered aligncenter>
      <RoundedContainer>
        <Header
          avatarURL={users[question.author].avatarURL}
          author={users[question.author].name}
          timestamp={question.timestamp}
        />
        {users[authedUser.id].answers[question.id] ? (
          <>
            <AnsweredContent question={question} />
            <AnsweredFooter votersAvatars={votersAvatars} />
          </>
        ) : (
          <>
            <UnAnsweredContent
              question={question}
              votersAvatars={votersAvatars}
            />
          </>
        )}
      </RoundedContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  questions: state.questions,
  users: state.users,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(QuestionDetails);
