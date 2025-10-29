"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment } from "react";
import { Container, RowContainer } from "./styles";
import _ from "lodash";
import * as Types from "./types";
export * from "./types";
export function Component(props) {
    const renderComponent = (config) => {
        const ComponentElement = Types[config.type];
        return _jsx(ComponentElement, { ...config.props });
    };
    const renderRow = (components) => {
        return (_jsx(RowContainer, { children: _.map(components, (data, index) => _jsx(Fragment, { children: renderComponent(data) }, index)) }));
    };
    return (_jsx(Container, { className: props.className, children: _.map(props.content, (data, index) => _jsx(Fragment, { children: _.isArray(data) ? renderRow(data) : renderComponent(data) }, index)) }));
}
