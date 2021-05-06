import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import PollResult from "./PollResult";
import { BsSkipEndFill } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";
import { Container, Centered, Button, Avatar } from "./CustomStyles";
import { TimeStamp } from "./utilites";

const Answered = ({ id, questions, users }) => {
  const PollContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 40rem;
    height: 18rem;
    margin: 1rem 0;

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
    font-size: 0.9rem;
    color: #3b545f;
    margin-right: 0.5rem;
  `;

  const authedUser = "johndoe";

  const voters = questions[id].voters.map(
    (voter) => users[voter.user].avatarURL
  );

  const option1Votes = questions[id].voters.filter(
    (voter) => voter.answer === "optionOne"
  ).length;

  const option2Votes = questions[id].voters.filter(
    (voter) => voter.answer === "optionTwo"
  ).length;

  const totalVotes = option1Votes + option2Votes;

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
          <PollResult
            name="option1"
            text={questions[id].optionOne.text}
            votes={option1Votes}
            totalVotes={totalVotes}
          />
          <PollResult
            name="option2"
            text={questions[id].optionTwo.text}
            votes={option2Votes}
            totalVotes={totalVotes}
          />
          <Container spaced aligncenter top="2.5rem">
            <Centered>
              <Text>{voters.length} votes . Final Result</Text>
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
            </Centered>
          </Container>
        </Form>
      </PollContent>
    </PollContainer>
  );
};

export default Answered;
