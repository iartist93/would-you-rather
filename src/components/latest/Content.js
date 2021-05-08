import React, { useState } from "react";
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
import { connect } from "react-redux";

import { handleAddVote } from "../../actions/shared";

const Content = ({ question, votersAvatars, dispatch, authedUserId }) => {
  const [selected, setSelected] = useState(null);

  const handleSelectionChange = (e) => {
    setSelected(e.target.value);
  };

  const handleVote = (e) => {
    e.preventDefault();
    dispatch(handleAddVote(authedUserId, question.id, selected));
  };

  return (
    <PollContent>
      <h3 style={{ marginBottom: 6 }}>
        {question.title ? question.title : "Would you rather?"}
      </h3>
      <Form>
        <PollInput
          id={question.id}
          value="optionOne"
          text={question.optionOne.text}
          onChange={handleSelectionChange}
          selected={selected}
        />
        <PollInput
          id={question.id}
          value="optionTwo"
          text={question.optionTwo.text}
          onChange={handleSelectionChange}
          selected={selected}
        />
        <Container spaced aligncenter top="2.5rem">
          <Centered>
            <Button secondary type="submit" onClick={handleVote}>
              Vote
            </Button>
            {/* TODO:: Re-Enable Skip button */}
            {/* <Button outlined type="submit">
              <BsSkipEndFill size="1.4rem" color={"#3b3b3b"} /> Skip
            </Button> */}
          </Centered>
          <Centered trilling>
            <FiBarChart2 color="#154499" />
            <Text>Voted</Text>
            {votersAvatars.length > 0 ? (
              <>
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
              </>
            ) : (
              "No votes yet"
            )}
          </Centered>
        </Container>
      </Form>
    </PollContent>
  );
};

const mapStateToProps = (state) => ({
  authedUserId: state.authedUser?.id,
});

export default connect(mapStateToProps)(Content);
