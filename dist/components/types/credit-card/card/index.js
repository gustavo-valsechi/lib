"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { Container } from "./styles";
import { getCardContent } from "../tools";
import { Utils } from "tools";
import assets from "../assets";
import _ from "lodash";
export default function CreditCardComponent(props) {
    var _a;
    const flagRef = useRef({});
    useEffect(() => {
        const content = getCardContent(props.number);
        if (!flagRef.current)
            return;
        if (!content.logo) {
            flagRef.current.style.backgroundImage = "";
            return;
        }
        flagRef.current.style.backgroundImage = `url(${content.logo})`;
    }, [flagRef, props.number]);
    return (_jsxs(Container, { children: [_jsxs("div", { className: "iz-credit-card-left", children: [_jsx("div", { className: "iz-credit-card-top", children: _jsx("div", { id: "iz-credit-card-chip", style: { backgroundImage: `url(${assets.Chip})` } }) }), _jsxs("div", { className: "iz-credit-card-bottom", children: [_jsx("div", { className: "iz-credit-card-number", children: _jsx("div", { className: "iz-credit-card-elipse", children: Utils.mask.loop(props.number, { sequencyNumber: 4, maxSequency: 4, placeholder: "•" }) }) }), _jsx("div", { className: "iz-credit-card-name", children: _jsx("div", { className: "iz-credit-card-elipse", children: _.deburr((_a = props.name) === null || _a === void 0 ? void 0 : _a.replace(/[^A-Za-zÀ-ÿ\s]/g, "").toUpperCase()) || "Nome do Titular" }) })] })] }), _jsxs("div", { className: "iz-credit-card-right", children: [_jsx("div", { className: "iz-credit-card-top", children: _jsx("div", { id: "iz-credit-card-flag", ref: flagRef }) }), _jsxs("div", { className: "iz-credit-card-bottom", children: [_jsx("span", { children: "validade" }), _jsx("span", { children: Utils.mask.loop(props.expiry, { sequencyNumber: 2, maxSequency: 2, placeholder: "•", separator: "/" }) })] })] })] }));
}
