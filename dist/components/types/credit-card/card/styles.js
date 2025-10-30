"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
    height: 11rem;
    width: 20rem;
    border-radius: 8px;
    background: ${({ theme }) => theme.t05};
    padding: 1.5rem;
    display: inline-flex;
    justify-content: space-between;
    gap: 1rem;
    white-space: nowrap;
    position: relative;
    z-index: 0;
    backdrop-filter: blur(5px);

    @media(max-width: ${({ theme }) => theme.mobileMaxWidth}) {
        width: 100%;
        height: 10rem;
    }

    @media(max-width: ${({ theme }) => theme.mobileMinWidth}) {
        height: 9rem;
    }

    .iz-credit-card-left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;
        width: 100%;

        .iz-credit-card-top {
            div {
                width: 2.5rem;
                height: 1.5rem;
                background-size: contain;
                background-repeat: no-repeat;
            }
        }

        .iz-credit-card-bottom {
            display: flex;
            flex-direction: column;
            gap: .8rem;

            .iz-credit-card-elipse {
                position: absolute;
                left: 0;
                right: 0;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .iz-credit-card-number {
                font-size: 1.1rem;
                font-weight: 600;
                color: ${({ theme }) => theme.t6};
                position: relative;
                height: 1.1rem;

                @media(max-width: ${({ theme }) => theme.mobileMaxWidth}) {
                    font-size: .9rem;
                    height: .9rem;
                }

                @media(max-width: ${({ theme }) => theme.mobileMinWidth}) {
                    font-size: .7rem;
                    height: .7rem;
                }
            }

            .iz-credit-card-name {
                font-size: .9rem;
                font-weight: 500;
                position: relative;
                text-transform: uppercase;
                color: ${({ theme }) => theme.t5};
                height: .9rem;

                @media(max-width: ${({ theme }) => theme.mobileMaxWidth}) {
                    font-size: .7rem;
                    height: .7rem;
                }

                @media(max-width: ${({ theme }) => theme.mobileMinWidth}) {
                    font-size: .5rem;
                    height: .5rem;
                }
            }
        }
    }

    .iz-credit-card-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        gap: 1rem;

        .iz-credit-card-top {
            display: flex;
            justify-content: end;

            div {
                width: 2.5rem;
                height: 2.5rem;
                background-size: contain;
                background-repeat: no-repeat;
            }
        }

        .iz-credit-card-bottom {
            display: flex;
            flex-direction: column;
            text-align: right;

            span:first-child {
                font-size: .6rem;
                font-weight: 600;
                color: ${({ theme }) => theme.t3};
            }

            span:last-child {
                font-size: .8rem;
                font-weight: 600;
                color: ${({ theme }) => theme.t5};
            }
        }
    }
`;
