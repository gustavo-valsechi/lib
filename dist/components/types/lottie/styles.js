"use client";
import styled from "styled-components";
export const Container = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .3rem;

  label {
    font-size: ${(props) => props.size || "2"}rem;
    color: ${(props) => props.theme.t5};
  }

  label:first-child {
    font-weight: 900;
    color: ${(props) => props.theme.secondary};
  }

  label:last-child {
    font-weight: 600;
  }
`;
