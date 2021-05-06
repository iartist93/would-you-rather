import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Poll from "./Poll";
import { BsSkipEndFill } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";
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

    ${(props) =>
      props.stacked &&
      css`
        position: relative;
        left: 1.1rem;
        top: 0px;
        margin-left: -1.1rem;
        border: 2px solid #f9faff;
        /* z-index: -${props.index}; */
        -webkit-box-shadow: 1px 1px 1px 0px #e2e2e2;
        box-shadow: 1px 1px 1px 0px #e2e2e2;
      `}
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

  const Text = styled.span`
    font-size: 0.85rem;
    color: #3b545f;
    margin-right: 0.5rem;
  `;

  const authedUser = "johndoe";
  const voters = questions[id].voters.map(
    (voter) => users[voter.user].avatarURL
  );
  console.log(voters);

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
          <Container spaced aligncenter>
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
        <Container>
          <Avatar src={users[authedUser].avatarURL} size="2rem" />
          <Input type="text" name="text" placeholder="Write a comment ..." />
        </Container>
      </PollContent>
    </PollContainer>
  );
};

export default Question;
