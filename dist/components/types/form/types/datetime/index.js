"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputDateTime = InputDateTime;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const label_1 = require("../label");
const lodash_1 = __importDefault(require("lodash"));
function InputDateTime(props) {
    const register = (props.register || ((name) => ({})))(props.name || "");
    const onChange = (event) => {
        const value = event.target.value || "";
        event.target.value = props.mask ? props.mask(value) : value;
        if (register.onChange)
            register.onChange(event);
        if (props.onChange)
            props.onChange(event);
    };
    return ((0, jsx_runtime_1.jsxs)(styles_1.Container, { className: props.className, error: props.error, children: [!!props.label && (0, jsx_runtime_1.jsxs)(label_1.InputLabel, { children: [props.label, props.required ? "*" : ""] }), (0, jsx_runtime_1.jsx)("div", { className: "iz-input-content", children: (0, jsx_runtime_1.jsx)("input", { ...lodash_1.default.omit(props, ["className", "onChange", "mask", "type", "required", "register"]), type: "datetime-local", onFocus: () => {
                        if (props.onFocus)
                            props.onFocus(props.name);
                    }, maxLength: props.maxLength || 255, ...register, onChange: onChange }) }), !!props.error && ((0, jsx_runtime_1.jsx)("div", { className: "iz-input-error", children: props.error }))] }));
}
