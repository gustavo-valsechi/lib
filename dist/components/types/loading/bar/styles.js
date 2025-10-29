"use client";
import styled from "styled-components";
export const Container = styled.div `
  border-radius: ${(props) => props.borderRadius || "10px"};
  height: ${(props) => props.height || "100%"};
  width: ${(props) => props.width || "100%"};
  animation: loading infinite 2s;
  margin: ${(props) => props.margin || "0px"};

  @keyframes loading {
    0% {
      background: ${(props) => !props.dark ? "rgb(0, 0, 0, 0.05)" : "rgb(255, 255, 255, 0.05)"};
    }
    50% {
      background: ${(props) => !props.dark ? "rgb(0, 0, 0, 0.10)" : "rgb(255, 255, 255, 0.15)"};
    }
    100% {
      background: ${(props) => !props.dark ? "rgb(0, 0, 0, 0.05)" : "rgb(255, 255, 255, 0.05)"};
    }
  }
`;
