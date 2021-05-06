import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import NewPoll from "./NewPoll";
import { BsSkipEndFill } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";
import { Container, Centered, Button, Divider } from "./CustomStyles";
import { TimeStamp } from "./utilites";

const NewQuestion = () => {
  const PollContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 35rem;
    height: 22.5rem;
    margin-top: 2rem;
    flex-direction: column;
    padding: 1.2rem;
    display: flex;

    -webkit-box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
    -moz-box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
    box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
  `;

  const PollHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 0.6rem;
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

  const InputContainer = styled.div`
    width: 100%;
    border: 1px solid #b4bbca;
    border-radius: 8px;
    margin-bottom: 4rem;
  `;

  const Input = styled.input`
    width: 100%;
    height: 3.5rem;
    border-radius: 0 1.4rem 1.4rem 1.4rem;
    outline: none;
    border: none;
    padding: 0.2rem 0.9rem;
    font-size: 2rem;
    font-weight: 600;
    color: #1f2022;

    &::placeholder {
      color: #b4bbca;
    }
  `;

  const Text = styled.span`
    font-size: 0.85rem;
    color: #3b545f;
    margin-right: 0.5rem;
  `;

  const authedUser = "johndoe";

  return (
    <Centered>
      <PollContainer>
        <PollHeader>
          <Input type="text" placeholder="Type a question or title..." />
        </PollHeader>
        <PollContent>
          <h4 style={{ marginBottom: 10 }}>Create a poll</h4>
          <Form>
            <InputContainer>
              <NewPoll name="option1" text={"Option 1"} />
              <Divider />
              <NewPoll name="option2" text={"Option 2"} />
            </InputContainer>
            <Divider />
            <Container spaced top="1rem">
              <Container spaced>
                <Button flat type="submit">
                  Cancel
                </Button>
                <Button secondary type="submit">
                  Create
                </Button>
              </Container>
            </Container>
          </Form>
        </PollContent>
      </PollContainer>
    </Centered>
  );
};

export default NewQuestion;
