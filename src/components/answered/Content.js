import React from "react";

import PollResult from "./PollResult";
import { Form, PollContent } from "../CustomStyles";
import { connect } from "react-redux";

const Content = ({ question, votersAvatars, authedUser, users }) => {
  const option1Votes = question.optionOne.votes.length;
  const option2Votes = question.optionTwo.votes.length;
  const totalVotes = option1Votes + option2Votes;

  const userAnswer = users[authedUser.id].answers[question.id];
  console.log(`user answer is ============> ${userAnswer}`);

  return (
    <PollContent>
      <h3 style={{ marginBottom: 6 }}>
        {question.title ? question.title : "Would you rather?"}
      </h3>
      <Form>
        <PollResult
          name="optionOne"
          text={question.optionOne.text}
          votes={option1Votes}
          totalVotes={totalVotes}
          userAnswer={userAnswer}
        />
        <PollResult
          name="optionTwo"
          text={question.optionTwo.text}
          votes={option2Votes}
          totalVotes={totalVotes}
          userAnswer={userAnswer}
        />
      </Form>
    </PollContent>
  );
};

const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
  users: state.users,
});

export default connect(mapStateToProps)(Content);
