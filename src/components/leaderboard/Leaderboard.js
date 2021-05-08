import React, { useEffect } from "react";
import { connect } from "react-redux";
import LeaderboardItem from "./LeaderboardItem";
import { RoundedContainer, Container } from "../CustomStyles";

import { recieveActive } from "../../actions/active";
import { navItems } from "../navbar/Navbar";

const Leaderboard = ({ users, dispatch }) => {
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

  useEffect(() => {
    dispatch(recieveActive(navItems.Leaderboard.name));
  }, [dispatch]);

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
  users: state.users,
});

export default connect(mapStateToProps)(Leaderboard);
