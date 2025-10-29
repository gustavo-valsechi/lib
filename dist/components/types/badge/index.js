"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Container } from "./styles";
import { useTheme } from "contexts";
import _ from "lodash";
export function Badge(props) {
    const { content } = useTheme();
    const status = {
        ATIVO: "positive",
        DESATIVADO: "negative",
        ESTAVEL: "positive",
        INSTAVEL: "negative",
        REGULAR: "negative",
    };
    return (_jsx(Container, { color: status[props.value] || content.t3, children: _jsx("div", { className: "content", children: _jsx("div", { children: _.lowerCase(props.value) }) }) }));
}
