"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputText = InputText;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_1 = require("./styles");
const label_1 = require("../label");
const lodash_1 = __importDefault(require("lodash"));
function InputText(props) {
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const register = (props.register || ((name) => ({})))(props.name || "");
    const onChange = (event) => {
        const value = event.target.value || "";
        event.target.value = props.mask ? props.mask(value) : value;
        if (register.onChange)
            register.onChange(event);
        if (props.onChange)
            props.onChange(value);
    };
    return ((0, jsx_runtime_1.jsxs)(styles_1.Container, { className: props.className, error: props.error, password: props.type === "password", children: [!!props.label && (0, jsx_runtime_1.jsxs)(label_1.InputLabel, { children: [props.label, props.required ? "*" : ""] }), (0, jsx_runtime_1.jsxs)("div", { className: "iz-input-content", children: [(0, jsx_runtime_1.jsx)("input", { ...lodash_1.default.omit(props, ["className", "register", "mask"]), type: props.type === "password" ? showPassword ? "text" : "password" : props.type, maxLength: props.maxLength || 255, onFocus: () => {
                            if (props.onFocus)
                                props.onFocus(props.name);
                        }, ...register, onChange: onChange }), props.type === "password" && ((0, jsx_runtime_1.jsx)("i", { "aria-hidden": true, className: showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye", onClick: () => setShowPassword(!showPassword) }))] }), !!props.error && ((0, jsx_runtime_1.jsx)("div", { className: "iz-input-error", children: props.error }))] }));
}
