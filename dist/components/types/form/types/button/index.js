"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = Button;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const loading_1 = require("./loading");
const lodash_1 = __importDefault(require("lodash"));
function Button(props) {
    return ((0, jsx_runtime_1.jsxs)(styles_1.Container, { loading: String(!!props.loading), disabled: props.disabled, type: props.type || "button", ...lodash_1.default.omit(props, ["loading", "type"]), children: [!!props.loading && (0, jsx_runtime_1.jsx)(loading_1.Loading, {}), (0, jsx_runtime_1.jsx)("span", { children: props.label })] }));
}
