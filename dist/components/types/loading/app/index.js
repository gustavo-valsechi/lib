"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Container } from "./styles";
import { Logo } from "../../logo";
export function LoadingApp(props) {
    return (_jsx(Container, { ...props, children: _jsx(Logo, { className: "iz-loading-logo", onlyPrefix: true }) }));
}
