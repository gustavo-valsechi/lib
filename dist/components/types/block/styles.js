"use client";
import styled from "styled-components";
export const Container = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.3rem 1.5rem;
    border-radius: 5px;
    background: ${({ theme }) => theme.t05};
    flex: 1 1 20rem;

    header {
        display: flex;
        align-items: center;
        gap: .5rem;
        font-size: .9rem;
        font-weight: 600;
        color: ${({ theme }) => theme.t6};
    }
`;
export const Content = styled.div `
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.t7};
`;
