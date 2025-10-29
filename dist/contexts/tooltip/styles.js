import styled from "styled-components";
export const Tooltip = styled.div `
    position: fixed;
    background: ${({ theme }) => theme.tooltip};
    color: ${({ theme }) => theme.t6};
    font-size: .8rem;
    font-weight: 500;
    text-align: center;
    padding: .3rem .8rem;
    border-radius: 5px;
    transform: translateX(-50%);
    z-index: 10;
    border: 1px solid ${({ theme }) => theme.t05};

    &::before {
        content: "";
        position: absolute;
        bottom: -9px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid ${({ theme }) => theme.t05};
    }

    &::after {
        content: "";
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid ${({ theme }) => theme.tooltip};
    }
`;
