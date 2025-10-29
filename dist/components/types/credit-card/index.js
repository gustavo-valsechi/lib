"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from "./styles";
import Card from "./card";
import Functions from "./functions";
export function CreditCard(props) {
    const functions = [
        {
            icon: "fa-regular fa-pen-to-square",
            label: "Editar",
            function: props.onEdit,
            hide: !props.onEdit
        },
        {
            icon: "fa-solid fa-gear",
            label: "Configurações",
            function: props.onConfig,
            hide: !props.onConfig
        },
        {
            icon: "fa-solid fa-trash-can",
            label: "Remover",
            function: props.onRemove,
            hide: !props.onRemove
        },
        ...(props.functions || [])
    ];
    return (_jsxs(Container, { children: [_jsx(Card, { ...props }), _jsx(Functions, { ...props, functions: functions })] }));
}
