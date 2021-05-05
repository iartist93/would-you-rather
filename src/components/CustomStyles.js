import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

export const PrimaryColor = "#0d61ff";

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 5.5rem;
  height: 2.5rem;
  border-radius: 5px;
  font-size: 1rem;
  margin-top: 1.5rem;
  margin-right: 0.5rem;
  background-color: transparent;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.primary &&
    css`
      color: white;
      background-color: ${PrimaryColor};
      border-color: transparent;
    `}
  ${(props) =>
    props.outlined &&
    css`
      color: #3b3b3b;
      background-color: transparent;
      border: 2px solid #8f8f8f;
    `}
`;
