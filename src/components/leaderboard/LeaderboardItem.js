import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FaMedal } from "react-icons/fa";
import { Container, Avatar } from "../CustomStyles";

const LeaderboardItem = ({ user, answers, index, length }) => {
  const LeaderboardContainer = styled.div`
    width: 100%;
    background-color: white;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;

    ${(props) =>
      props.index < props.length - 1 &&
      css`
        border-bottom: 1px solid black;
      `}
  `;

  const RankCol = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    width: 3rem;
  `;

  const Col = styled.span`
    width: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  `;

  const Subtitle = styled.span`
    color: #a1a7b4;
    margin-left: 0.6rem;
    font-weight: 400;
  `;

  return (
    <Container centered>
      <LeaderboardContainer index={index} length={length}>
        <RankCol>
          {index === 0 ? (
            <FaMedal color="#ffd500" size="2.5rem" />
          ) : index === 1 ? (
            <FaMedal color="#cccccc" size="2.5rem" />
          ) : index === 2 ? (
            <FaMedal color="#bf7869" size="2.5rem" />
          ) : (
            <span> {index + 1} </span>
          )}
        </RankCol>
        <Col>
          <Avatar src={user.avatarURL} />
        </Col>
        <Col>{user.id}</Col>
        <Col>{user.name}</Col>
        <Col>
          {answers} <Subtitle> answered </Subtitle>
        </Col>
        <Col>
          {user.questions.length} <Subtitle> asked </Subtitle>
        </Col>
      </LeaderboardContainer>
    </Container>
  );
};

export default LeaderboardItem;
