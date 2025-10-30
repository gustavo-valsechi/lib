"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
  border-radius: ${(props) => props.borderRadius || "10px"};
  height: ${(props) => props.height || "100%"};
  width: ${(props) => props.width || "100%"};
  animation: loading infinite 2s;
  margin: ${(props) => props.margin || "0px"};

  @keyframes loading {
    0% {
      background: ${(props) => !props.dark ? "rgb(0, 0, 0, 0.05)" : "rgb(255, 255, 255, 0.05)"};
    }
    50% {
      background: ${(props) => !props.dark ? "rgb(0, 0, 0, 0.10)" : "rgb(255, 255, 255, 0.15)"};
    }
    100% {
      background: ${(props) => !props.dark ? "rgb(0, 0, 0, 0.05)" : "rgb(255, 255, 255, 0.05)"};
    }
  }
`;
