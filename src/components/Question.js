import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Poll from "./Poll";
import { BsSkipEndFill } from "react-icons/bs";
import { Container, Centered, Button } from "./CustomStyles";
import { TimeStamp } from "./utilites";

const Question = ({ id, questions, users }) => {
  const PollContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 35rem;
    height: 21rem;
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    padding: 1.2rem;

    -webkit-box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
    -moz-box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
    box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
  `;

  const PollHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 0.6rem;
    border-bottom: 1px solid #a7a7ff;
  `;

  const PollContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `;

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `;

  const Avatar = styled.img`
    border-radius: 50%;
    width: 2.2em;
    height: auto;
    margin-right: 0.5rem;
    -webkit-box-shadow: 4px 7px 11px 0px #e2e2e2;
    box-shadow: 4px 7px 11px 0px #e2e2e2;

    ${(props) =>
      props.size &&
      css`
        width: ${props.size};
      `}
  `;

  const Input = styled.input`
    width: 100%;
    height: 1.5rem;
    border-radius: 0 1.4rem 1.4rem 1.4rem;
    outline: none;
    border: 1px solid #d7d8da;
    padding: 0.2rem 0.9rem;
  `;

  const QuestionTimeStamp = styled(TimeStamp)`
    margin-left: 2.8rem;
    font-size: 0.7rem;
    margin-top: -0.5rem;
  `;

  const authedUser = "johndoe";

  return (
    <PollContainer>
      <PollHeader>
        <Centered>
          <Avatar src={users[questions[id].author].avatarURL} />
          <span>Poll by @{questions[id].author} </span>
        </Centered>
        {/* <span>{questions[id].timestamp}</span> */}
        <QuestionTimeStamp id={id} questions={questions} />
      </PollHeader>
      <PollContent>
        <h3 style={{ marginBottom: 6 }}>Would you rather?</h3>
        <Form>
          <Poll name="option1" text={questions[id].optionOne.text} />
          <Poll name="option2" text={questions[id].optionTwo.text} />
          <Centered>
            <Button secondary type="submit">
              Vote
            </Button>
            <Button outlined type="submit">
              <BsSkipEndFill size="1.4rem" color={"#3b3b3b"} /> Skip
            </Button>
          </Centered>
        </Form>
        <Container>
          <Avatar src={users[authedUser].avatarURL} size="2rem" />
          <Input type="text" placeholder="Write a comment ..." />
        </Container>
      </PollContent>
    </PollContainer>
  );
};

export default Question;
