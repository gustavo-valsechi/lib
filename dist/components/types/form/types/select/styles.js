"use client";
import styled from "styled-components";
export const Container = styled.div `
    width: 100%;
    padding-top: .3rem;

    .iz-input-content {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${({ error, theme }) => error ? theme.negative : theme.t2};
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        cursor: pointer;

        select {
            border: 0;
            padding: .5rem 2.3rem .5rem 1rem;
            width: 100%;
            font-size: .8rem;
            appearance: none;
            cursor: pointer;
            background-color: ${({ theme }) => theme.primary};
            color: ${({ theme }) => theme.t6};

            &:disabled {
                background-color: ${({ theme }) => theme.t2};
                color: ${({ theme }) => theme.t6};
                opacity: .7;
            }

            &:focus-visible {
                outline: none;
            }
        }

        i {
            position: absolute;
            top: 50%;
            right: .8rem;
            transform: translateY(-50%);
            font-size: .8rem;
            color: ${({ theme }) => theme.t6};
        }
    }

    .iz-input-error {
        color: ${({ theme }) => theme.negative};
        font-size: .7rem;
    }
`;
