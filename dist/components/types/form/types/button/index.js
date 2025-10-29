"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from "./styles";
import { Loading } from "./loading";
import _ from "lodash";
export function Button(props) {
    return (_jsxs(Container, { loading: String(!!props.loading), disabled: props.disabled, type: props.type || "button", ..._.omit(props, ["loading", "type"]), children: [!!props.loading && _jsx(Loading, {}), _jsx("span", { children: props.label })] }));
}
