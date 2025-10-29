"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Content } from "./styles";
import { Container } from "../styles";
import { Component } from "../../..";
import { useModal } from "contexts";
import _ from "lodash";
import actionConfig from "./actions";
export default function Modal(props) {
    const modal = useModal();
    const content = _.omit(props.content, ["actions"]);
    const actions = Object.values(_.pick(props.content, ["actions"]))[0];
    const onClose = () => {
        modal.setProps("table", { toggle: false });
    };
    return (_jsx(Component, { content: [{
                type: "Modal",
                props: {
                    toggle: props.toggle,
                    onClose,
                    children: (_jsx(Container, { children: _jsxs(Content, { children: [_jsx("div", { className: "iz-table-modal-title", children: "Conte\u00FAdo" }), _jsx("div", { className: "iz-table-modal-content", children: _jsx("ul", { children: _.map(content, (value, key) => _jsxs("li", { children: [!!key && _jsx("div", { className: "iz-table-modal-column", children: key }), _jsx("div", { className: "iz-table-modal-row", children: value })] }, key)) }) }), _jsx("div", { className: "iz-table-modal-actions", children: _jsx(Component, { content: _.concat(_.map(actions, (data) => ({
                                            type: "Button",
                                            props: {
                                                ...actionConfig[data.icon] || {},
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
