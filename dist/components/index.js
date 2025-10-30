"use client";
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = Component;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_1 = require("./styles");
const lodash_1 = __importDefault(require("lodash"));
const Types = __importStar(require("./types"));
__exportStar(require("./types"), exports);
function Component(props) {
    const renderComponent = (config) => {
        const ComponentElement = Types[config.type];
        return (0, jsx_runtime_1.jsx)(ComponentElement, { ...config.props });
    };
    const renderRow = (components) => {
        return ((0, jsx_runtime_1.jsx)(styles_1.RowContainer, { children: lodash_1.default.map(components, (data, index) => (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: renderComponent(data) }, index)) }));
    };
    return ((0, jsx_runtime_1.jsx)(styles_1.Container, { className: props.className, children: lodash_1.default.map(props.content, (data, index) => (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: lodash_1.default.isArray(data) ? renderRow(data) : renderComponent(data) }, index)) }));
}
