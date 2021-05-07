import React from "react";
import styled from "@emotion/styled";

const PollInput = ({ selected, id, value, text, onChange }) => {
  const PollItem = styled.div`
    margin: 0.7rem 0;
  `;

  const uniqueId = `${id}_${value}`;
  return (
    <PollItem>
      <input
        type="radio"
        id={uniqueId}
        name={id}
        value={value}
        onChange={onChange}
        checked={selected === value}
      />
      <label htmlFor={uniqueId}>{text}</label>
    </PollItem>
  );
};

export default PollInput;
