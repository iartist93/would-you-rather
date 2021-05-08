import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { TimeStamp } from "./utilites";

export const PrimaryColor = "#0d61ff";
export const SecondaryColor = "#4689ff";

export const Space = styled.div`
  background-color: red;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #b4bbca;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;

  ${(props) =>
    props.rounded &&
    css`
      border-radius: 12px;
    `}

  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.top &&
    css`
      margin-top: ${props.top};
    `}

  ${(props) =>
    props.spaced &&
    css`
      justify-content: space-between;
    `}


  ${(props) =>
    props.alignstart &&
    css`
      text-align: start;
      align-items: flex-start;
    `}

${(props) =>
    props.aligncenter &&
    css`
      align-items: center;
    `}

  ${(props) =>
    props.centered &&
    css`
      justify-content: center;
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
        width: 14rem;
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
  font-weight: 600;
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
    ${(props) =>
    props.flat &&
    css`
      color: #3b3b3b;
      background-color: transparent;
      border: none;
    `}
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  margin-right: 0.5rem;
  -webkit-box-shadow: 4px 7px 11px 0px #e2e2e2;
  box-shadow: 4px 7px 11px 0px #e2e2e2;

  ${(props) =>
    props.size &&
    css`
      width: ${props.size};
      height: ${props.size};
    `}

  ${(props) =>
    props.stacked &&
    css`
      position: relative;
      left: 1.1rem;
      top: 0px;
      margin-left: -1.1rem;
      border: 2px solid #f9faff;
      /* z-index: -${props.index}; */
      -webkit-box-shadow: 1px 1px 1px 0px #e2e2e2;
      box-shadow: 1px 1px 1px 0px #e2e2e2;
    `}
`;

export const RoundedContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 40rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  -webkit-box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
  -moz-box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);
  box-shadow: -10px 13px 10px -3px rgba(232, 232, 232, 1);

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  ${(props) =>
    props.aligncenter &&
    css`
      align-items: center;
    `}

  ${(props) =>
    props.centered &&
    css`
      justify-content: center;
    `}
`;

export const QuestionTimeStamp = styled(TimeStamp)`
  margin-left: 2.8rem;
  font-size: 0.7rem;
  margin-top: -0.5rem;
`;

export const PollHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid #a7a7ff;
`;

export const EmptyAvatar = styled.div`
  border-radius: 50%;
  width: 2.1em;
  height: 2.1em;
  background-color: #e1efff;
  color: #154499;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 0.9rem;
  margin-left: 0.2rem;
  /* z-index: -6; */
`;

export const Text = styled.span`
  font-size: 0.85rem;
  color: #3b545f;
  margin-right: 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const PollContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
