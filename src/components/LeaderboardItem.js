import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Poll from "./Poll";
import { BsSkipEndFill } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";
import { FaMedal } from "react-icons/fa";
import { Container, Centered, Button, Divider, Avatar } from "./CustomStyles";
import { TimeStamp } from "./utilites";

const LeaderboardItem = ({ user, answers, users, index, length }) => {
  console.log(user);

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
          <Avatar src={users[user].avatarURL} />
        </Col>
        <Col>{users[user].id}</Col>
        <Col>{users[user].name}</Col>
        <Col>
          {answers} <Subtitle> answered </Subtitle>
        </Col>
        <Col>
          {answers} <Subtitle> asked </Subtitle>
        </Col>
      </LeaderboardContainer>
    </Container>
  );
};

export default LeaderboardItem;
