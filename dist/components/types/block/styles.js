"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.3rem 1.5rem;
    border-radius: 5px;
    background: ${({ theme }) => theme.t05};
    flex: 1 1 20rem;

    header {
        display: flex;
        align-items: center;
        gap: .5rem;
        font-size: .9rem;
        font-weight: 600;
        color: ${({ theme }) => theme.t6};
    }
`;
exports.Content = styled_components_1.default.div `
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.t7};
`;
