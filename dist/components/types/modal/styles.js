"use client";
import styled from "styled-components";
export const Container = styled.div `
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  display: flex !important;
  position: fixed;
  z-index: ${(props) => (props.toggle ? "9" : "-1")};
  flex-direction: ${(props) => (props.position === "left" ? "row-reverse" : "row")} !important;
  transform: ${(props) => (props.toggle ? "translateX(0%)" : "translateX(100%)")};
  transition: ${(props) => (props.toggle ? ".0s ease .0s" : ".3s ease .3s")};

  .iz-modal-back {
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.3);
    opacity: ${(props) => (props.toggle ? "1" : "0")};
    transition: ease 0.3s;
    position: absolute;
  }

  .iz-modal-container {
    display: flex;
    flex-direction: column;
    height: ${(props) => props.position !== "center" ? "100%" : undefined};
    width: ${(props) => props.position !== "center" ? "18rem" : undefined};
    border-radius: ${(props) => props.position === "center" ? "10px" : undefined};
    max-height: ${(props) => props.position === "center" ? "95%" : "100%"};
    max-width: ${(props) => props.position === "center" ? "95%" : "100%"};
    background: ${({ theme }) => theme.primary};
    transform: ${(props) => props.toggle
    ? props.position === "right" || props.position === "left"
        ? "translateX(0rem)"
        : "translateX(-50%) translateY(50%)"
    : props.position === "right"
        ? "translateX(18rem)"
        : props.position === "left"
            ? "translateX(-18rem)"
            : "translateX(-50%) translateY(43%)"};
    opacity: ${(props) => props.position === "center" && !props.toggle ? "0" : "1"};
    transition: ease 0.3s;
    position: absolute;

    ${(props) => (props.position === "right"
    ? "right: 0;"
    : props.position === "left"
        ? "left: 0;"
        : "left: 50%; bottom: 50%;")}

    @media(max-width: ${({ theme }) => theme.mobileMaxWidth}) {
      border-radius: ${(props) => props.position === "center" ? "10px 10px 0 0" : undefined};
      width: ${(props) => props.position !== "center" ? "18rem" : "100%"};
      max-width: 100%;
      padding-bottom: 3rem !important;

      transform: ${(props) => props.toggle
    ? props.position === "right" || props.position === "left"
        ? "translateX(0rem)"
        : "translateX(-50%) translateY(0)"
    : props.position === "right"
        ? "translateX(18rem)"
        : props.position === "left"
            ? "translateX(-18rem)"
            : "translateX(-50%) translateY(50%)"};

      ${(props) => (props.position === "right"
    ? "right: 0;"
    : props.position === "left"
        ? "left: 0;"
        : "left: 50%; bottom: 0;")}
    }

    .iz-modal-header {
      padding: 1.5rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgb(0, 0, 0, 0.2);

      .iz-modal-title {
        color: ${({ theme }) => theme.t6};
        font-size: 1rem;
        font-weight: 500;

        i {
          margin-right: .5rem;
        }

        span {
          word-break: break-word;
        }
      }

      .fa-xmark {
        color: ${({ theme }) => theme.t6};
        margin-left: .5rem;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.t8};
        }
      }
    }

    .iz-modal-content {
      overflow-x: hidden;
      overflow-y: overlay;
      position: relative;
      height: ${(props) => props.position === "center" ? "initial" : "100%"};

      .iz-modal-close {
        position: absolute;
        color: ${(props) => props.light ? "rgb(255, 255, 255, 0.6)" : "rgb(0, 0, 0, 0.6)"};
        top: ${(props) => props.position === "center" ? "1rem" : "1.5rem"};
        right: ${(props) => props.position === "center" ? "1rem" : "1.5rem"};
        width: 1rem;
        height: 1rem;
        cursor: pointer;
        z-index: 9;
        display: flex;
        align-items: center;
        justify-content: center;
          
        @media(max-width: ${({ theme }) => theme.mobileMaxWidth}) {
           display: none;
        }

        &:hover {
          color: ${(props) => props.light ? "rgb(255, 255, 255, 1)" : "rgb(0, 0, 0, 1)"};
        }
      }
    }

    .iz-modal-buttons {
      padding: 1rem 2rem;

      @media(max-width: ${({ theme }) => theme.mobileMaxWidth}) {
        padding: 1rem 2rem 2rem;
      }

      button {
        width: 100%;
        margin-bottom: .5rem;
      }

      button:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
