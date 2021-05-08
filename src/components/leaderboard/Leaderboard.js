import React from "react";

import { connect } from "react-redux";

import LeaderboardItem from "./LeaderboardItem";

import { RoundedContainer, Container } from "../CustomStyles";

const Leaderboard = ({ questions, users }) => {
  console.log("Leaderboard");
  console.log(users);

  const userTotalAnswersMap = Object.values(users).map((user) => ({
    user,
    totalAnswers: Object.keys(user.answers).length,
  }));

  const sortedAnswers = userTotalAnswersMap.sort(
    (a, b) =>
      b.totalAnswers +
      b.user.questions.length -
      (a.totalAnswers + a.user.questions.length)
  );

  return (
    <Container center aligncenter column>
      <h3 style={{ marginTop: 40 }}>All Leaderboard</h3>
      <RoundedContainer width="60rem">
        {sortedAnswers.map((item, index) => (
          <LeaderboardItem
            key={item.user.id}
            user={item.user}
            answers={item.totalAnswers}
            index={index}
            length={userTotalAnswersMap.length}
          />
        ))}
      </RoundedContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  questions: state.questions,
  users: state.users,
});

export default connect(mapStateToProps)(Leaderboard);
