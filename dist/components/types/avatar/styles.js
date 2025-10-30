"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
  width: ${({ size }) => size || "2.3rem"};
  height: ${({ size }) => size || "2.3rem"};
  border-radius: ${({ size }) => size || "2.3rem"};
  border: 2px solid ${({ theme }) => theme.t1};
  background: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ onClick }) => onClick ? "pointer" : "default"};
  transition: ease .2s;
  position: relative;
  font-size: ${({ width }) => width / 2.5}px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};

  span {
    position: relative;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transition: ease .2s;
    background: ${({ theme }) => theme.t03};
    border-radius: ${({ size }) => size || "2.3rem"};
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transition: ease .2s;
    background: ${({ theme }) => theme.t05};
    border-radius: ${({ size }) => size || "2.3rem"};
    z-index: 0;
  }

  &:hover {
    &::before {
      transform: scale(1.6);
    }

    &::after {
      transform: scale(1.3);
    }
  }
`;
