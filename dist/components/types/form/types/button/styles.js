"use client";
import styled from "styled-components";
export const Container = styled.button `
    border-radius: 5px;
    font-size: .8rem;
    font-weight: 500;
    transition: ease .3s;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.transparent
    ? props.theme.t6
    : props.outline
        ? props.color || props.theme.secondary
        : "#fff !important"};
    background: ${(props) => props.transparent
    ? "transparent"
    : props.outline ? props.theme.t05 : props.color || props.theme.secondary};
    border: 1px solid ${(props) => props.transparent
    ? "transparent"
    : props.outline ? props.theme.t05 : props.color || props.theme.secondary};
    pointer-events: ${(props) => props.loading === "true" ? "none" : "auto"};
    cursor: ${(props) => props.loading === "true" ? "default" : "pointer"};
    opacity: ${(props) => props.loading === "true" ? .6 : 1};
    padding: .4rem 2.5rem;
    transition: ease .3s;

    span {
        text-align: center;
        cursor: ${(props) => props.loading === "true" ? "default" : "pointer"};
    }

    &:disabled {
        pointer-events: none;
        
        &::before {
            opacity: .6;
        }
    }

    &:hover {
        opacity: .9;
        color: ${(props) => props.transparent
    ? props.theme.t6
    : props.outline
        ? props.color || props.theme.secondary
        : "#fff"};
        
        &::before {
            background: ${(props) => props.transparent
    ? "transparent"
    : props.color || props.theme.secondary};
        }
    }
`;
