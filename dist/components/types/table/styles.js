"use client";
import styled from "styled-components";
export const Container = styled.div `
    .iz-table-container {
        overflow-x: auto;

        &::-webkit-scrollbar {
            width: 0;
            height: ${(props) => (props.notFound ? "0px" : "5px")};
        }

        &::-webkit-scrollbar-track {
            background: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: rgb(255, 255, 255, 0.1);
            border-radius: 5px;
        }

        table {
            font-size: .8rem;
            border: 0;
            color: ${({ theme }) => theme.t6};
            overflow-x: ${(props) => (props.notFound ? "auto" : "hidden")};
            width: 100%;
            border-spacing: 0;

            .iz-table-content {
                background: ${({ theme }) => theme.t05};
                height: 2.7rem;
                padding: 0.8rem 1.3rem;
                margin-top: 0.5rem;
                white-space: nowrap;
                display: flex;
                align-items: center;
                position: relative;
                transition: ease 0.3s;

                &.iz-table-identifier {
                    padding: .8rem .5rem !important;
                }

                &.iz-table-action {
                    display: flex;
                    justify-content: flex-end;
                    padding: .8rem .5rem !important;
                    position: relative;

                    &.left {
                        justify-content: flex-start;
                    }

                    &.center {
                        justify-content: center;
                    }

                    .iz-table-actions {
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        gap: .5rem;
                    }

                    .iz-table-button {
                        min-width: 1.8rem;
                        height: 1.8rem;
                        border-radius: 5px;
                        border: 1px solid ${({ theme }) => theme.t05};
                        background: ${({ theme }) => theme.t05};
                        color: ${({ theme }) => theme.t6};
                        cursor: pointer;
                        transition: ease 0.3s, width 1s, position 0s;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: .5rem;
                        font-weight: 500;
                        text-transform: lowercase;
                        padding: 0 .5rem;
                        position: relative;

                        &:disabled {
                            pointer-events: none;
                            opacity: .6;
                        }

                        &:hover {
                            opacity: .9;

                            &.negative {
                                color: ${({ theme }) => theme.primary};
                                background: ${({ theme }) => theme.negative};
                            }
                        }
                    }
                }
            }

            thead {
                tr {
                    th {
                        border: none;
                        padding: 0;
                        text-transform: uppercase;
                        font-weight: 500;
                        letter-spacing: 2px;
                        position: relative;
                        height: 2.5rem;

                        @media (max-width: ${({ theme }) => theme.mobileMaxWidth}) {
                            .iz-table-content {
                                font-size: .7rem;
                            }
                        }

                        @media (max-width: ${({ theme }) => theme.mobileMaxWidth}) {
                            display: none;

                            &:nth-child(1), &:nth-child(2), &:last-child {
                                display: table-cell;
                            }
                        }

                        &:first-child {
                            .iz-table-content {
                                border-top-left-radius: 5px;
                                border-bottom-left-radius: 5px;
                            }
                        }

                        &:last-child {
                            .iz-table-content {
                                border-top-right-radius: 5px;
                                border-bottom-right-radius: 5px;
                            }
                        }
                    }
                }
            }

            tbody {
                tr {
                    &:hover {
                        td {
                            .iz-table-content {
                                background: ${({ theme }) => theme.tertiary};
                            }
                        }
                    }

                    td {
                        border: none;
                        padding: 0;
                        font-weight: 400;
                        position: relative;

                        @media (max-width: ${({ theme }) => theme.mobileMaxWidth}) {
                            display: none;

                            &:nth-child(1), &:nth-child(2), &:last-child {
                                display: table-cell;
                            }
                        }

                        &:first-child {
                            .iz-table-content {
                                border-top-left-radius: 5px;
                                border-bottom-left-radius: 5px;
                            }
                        }

                        &:last-child {
                            .iz-table-content {
                                border-top-right-radius: 5px;
                                border-bottom-right-radius: 5px;
                            }
                        }

                        .iz-table-content-elipse {
                            position: absolute;
                            left: 0;
                            right: 0;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            padding: 0.8rem 1.3rem;
                        }
                    }

                    &:first-child {
                        td {
                            .iz-table-content {
                                margin-top: 1.5rem;
                            }
                        }
                    }
                }
            }
        }
    }

    .iz-table-icon {
        width: 1.8rem;
        height: 1.8rem;
        background: ${({ theme }) => theme.t08};
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        i {
            font-size: .9rem;
        }
    }
    
    .iz-table-not-found {
        border-radius: 5px;
        background: ${({ theme }) => theme.t05};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1.5rem 0;
        padding: 2.5rem;
        width: 100%;

        p {
            color: ${({ theme }) => theme.t6};
            text-align: center;
        }

        p:first-child {
            font-size: 1.3rem;
            font-weight: 600;
            margin-top: 0;
            margin-bottom: 0.5rem;

            @media (max-width: ${({ theme }) => theme.mobileMaxWidth}) {
                font-size: 1rem;
            }
        }

        p:last-child {
            font-size: 0.8rem;
            max-width: 50rem;
            margin-top: 0;
            margin-bottom: 0;

            @media (max-width: ${({ theme }) => theme.mobileMaxWidth}) {
                font-size: 0.7rem;
            }
        }
    }
`;
