"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
    width: ${({ initialization }) => initialization ? "100vw" : "100%"};
    height: ${({ initialization }) => initialization ? "100vh" : "calc(100vh - 15rem)"};
    display: flex;
    justify-content: center;
    align-items: center;
    position: ${({ initialization }) => initialization ? "absolute" : "relative"};;
    bottom: 0;
    left: 0;
    background: ${({ initialization, theme }) => initialization ? `${theme.maingrad}, ${theme.primary}` : "transparent"};
    z-index: ${({ initialization }) => initialization ? "9" : "0"};
    
    .iz-loading-logo {
        font-size: 4rem;
        opacity: 40%;
        animation: loop 2s infinite;
        position: relative;

        &::before {
            content: "";
            position: absolute;
            width: 5rem;
            height: 5rem;
            animation: firstImpact 2s .5s infinite ease;
            background: ${({ theme }) => theme.t05};
            border-radius: 50%;
            z-index: 0;
            opacity: 0;
        }

        &::after {
            content: "";
            position: absolute;
            width: 5rem;
            height: 5rem;
            animation: secondImpact 2s .5s infinite ease;
            background: ${({ theme }) => theme.t05};
            border-radius: 50%;
            z-index: 0;
            opacity: 0;
        }

        @keyframes loop {
            0% {
                transform: scale(1);
            }
            80% {
                transform: scale(1.3);
            }
            100% {
                transform: scale(1);
            }
        }

        @keyframes firstImpact {
            0% {
                transform: scale(1);
                opacity: 0;
            }
            10% {
                transform: scale(1.6);
                opacity: 1;
            }
            100% {
                transform: scale(1.6);
                opacity: 0;
            }
        }

        @keyframes secondImpact {
            0% {
                transform: scale(1);
                opacity: 0;
            }
            40% {
                transform: scale(1.3);
                opacity: 1;
            }
            100% {
                transform: scale(1.3);
                opacity: 0;
            }
        }
    }
`;
