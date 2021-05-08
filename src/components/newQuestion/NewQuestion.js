import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { Container, Centered, Button, Divider } from "../CustomStyles";
import NewPoll from "./NewPoll";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../../actions/questions";

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

const NewQuestion = ({ dispatch }) => {
  const authedUser = "johndoe";

  const [title, setTitle] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleOption1Change = (e) => {
    setOption1(e.target.value);
  };

  const handleOption2Change = (e) => {
    setOption2(e.target.value);
  };

  const handleSumbitQuestion = (e) => {
    e.preventDefault();
    dispatch(
      handleSaveQuestion({
        title,
        optionOneText: option1,
        optionTwoText: option2,
        author: authedUser,
      })
    );
    console.log(title, option1, option2);
  };

  return (
    <Centered>
      <PollContainer>
        <PollHeader>
          <Input
            type="text"
            placeholder="Type a question or title..."
            value={title}
            onChange={handleTitleChange}
          />
        </PollHeader>
        <PollContent>
          <h4 style={{ marginBottom: 10 }}>Create a poll</h4>
          <Form>
            <InputContainer>
              <NewPoll
                name="option1"
                text={"Option 1"}
                value={option1}
                onChange={handleOption1Change}
              />
              <Divider />
              <NewPoll
                name="option2"
                text={"Option 2"}
                value={option2}
                onChange={handleOption2Change}
              />
            </InputContainer>
            <Divider />
            <Container spaced top="1rem">
              <Container spaced>
                <Button flat type="submit">
                  Cancel
                </Button>
                <Button secondary type="submit" onClick={handleSumbitQuestion}>
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

export default connect()(NewQuestion);
