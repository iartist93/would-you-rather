import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Question from "./Question";
import LeaderboardItem from "./LeaderboardItem";
import { Centered, Container, Divider } from "./CustomStyles";

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

  console.log(sortedAnswers);

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

export default Leaderboard;
