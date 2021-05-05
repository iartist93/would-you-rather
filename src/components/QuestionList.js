import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Question from "./Question";

const QuestionList = ({ ids, questions, users }) => {
  const Centered = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Centered>
      {ids.map((id) => (
        <Question id={id} questions={questions} users={users} />
      ))}
    </Centered>
  );
};

export default QuestionList;
