import React from "react";

import PollResult from "./PollResult";
import { Form, PollContent } from "../CustomStyles";

const Content = ({ question, votersAvatars }) => {
  const option1Votes = question.optionOne.votes.length;
  const option2Votes = question.optionTwo.votes.length;
  const totalVotes = option1Votes + option2Votes;

  return (
    <PollContent>
      <h3 style={{ marginBottom: 6 }}>
        {question.title ? question.title : "Would you rather?"}
      </h3>
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
