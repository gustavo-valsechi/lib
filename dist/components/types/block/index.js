"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Content } from "./styles";
import { Component } from "../..";
export function Block(props) {
    return (_jsxs(Container, { children: [(!!props.icon || !!props.label) &&
                _jsxs("header", { children: [!!props.icon && _jsx("i", { "aria-hidden": true, className: props.icon }), !!props.label && _jsx("span", { children: props.label })] }), _jsxs(Content, { children: [!!props.component && _jsx(Component, { content: props.component }), props.children] })] }));
}
