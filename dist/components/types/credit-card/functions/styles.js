"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
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
