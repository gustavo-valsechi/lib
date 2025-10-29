"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Container } from "./styles";
import { InputLabel } from "../label";
import _ from "lodash";
export function InputTextarea(props) {
    const register = (props.register || ((name) => ({})))(props.name || "");
    const onChange = (event) => {
        const value = event.target.value || "";
        event.target.value = props.mask ? props.mask(value) : value;
        if (register.onChange)
            register.onChange(event);
        if (props.onChange)
            props.onChange(value);
    };
    return (_jsxs(Container, { className: props.className, error: props.error, children: [!!props.label && _jsxs(InputLabel, { children: [props.label, props.required ? "*" : ""] }), _jsx("div", { className: "iz-input-content", children: _jsx("textarea", { ..._.omit(props, ["onFocus", "maxLength", "className", "onChange", "mask", "rows", "required", "register"]), maxLength: props.maxLength, rows: props.rows || 5, onFocus: () => {
                        if (props.onFocus)
                            props.onFocus(props.name);
                    }, ...register, onChange: onChange }) }), !!props.error && (_jsx("div", { className: "iz-input-error", children: props.error }))] }));
}
