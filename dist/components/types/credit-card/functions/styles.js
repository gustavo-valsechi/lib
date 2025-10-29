"use client";
import styled from "styled-components";
export const Container = styled.div `
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-left: -2.5rem;
    transition: ease .3s;
    width: 2rem;

    .iz-credit-card-function {
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        background: ${({ theme }) => theme.t05};
        color: ${({ theme }) => theme.t6};
        font-size: .85rem;
        transform: translateX(-2rem);
        opacity: 0;
        cursor: pointer;

        &:hover {
            color: ${({ theme }) => theme.t8};
        }
    }

    .iz-credit-card-function:nth-child(1) {
        transition: 5s ease transform, ease .2s opacity, ease .3s color;
    }

    .iz-credit-card-function:nth-child(2) {
        transition: .3s ease .1s transform, ease .2s opacity, ease .3s color;
    }
`;
