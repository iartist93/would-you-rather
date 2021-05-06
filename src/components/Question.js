import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Poll from "./Poll";
import { BsSkipEndFill } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";
import { Container, Centered, Button, Avatar } from "./CustomStyles";
import { TimeStamp } from "./utilites";

const Question = ({ id, questions, users }) => {
  const PollContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 40rem;
    height: 24rem;
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    /* z-index: -500; */

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
    /* z-index: -100; */
  `;

  const Form = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `;

  const EmptyAvatar = styled.div`
    border-radius: 50%;
    width: 2.1em;
    height: 2.1em;
    background-color: #e1efff;
    color: #154499;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 0.9rem;
    margin-left: 0.2rem;
    /* z-index: -6; */
  `;

  const Input = styled.input`
    width: 100%;
    height: 2rem;
    border-radius: 0 1.4rem 1.4rem 1.6rem;
    outline: none;
    border: 1px solid #d7d8da;
    padding: 0.2rem 1.1rem;
    font-size: 1.05rem;
  `;

  const QuestionTimeStamp = styled(TimeStamp)`
    margin-left: 2.8rem;
    font-size: 0.7rem;
    margin-top: -0.5rem;
  `;

  const Text = styled.span`
    font-size: 0.85rem;
    color: #3b545f;
    margin-right: 0.5rem;
  `;

  const authedUser = "johndoe";

  const voters = questions[id].voters.map(
    (voter) => users[voter.user].avatarURL
  );

  return (
    <PollContainer>
      <PollHeader>
        <Centered>
          <Avatar src={users[questions[id].author].avatarURL} />
          <span>Poll by @{questions[id].author} </span>
        </Centered>
        <QuestionTimeStamp id={id} questions={questions} />
      </PollHeader>
      <PollContent>
        <h3 style={{ marginBottom: 6 }}>Would you rather?</h3>
        <Form>
          <Poll name="option1" text={questions[id].optionOne.text} />
          <Poll name="option2" text={questions[id].optionTwo.text} />
          <Container spaced aligncenter top="2.5rem">
            <Centered>
              <Button secondary type="submit">
                Vote
              </Button>
              <Button outlined type="submit">
                <BsSkipEndFill size="1.4rem" color={"#3b3b3b"} /> Skip
              </Button>
            </Centered>
            <Centered trilling>
              <FiBarChart2 color="#154499" />
              <Text>Voted</Text>
              {voters.slice(0, 6).map((voter, index) => (
                <Avatar
                  key={index}
                  src={voter}
                  size="1.4rem"
                  stacked
                  index={index}
                />
              ))}
              {voters.length > 6 && (
                <EmptyAvatar>+{voters.length - 6}</EmptyAvatar>
              )}
            </Centered>
          </Container>
        </Form>
        <Container top="2.5rem">
          <Avatar src={users[authedUser].avatarURL} size="2rem" />
          <Input type="text" name="text" placeholder="Write a comment ..." />
        </Container>
      </PollContent>
    </PollContainer>
  );
};

export default Question;
