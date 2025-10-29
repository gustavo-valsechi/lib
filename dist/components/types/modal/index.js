"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from "./styles";
import { Button } from "../..";
import _ from "lodash";
export function Modal(props) {
    var _a, _b, _c;
    return (_jsxs(Container, { ...props, position: props.position || "center", children: [_jsx("div", { className: "iz-modal-back", onClick: props.onClose }), _jsxs("div", { className: "iz-modal-container", children: [(!!props.title || !!props.header) &&
                        _jsxs("div", { className: "iz-modal-header", children: [_jsxs("div", { className: "iz-modal-title", children: [((_a = props.header) === null || _a === void 0 ? void 0 : _a.icon) && _jsx("i", { "aria-hidden": true, className: (_b = props.header) === null || _b === void 0 ? void 0 : _b.icon }), _jsx("span", { children: props.title || ((_c = props.header) === null || _c === void 0 ? void 0 : _c.title) })] }), _jsx("i", { "aria-hidden": true, className: "fa-solid fa-xmark", onClick: props.onClose })] }), _jsxs("div", { className: "iz-modal-content", children: [props.onClose && !props.title && !props.header && !props.noCloseIcon &&
                                _jsx("div", { className: "iz-modal-close", onClick: props.onClose, children: _jsx("i", { "aria-hidden": true, className: "fa-solid fa-xmark" }) }), props.children] }), props.buttons &&
                        _jsx("div", { className: "iz-modal-buttons", children: _.map(props.buttons, (button, index) => _jsx(Button, { ...button }, index)) })] })] }));
}
