import React from "react";
import { BsSkipEndFill } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";

import PollInput from "./PollInput";
import {
  Container,
  Avatar,
  Centered,
  Button,
  EmptyAvatar,
  Text,
  Form,
  PollContent,
} from "../CustomStyles";

const Content = ({ question, votersAvatars }) => {
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
            {votersAvatars.slice(0, 6).map((voter, index) => (
              <Avatar
                key={index}
                src={voter}
                size="1.4rem"
                stacked
                index={index}
              />
            ))}
            {votersAvatars.length > 6 && (
              <EmptyAvatar>+{votersAvatars.length - 6}</EmptyAvatar>
            )}
          </Centered>
        </Container>
      </Form>
    </PollContent>
  );
};

export default Content;
