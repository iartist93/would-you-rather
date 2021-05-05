import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Poll from "./Poll";
import { BsSkipEndFill } from "react-icons/bs";
import { PrimaryColor, Centered, Button } from "./CustomStyles";

const Question = ({ id, questions, users }) => {
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
    padding: 0.5rem 0.6rem;
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

  const Avatar = styled.img`
    border-radius: 50%;
    width: 2.2em;
    height: auto;
    margin-right: 0.5rem;
    -webkit-box-shadow: 4px 7px 11px 0px #e2e2e2;
    box-shadow: 4px 7px 11px 0px #e2e2e2;
  `;

  const authedUser = "johndoe";

  return (
    <PollContainer>
      <PollHeader>
        <Avatar src={users[questions[id].author].avatarURL} />
        <span>Poll by @{questions[id].author} </span>
      </PollHeader>
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
