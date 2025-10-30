"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputTextarea = InputTextarea;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const label_1 = require("../label");
const lodash_1 = __importDefault(require("lodash"));
function InputTextarea(props) {
    const register = (props.register || ((name) => ({})))(props.name || "");
    const onChange = (event) => {
        const value = event.target.value || "";
        event.target.value = props.mask ? props.mask(value) : value;
        if (register.onChange)
            register.onChange(event);
        if (props.onChange)
            props.onChange(value);
    };
    return ((0, jsx_runtime_1.jsxs)(styles_1.Container, { className: props.className, error: props.error, children: [!!props.label && (0, jsx_runtime_1.jsxs)(label_1.InputLabel, { children: [props.label, props.required ? "*" : ""] }), (0, jsx_runtime_1.jsx)("div", { className: "iz-input-content", children: (0, jsx_runtime_1.jsx)("textarea", { ...lodash_1.default.omit(props, ["onFocus", "maxLength", "className", "onChange", "mask", "rows", "required", "register"]), maxLength: props.maxLength, rows: props.rows || 5, onFocus: () => {
                        if (props.onFocus)
                            props.onFocus(props.name);
                    }, ...register, onChange: onChange }) }), !!props.error && ((0, jsx_runtime_1.jsx)("div", { className: "iz-input-error", children: props.error }))] }));
}
