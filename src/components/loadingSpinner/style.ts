import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  margin-top: 5rem;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 10px solid grey;
  border-right: 10px solid grey;
  border-bottom: 10px solid grey;
  border-left: 10px solid black;
  background: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
