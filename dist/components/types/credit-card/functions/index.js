"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Container } from "./styles";
import _ from "lodash";
export default function CreditCardFunctions(props) {
    return _.some(props.functions, (data) => !data.hide) && (_jsx(Container, { className: "iz-credit-card-function-container", children: _.map(props.functions, (data, index) => !data.hide &&
            _jsx("div", { className: "iz-credit-card-function", onClick: data.function, children: _jsx("i", { "aria-hidden": true, className: data.icon }) }, index)) }));
}
