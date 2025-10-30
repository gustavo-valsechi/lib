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
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;

    .paginate {
        font-size: .8rem;
        font-weight: 500;
        height: 1.5rem;
        padding: 0 .6rem;
        border-radius: 1rem;
        transition: ease .3s;
        color: ${({ theme }) => theme.t6};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &[data-current="true"] {
            background: ${({ theme }) => theme.tertiary};
            color: ${({ theme }) => theme.secondary};

            &:hover {
                background: ${({ theme }) => theme.tertiary};
            }
        }

        &:hover {
            background: ${({ theme }) => theme.t05};
        }
    }
`;
