"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingApp = LoadingApp;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const logo_1 = require("../../logo");
function LoadingApp(props) {
    return ((0, jsx_runtime_1.jsx)(styles_1.Container, { ...props, children: (0, jsx_runtime_1.jsx)(logo_1.Logo, { className: "iz-loading-logo", onlyPrefix: true }) }));
}
