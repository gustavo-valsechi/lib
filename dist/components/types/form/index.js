"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef } from "react";
import { Container } from "./styles";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import _ from "lodash";
import * as Types from "./types";
export * from "./types";
export function Form(props) {
    const formRef = props.formRef || useRef({});
    const setSchema = () => {
        const schema = {};
        _.forEach(props.inputs, (data) => {
            if (!data.validation)
                return;
            schema[data.name] = data.validation;
        });
        if (props.validation)
            return props.validation(z.object(schema));
        return z.object(schema);
    };
    const schema = setSchema();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        defaultValues: props.defaultValues,
        mode: "all"
    });
    useEffect(() => {
        if (!props.clearWhen)
            return;
        reset(undefined, { keepErrors: false });
    }, [props.clearWhen]);
    useEffect(() => {
        var _a;
        if (!props.defaultValues || !((_a = Object.keys(props.defaultValues || {})) === null || _a === void 0 ? void 0 : _a.length))
            return;
        _.forEach(props.defaultValues, (value, key) => {
            const input = _.find(props.inputs, (data) => data.name === key);
            props.defaultValues[key] = input.mask ? input.mask(value) : value;
        });
        reset(props.defaultValues, { keepErrors: false });
    }, [props.defaultValues]);
    const component = (data) => {
        var _a;
        const component = Types[_.camelCase(data.type)];
        const TypeComponent = component || Types.InputText;
        return _jsx(TypeComponent, { ..._.omit(data, ["validation"]), id: data.name, type: component ? undefined : data.type, error: (_a = errors[data.name]) === null || _a === void 0 ? void 0 : _a.message, register: register });
    };
    return (_jsxs(Container, { ref: formRef, onSubmit: handleSubmit(props.onSubmit), children: [_.map(props.inputs, (data, index) => _jsx(React.Fragment, { children: component(data) }, index)), _.isArray(props.buttons) &&
                _jsx("div", { className: "form-buttons", children: _.map(props.buttons, (data, index) => _jsx(Types.Button, { ...data }, index)) })] }));
}
