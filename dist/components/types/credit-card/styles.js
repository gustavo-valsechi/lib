"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
    border-radius: 8px 8px 0 0;
    transition: .2s ease .2s background, .2s ease .2s padding;
    position: relative;
    display: flex;
    gap: .5rem;
    height: 11rem;
    pointer-events: all;

    @media(max-width: ${({ theme }) => theme.mobileMaxWidth}) {
        width: 100%;
    }

    &:hover {
        .iz-credit-card-function-container {
            margin-left: 0;

            .iz-credit-card-function {
                transform: translateX(0);
                opacity: 1;
            }

            .iz-credit-card-function:nth-child(1) {
                transition: .3s ease transform, .2s ease .1s opacity, ease .3s color;
            }

            .iz-credit-card-function:nth-child(2) {
                transition: .3s ease .1s transform, .2s ease .2s opacity, ease .3s color;
            }
        }
    }
`;
