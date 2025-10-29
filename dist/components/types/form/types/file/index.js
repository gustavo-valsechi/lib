"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { Container } from "./styles";
import { InputLabel } from "../label";
export function InputFile(props) {
    var _a;
    const inputRef = useRef({});
    const register = (props.register || ((name) => ({})))(props.name || "");
    const readImage = (data) => {
        if (props.onPreview)
            props.onPreview(URL.createObjectURL(data));
        if (props.onChange)
            props.onChange(data);
    };
    return (_jsxs(Container, { className: props.className, error: props.error, disabled: props.disabled, children: [_jsx("input", { hidden: true, type: "file", id: "file", accept: "image/*", ref: inputRef, disabled: props.disabled, name: props.name, onFocus: () => {
                    if (props.onFocus)
                        props.onFocus(props.name);
                }, ...register, onChange: (e) => {
                    var _a;
                    register.onChange(e);
                    readImage((_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0]);
                } }), !!props.label && _jsxs(InputLabel, { children: [props.label, props.required ? "*" : ""] }), _jsx("div", { className: "iz-image-content", onClick: () => inputRef.current.click(), children: ((_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.value) || "selecione uma imagem" }), !!props.error && (_jsx("div", { className: "iz-input-error", children: props.error }))] }));
}
