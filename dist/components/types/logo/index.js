"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = Logo;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
function Logo(props) {
    return ((0, jsx_runtime_1.jsxs)(styles_1.Container, { ...props, children: [(0, jsx_runtime_1.jsx)("label", { children: "IZ" }), !props.onlyPrefix && (0, jsx_runtime_1.jsx)("label", { children: "Way" })] }));
}
