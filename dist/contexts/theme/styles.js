import styled from "styled-components";
export const Switcher = styled.div `
    width: 3rem;
    height: 1.5rem;
    border-radius: 1rem;
    border: 2px solid ${({ theme }) => theme.t05};
    overflow: hidden;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    i {
        color: ${({ theme }) => theme.t6};
        position: absolute;
        transform: translateY(-50%);
        font-size: .9rem;
        z-index: 0;
        transition: ease .8s;

        &:first-child {
            left: .2rem;
            top: 50%;
            opacity: ${(props) => props["data-theme"] === "light" ? 0 : 1};
        }

        &:last-child {
            right: .2rem;
            top: 50%;
            opacity: ${(props) => props["data-theme"] === "light" ? 1 : 0};
        }
    }
    
    .switcher {
        width: 1rem;
        height: 1rem;
        border-radius: 1rem;
        position: relative;
        transition: ease .3s;
        transform: ${(props) => props["data-theme"] === "light" ? "transform: translateX(.2rem)" : "translateX(1.6rem)"};
        z-index: 1;

        div {
            width: 100%;
            height: 100%;
            background: ${({ theme }) => theme.primary};
            border-radius: 1rem;
            position: relative;
            z-index: 2;
        }

        &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            transform: scale(1.8);
            background: ${({ theme }) => theme.t05};
            top: 0;
            left: 0;
            z-index: 1;
        }

        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            transform: scale(3);
            background: ${({ theme }) => theme.t05};
            top: 0;
            left: 0;
            z-index: 0;
        }
    }
`;
