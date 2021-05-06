import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const PollResult = ({ name, text, votes, totalVotes }) => {
  const PollItem = styled.div`
    margin: 0.7rem 0;
    padding: 0.2rem 0.9rem;
    border-radius: 20px;
    background-color: #77c7f7;

    ${(props) =>
      props.percentage < 0.5 &&
      css`
        background-color: #e1e8ed;
      `}

    ${(props) =>
      props.percentage === 0.5 &&
      css`
        background-color: #e1ede3;
      `}
  `;

  const Percentage = styled.span`
    font-weight: 600;
    margin-right: 1rem;
  `;

  const percentage = votes / totalVotes;

  return (
    <PollItem percentage={percentage}>
      <Percentage>{percentage * 100}%</Percentage>
      {text}
    </PollItem>
  );
};

export default PollResult;
