import React from "react";
import styled from "@emotion/styled";
import Question from "./Question";

const QuestionList = ({ qids }) => {
  const Centered = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  console.log(qids);

  return (
    <Centered>
      {qids.map((qid) => (
        <Question key={qid} qid={qid} />
      ))}
    </Centered>
  );
};

export default QuestionList;
