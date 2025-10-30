"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreditCardFunctions;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const lodash_1 = __importDefault(require("lodash"));
function CreditCardFunctions(props) {
    return lodash_1.default.some(props.functions, (data) => !data.hide) && ((0, jsx_runtime_1.jsx)(styles_1.Container, { className: "iz-credit-card-function-container", children: lodash_1.default.map(props.functions, (data, index) => !data.hide &&
            (0, jsx_runtime_1.jsx)("div", { className: "iz-credit-card-function", onClick: data.function, children: (0, jsx_runtime_1.jsx)("i", { "aria-hidden": true, className: data.icon }) }, index)) }));
}
