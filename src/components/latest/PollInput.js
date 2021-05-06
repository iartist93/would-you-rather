import React from "react";
import styled from "@emotion/styled";

const PollInput = ({ name, text }) => {
  const PollItem = styled.div`
    margin: 0.7rem 0;
  `;

  return (
    <PollItem>
      <input type="radio" id={name} name={name} value={name} />
      <label htmlFor={name}>{text}</label>
    </PollItem>
  );
};

export default PollInput;
