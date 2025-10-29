"use client";
import styled from "styled-components";
export const Content = styled.div `
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
    .iz-table-modal-title {
        font-size: 1.2rem;
        font-weight: 500;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.t6};
    }
    
    .iz-table-modal-content {
        ul {
            li {
                border-bottom: solid 1px ${({ theme }) => theme.t05};
                padding: .8rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
                font-size: .8rem;
                color: ${({ theme }) => theme.t6};

                &:last-child {
                    border-bottom: none;
                }
                
                .iz-table-modal-column {
                    background: ${({ theme }) => theme.t05};
                    padding: .5rem .8rem;
                    font-weight: 600;
                    border-radius: 5px;
                }
                
                .iz-table-modal-row {
                    text-align: right;
                }
            }
        }
    }
    
    .iz-table-modal-actions {
        margin-top: 1rem;
    }
`;
