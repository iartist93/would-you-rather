import React from "react";

import { connect } from "react-redux";

import LeaderboardItem from "./LeaderboardItem";

import { RoundedContainer, Container } from "../CustomStyles";

const Leaderboard = ({ questions, users }) => {
  const usersIds = Object.values(users).map((user) => user.id);
  const userAnswers = Object.keys(users).map(
    (user) =>
      Object.values(questions).filter(
        (question) =>
          question.voters.filter((voter) => voter.user === user).length > 0
      ).length
  );
  const sortedAnswers = usersIds
    .map((user, index) => ({
      user: user,
      answers: userAnswers[index],
    }))
    .sort((a, b) => b.answers - a.answers);

  return (
    <Container center aligncenter column>
      <h3 style={{ marginTop: 40 }}>All Leaderboard</h3>
      <RoundedContainer width="60rem">
        {sortedAnswers.map((item, index) => (
          <LeaderboardItem
            key={index}
            user={item.user}
            answers={item.answers}
            users={users}
            index={index}
            length={sortedAnswers.length}
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
