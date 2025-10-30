"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
    width: 100%;
    padding-top: .3rem;

    .iz-input-content {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${({ error, theme }) => error ? theme.negative : theme.t2};
        border-radius: 5px;
        overflow: hidden;

        input {
            border: 0;
            padding: .5rem 1rem;
            width: 100%;
            font-size: .8rem;
            background-color: ${({ theme }) => theme.primary};
            color: ${({ theme }) => theme.t6};
            color-scheme: ${(props) => props.theme || "light"};

            &:disabled {
                background-color: ${({ theme }) => theme.t2};
                color: ${({ theme }) => theme.t6};
                opacity: .7;
            }

            &:focus-visible {
                outline: none;
            }
        }
    }

    .iz-input-error {
        color: ${({ theme }) => theme.negative};
        font-size: .7rem;
    }
`;
