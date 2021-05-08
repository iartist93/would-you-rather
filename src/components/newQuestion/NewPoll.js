import React from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  margin: 0.7rem 0;
  width: 90%;
  border: none;
  height: 2rem;
  outline: none;
  font-size: 1.1rem;
`;
const NewPoll = ({ name, onChange, value }) => {
  return (
    <li style={{ color: "#7E8594" }}>
      <Input
        type="text"
        id={name}
        name={name}
        value={value}
        placeholder={`Add ${name}`}
        onChange={onChange}
      />
    </li>
  );
};

export default NewPoll;
