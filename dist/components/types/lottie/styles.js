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
  align-items: center;
  justify-content: center;
  gap: .3rem;

  label {
    font-size: ${(props) => props.size || "2"}rem;
    color: ${(props) => props.theme.t5};
  }

  label:first-child {
    font-weight: 900;
    color: ${(props) => props.theme.secondary};
  }

  label:last-child {
    font-weight: 600;
  }
`;
