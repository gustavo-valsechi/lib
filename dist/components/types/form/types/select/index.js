"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelect = InputSelect;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_1 = require("./styles");
const label_1 = require("../label");
const lodash_1 = __importDefault(require("lodash"));
function InputSelect(props) {
    const [focus, setFocus] = (0, react_1.useState)(false);
    const register = (props.register || ((name) => ({})))(props.name || "");
    const onChange = (event) => {
        const value = event.target.value || "";
        if (register.onChange)
            register.onChange(event);
        if (props.onChange)
            props.onChange(value);
    };
    return ((0, jsx_runtime_1.jsxs)(styles_1.Container, { className: props.className, error: props.error, children: [!!props.label && (0, jsx_runtime_1.jsxs)(label_1.InputLabel, { children: [props.label, props.required ? "*" : ""] }), (0, jsx_runtime_1.jsxs)("div", { className: "iz-input-content", children: [(0, jsx_runtime_1.jsx)("select", { ...lodash_1.default.omit(props, ["className", "onChange", "onFocus", "options", "onMouseDown", "onBlur", "maxLength", "required", "register"]), onMouseDown: () => setFocus(!focus), onFocus: () => {
                            if (props.onFocus)
                                props.onFocus(props.name);
                        }, ...register, onBlur: (event) => {
                            if (register.onBlur)
                                register.onBlur(event);
                            setFocus(false);
                        }, onChange: onChange, children: lodash_1.default.map(props.options, (data, index) => (0, jsx_runtime_1.jsx)("option", { value: Object.keys(data), children: Object.values(data) }, index)) }), (0, jsx_runtime_1.jsx)("i", { "aria-hidden": true, className: focus ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down" })] }), !!props.error && ((0, jsx_runtime_1.jsx)("div", { className: "iz-input-error", children: props.error }))] }));
}
