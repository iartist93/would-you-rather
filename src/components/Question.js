import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Poll from "./Poll";
import { BsSkipEndFill } from "react-icons/bs";

const Question = ({ id, questions }) => {
  const PollContainer = styled.div`
    background-color: white;
    border-radius: 4px;
    width: 40rem;
    height: 25rem;
    margin-top: 2rem;

    display: flex;
    flex-direction: column;

    -webkit-box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
    -moz-box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
    box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
  `;

  const PollHeader = styled.div`
    display: flex;
    align-items: center;
    height: 2.5rem;
    padding: 0.1rem 1.2rem;
  `;

  const PollContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.1rem 1.2rem;
  `;

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `;

  const Button = styled.button`
    width: 5.5rem;
    height: 2.5rem;
    border-radius: 5px;
    font-size: 1rem;
    margin-top: 1.5rem;
    margin-right: 0.5rem;
    background-color: transparent;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props) =>
      props.primary &&
      css`
        color: white;
        background-color: #15b06e;
        border-color: transparent;
      `}
    ${(props) =>
      props.outlined &&
      css`
        color: #3b3b3b;
        background-color: transparent;
        border: 2px solid #8f8f8f;
      `}
  `;

  const Centered = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <PollContainer>
      <PollHeader>Poll by @{questions[id].author} </PollHeader>
      <PollContent>
        <h3>Would you rather?</h3>
        <Form>
          <Poll name="option1" text={questions[id].optionOne.text} />
          <Poll name="option2" text={questions[id].optionTwo.text} />
          <Centered>
            <Button primary type="submit">
              Vote
            </Button>
            <Button outlined type="submit">
              <BsSkipEndFill size="1.4rem" color={"#3b3b3b"} /> Skip
            </Button>
          </Centered>
        </Form>
      </PollContent>
    </PollContainer>
  );
};

export default Question;
