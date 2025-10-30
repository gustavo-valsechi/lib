"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = Badge;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const _contexts_1 = require("@contexts");
const lodash_1 = __importDefault(require("lodash"));
function Badge(props) {
    const { content } = (0, _contexts_1.useTheme)();
    const status = {
        ATIVO: "positive",
        DESATIVADO: "negative",
        ESTAVEL: "positive",
        INSTAVEL: "negative",
        REGULAR: "negative",
    };
    return ((0, jsx_runtime_1.jsx)(styles_1.Container, { color: status[props.value] || content.t3, children: (0, jsx_runtime_1.jsx)("div", { className: "content", children: (0, jsx_runtime_1.jsx)("div", { children: lodash_1.default.lowerCase(props.value) }) }) }));
}
