import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { AiFillCheckCircle } from "react-icons/ai";

const PollResult = ({ name, text, votes, totalVotes, userAnswer }) => {
  const PollItem = styled.div`
    margin: 0.7rem 0;
    padding: 0.2rem 0.9rem;
    border-radius: 20px;
    background-color: #77c7f7;
    display: flex;
    align-items: center;

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

  const Votes = styled.span`
    font-size: 0.8rem;
    margin-right: 0.3rem;
  `;

  const percentage = Math.round((votes / totalVotes) * 10000) / 10000;

  return (
    <PollItem percentage={percentage}>
      {/* TODO:Refine this UI  */}
      <Votes>{votes} votes</Votes>
      <Percentage>{percentage * 100}%</Percentage>
      {text}
      {userAnswer === name && (
        <>
          <AiFillCheckCircle
            size="1.3rem"
            // color={"#e1e8ed"}
            style={{ marginLeft: 10 }}
          />
        </>
      )}
    </PollItem>
  );
};

export default PollResult;
