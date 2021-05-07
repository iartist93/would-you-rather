import React from "react";
import styled from "@emotion/styled";

import PollResult from "./PollResult";

const Content = ({ question, votersAvatars }) => {
  const PollContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    /* z-index: -100; */
  `;

  const Form = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `;

  const option1Votes = question.voters.filter(
    (voter) => voter.answer === "optionOne"
  ).length;

  const option2Votes = question.voters.filter(
    (voter) => voter.answer === "optionTwo"
  ).length;

  const totalVotes = option1Votes + option2Votes;

  return (
    <PollContent>
      <h3 style={{ marginBottom: 6 }}>Would you rather?</h3>
      <Form>
        <PollResult
          name="option1"
          text={question.optionOne.text}
          votes={option1Votes}
          totalVotes={totalVotes}
        />
        <PollResult
          name="option2"
          text={question.optionTwo.text}
          votes={option2Votes}
          totalVotes={totalVotes}
        />
      </Form>
    </PollContent>
  );
};

export default Content;
