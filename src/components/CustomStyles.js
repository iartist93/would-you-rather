import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import React from "react";

export const PrimaryColor = "#0d61ff";
export const SecondaryColor = "#4689ff";

export const Space = styled.div`
  background-color: red;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2.2rem;

  ${(props) =>
    props.spaced &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.aligncenter &&
    css`
      align-items: center;
    `}
`;

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.trilling &&
    css`
      ::before {
        content: "";
        width: 11rem;
      }
      justify-content: flex-start;
      flex: 1 1 auto;
    `}
`;

export const Button = styled.button`
  width: 5rem;
  height: 2.2rem;
  border-radius: 5px;
  font-size: 1rem;
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
    props.secondary &&
    css`
      color: white;
      background-color: ${SecondaryColor};
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
