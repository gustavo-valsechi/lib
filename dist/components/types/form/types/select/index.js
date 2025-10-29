"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Container } from "./styles";
import { InputLabel } from "../label";
import _ from "lodash";
export function InputSelect(props) {
    const [focus, setFocus] = useState(false);
    const register = (props.register || ((name) => ({})))(props.name || "");
    const onChange = (event) => {
        const value = event.target.value || "";
        if (register.onChange)
            register.onChange(event);
        if (props.onChange)
            props.onChange(value);
    };
    return (_jsxs(Container, { className: props.className, error: props.error, children: [!!props.label && _jsxs(InputLabel, { children: [props.label, props.required ? "*" : ""] }), _jsxs("div", { className: "iz-input-content", children: [_jsx("select", { ..._.omit(props, ["className", "onChange", "onFocus", "options", "onMouseDown", "onBlur", "maxLength", "required", "register"]), onMouseDown: () => setFocus(!focus), onFocus: () => {
                            if (props.onFocus)
                                props.onFocus(props.name);
                        }, ...register, onBlur: (event) => {
                            if (register.onBlur)
                                register.onBlur(event);
                            setFocus(false);
                        }, onChange: onChange, children: _.map(props.options, (data, index) => _jsx("option", { value: Object.keys(data), children: Object.values(data) }, index)) }), _jsx("i", { "aria-hidden": true, className: focus ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down" })] }), !!props.error && (_jsx("div", { className: "iz-input-error", children: props.error }))] }));
}
