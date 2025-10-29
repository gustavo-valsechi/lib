"use client";
import styled from "styled-components";
export const Container = styled.div `
    width: 100%;
    padding-top: .3rem;

    .iz-image-content {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${({ error, theme }) => error ? theme.negative : theme.t2};
        border-radius: 5px;
        overflow: hidden;
        padding: .5rem 1rem;
        width: 100%;
        font-size: .8rem;
        background: ${(props) => props.disabled ? "${({ theme }) => theme.t2}" : "${({ theme }) => theme.primary}"};
        opacity: ${(props) => props.disabled ? ".7" : "1"};
        color: ${({ theme }) => theme.t6};
        cursor: pointer;
    }

    .iz-input-error {
        color: ${({ theme }) => theme.negative};
        font-size: .7rem;
    }
`;
