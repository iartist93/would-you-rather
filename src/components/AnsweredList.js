import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Question from "./Question";
import Answered from "./Answered";

const AnsweredList = ({ ids, questions, users }) => {
  const Centered = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Centered>
      <h3 style={{ marginTop: 40 }}>All Answered Questions</h3>
      {ids.map((id) => (
        <Answered key={id} id={id} questions={questions} users={users} />
      ))}
    </Centered>
  );
};

export default AnsweredList;
