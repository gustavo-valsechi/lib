"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCard = CreditCard;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const card_1 = __importDefault(require("./card"));
const functions_1 = __importDefault(require("./functions"));
function CreditCard(props) {
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
    return ((0, jsx_runtime_1.jsxs)(styles_1.Container, { children: [(0, jsx_runtime_1.jsx)(card_1.default, { ...props }), (0, jsx_runtime_1.jsx)(functions_1.default, { ...props, functions: functions })] }));
}
