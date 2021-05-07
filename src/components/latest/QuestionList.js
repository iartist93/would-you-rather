import React from "react";
import Question from "./Question";
import { Container } from "../CustomStyles";

const QuestionList = ({ qids }) => {
  return (
    <Container centered aligncenter column>
      <h3 style={{ marginTop: 40 }}>Latest Questions</h3>
      {qids.map((qid) => (
        <Question key={qid} qid={qid} />
      ))}
    </Container>
  );
};

export default QuestionList;
