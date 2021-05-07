import React from "react";
import styled from "@emotion/styled";
import { BsSkipEndFill } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";

import PollInput from "./PollInput";
import { Container, Avatar, Centered, Button } from "../CustomStyles";

const Content = ({ question, voters }) => {
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

  const Text = styled.span`
    font-size: 0.85rem;
    color: #3b545f;
    margin-right: 0.5rem;
  `;

  return (
    <PollContent>
      <h3 style={{ marginBottom: 6 }}>Would you rather?</h3>
      <Form>
        <PollInput name="option1" text={question.optionOne.text} />
        <PollInput name="option2" text={question.optionTwo.text} />
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
    </PollContent>
  );
};

export default Content;
