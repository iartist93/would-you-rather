import React from "react";
import styled, { css } from "styled-components";

class QuestionList extends React.Component {
  render() {
    const Button = styled.a`
      display: inline-block;
      border-radius: 3px;
      padding: 0.5rem 0;
      margin: 0.5rem 1rem;
      width: 11rem;
      background: transparent;
      color: black;
      border: 2px solid black;
      text-decoration: none;

      ${(props) =>
        props.primary &&
        css`
          background: white;
          color: green;
        `};
    `;
    return (
      <div>
        <h3>Question List</h3>
        <Button href="/new" target="_blank" rel="noopener" primary>
          Document
        </Button>
      </div>
    );
  }
}

export default QuestionList;
