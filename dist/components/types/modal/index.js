"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = Modal;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const __1 = require("../..");
const lodash_1 = __importDefault(require("lodash"));
function Modal(props) {
    var _a, _b, _c;
    return ((0, jsx_runtime_1.jsxs)(styles_1.Container, { ...props, position: props.position || "center", children: [(0, jsx_runtime_1.jsx)("div", { className: "iz-modal-back", onClick: props.onClose }), (0, jsx_runtime_1.jsxs)("div", { className: "iz-modal-container", children: [(!!props.title || !!props.header) &&
                        (0, jsx_runtime_1.jsxs)("div", { className: "iz-modal-header", children: [(0, jsx_runtime_1.jsxs)("div", { className: "iz-modal-title", children: [((_a = props.header) === null || _a === void 0 ? void 0 : _a.icon) && (0, jsx_runtime_1.jsx)("i", { "aria-hidden": true, className: (_b = props.header) === null || _b === void 0 ? void 0 : _b.icon }), (0, jsx_runtime_1.jsx)("span", { children: props.title || ((_c = props.header) === null || _c === void 0 ? void 0 : _c.title) })] }), (0, jsx_runtime_1.jsx)("i", { "aria-hidden": true, className: "fa-solid fa-xmark", onClick: props.onClose })] }), (0, jsx_runtime_1.jsxs)("div", { className: "iz-modal-content", children: [props.onClose && !props.title && !props.header && !props.noCloseIcon &&
                                (0, jsx_runtime_1.jsx)("div", { className: "iz-modal-close", onClick: props.onClose, children: (0, jsx_runtime_1.jsx)("i", { "aria-hidden": true, className: "fa-solid fa-xmark" }) }), props.children] }), props.buttons &&
                        (0, jsx_runtime_1.jsx)("div", { className: "iz-modal-buttons", children: lodash_1.default.map(props.buttons, (button, index) => (0, jsx_runtime_1.jsx)(__1.Button, { ...button }, index)) })] })] }));
}
