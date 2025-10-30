"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputFile = InputFile;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_1 = require("./styles");
const label_1 = require("../label");
function InputFile(props) {
    var _a;
    const inputRef = (0, react_1.useRef)({});
    const register = (props.register || ((name) => ({})))(props.name || "");
    const readImage = (data) => {
        if (props.onPreview)
            props.onPreview(URL.createObjectURL(data));
        if (props.onChange)
            props.onChange(data);
    };
    return ((0, jsx_runtime_1.jsxs)(styles_1.Container, { className: props.className, error: props.error, disabled: props.disabled, children: [(0, jsx_runtime_1.jsx)("input", { hidden: true, type: "file", id: "file", accept: "image/*", ref: inputRef, disabled: props.disabled, name: props.name, onFocus: () => {
                    if (props.onFocus)
                        props.onFocus(props.name);
                }, ...register, onChange: (e) => {
                    var _a;
                    register.onChange(e);
                    readImage((_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0]);
                } }), !!props.label && (0, jsx_runtime_1.jsxs)(label_1.InputLabel, { children: [props.label, props.required ? "*" : ""] }), (0, jsx_runtime_1.jsx)("div", { className: "iz-image-content", onClick: () => inputRef.current.click(), children: ((_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.value) || "selecione uma imagem" }), !!props.error && ((0, jsx_runtime_1.jsx)("div", { className: "iz-input-error", children: props.error }))] }));
}
