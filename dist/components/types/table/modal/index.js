"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Modal;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const styles_2 = require("../styles");
const __1 = require("../../..");
const _contexts_1 = require("@contexts");
const lodash_1 = __importDefault(require("lodash"));
const actions_1 = __importDefault(require("./actions"));
function Modal(props) {
    const modal = (0, _contexts_1.useModal)();
    const content = lodash_1.default.omit(props.content, ["actions"]);
    const actions = Object.values(lodash_1.default.pick(props.content, ["actions"]))[0];
    const onClose = () => {
        modal.setProps("table", { toggle: false });
    };
    return ((0, jsx_runtime_1.jsx)(__1.Component, { content: [{
                type: "Modal",
                props: {
                    toggle: props.toggle,
                    onClose,
                    children: ((0, jsx_runtime_1.jsx)(styles_2.Container, { children: (0, jsx_runtime_1.jsxs)(styles_1.Content, { children: [(0, jsx_runtime_1.jsx)("div", { className: "iz-table-modal-title", children: "Conte\u00FAdo" }), (0, jsx_runtime_1.jsx)("div", { className: "iz-table-modal-content", children: (0, jsx_runtime_1.jsx)("ul", { children: lodash_1.default.map(content, (value, key) => (0, jsx_runtime_1.jsxs)("li", { children: [!!key && (0, jsx_runtime_1.jsx)("div", { className: "iz-table-modal-column", children: key }), (0, jsx_runtime_1.jsx)("div", { className: "iz-table-modal-row", children: value })] }, key)) }) }), (0, jsx_runtime_1.jsx)("div", { className: "iz-table-modal-actions", children: (0, jsx_runtime_1.jsx)(__1.Component, { content: lodash_1.default.concat(lodash_1.default.map(actions, (data) => ({
                                            type: "Button",
                                            props: {
                                                ...actions_1.default[data.icon] || {},
                                                onClick: data.function
                                            }
                                        })), {
                                            type: "Button",
                                            props: {
                                                label: "fechar",
                                                outline: true,
                                                onClick: onClose
                                            }
                                        }) }) })] }) }))
                }
            }] }));
}
