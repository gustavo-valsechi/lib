"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RowContainer = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
exports.RowContainer = styled_components_1.default.div `
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: 1rem;
    flex-wrap: wrap;
`;
