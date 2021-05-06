import React from "react";
import styled from "@emotion/styled";
import { Centered } from "../CustomStyles";
import { connect } from "react-redux";

import LeaderboardItem from "./LeaderboardItem";

const Leaderboard = ({ questions, users }) => {
  const LeaderboardContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 60rem;
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    /* z-index: -500; */

    -webkit-box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
    -moz-box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
    box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
  `;

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
    <Centered>
      <LeaderboardContainer>
        <h3>All Leaderboard</h3>
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
      </LeaderboardContainer>
    </Centered>
  );
};

const mapStateToProps = (state) => ({
  questions: state.questions,
  users: state.users,
});

export default connect(mapStateToProps)(Leaderboard);
