"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Container } from "./styles";
import { InputLabel } from "../label";
import _ from "lodash";
export function InputText(props) {
    const [showPassword, setShowPassword] = useState(false);
    const register = (props.register || ((name) => ({})))(props.name || "");
    const onChange = (event) => {
        const value = event.target.value || "";
        event.target.value = props.mask ? props.mask(value) : value;
        if (register.onChange)
            register.onChange(event);
        if (props.onChange)
            props.onChange(value);
    };
    return (_jsxs(Container, { className: props.className, error: props.error, password: props.type === "password", children: [!!props.label && _jsxs(InputLabel, { children: [props.label, props.required ? "*" : ""] }), _jsxs("div", { className: "iz-input-content", children: [_jsx("input", { ..._.omit(props, ["className", "register", "mask"]), type: props.type === "password" ? showPassword ? "text" : "password" : props.type, maxLength: props.maxLength || 255, onFocus: () => {
                            if (props.onFocus)
                                props.onFocus(props.name);
                        }, ...register, onChange: onChange }), props.type === "password" && (_jsx("i", { "aria-hidden": true, className: showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye", onClick: () => setShowPassword(!showPassword) }))] }), !!props.error && (_jsx("div", { className: "iz-input-error", children: props.error }))] }));
}
