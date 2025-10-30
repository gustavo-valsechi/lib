"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = Block;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const __1 = require("../..");
function Block(props) {
    return ((0, jsx_runtime_1.jsxs)(styles_1.Container, { children: [(!!props.icon || !!props.label) &&
                (0, jsx_runtime_1.jsxs)("header", { children: [!!props.icon && (0, jsx_runtime_1.jsx)("i", { "aria-hidden": true, className: props.icon }), !!props.label && (0, jsx_runtime_1.jsx)("span", { children: props.label })] }), (0, jsx_runtime_1.jsxs)(styles_1.Content, { children: [!!props.component && (0, jsx_runtime_1.jsx)(__1.Component, { content: props.component }), props.children] })] }));
}
