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
exports.Form = Form;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const styles_1 = require("./styles");
const zod_1 = require("zod");
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("@hookform/resolvers/zod");
const lodash_1 = __importDefault(require("lodash"));
const Types = __importStar(require("./types"));
__exportStar(require("./types"), exports);
function Form(props) {
    const formRef = props.formRef || (0, react_1.useRef)({});
    const setSchema = () => {
        const schema = {};
        lodash_1.default.forEach(props.inputs, (data) => {
            if (!data.validation)
                return;
            schema[data.name] = data.validation;
        });
        if (props.validation)
            return props.validation(zod_1.z.object(schema));
        return zod_1.z.object(schema);
    };
    const schema = setSchema();
    const { register, handleSubmit, reset, formState: { errors } } = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_2.zodResolver)(schema),
        defaultValues: props.defaultValues,
        mode: "all"
    });
    (0, react_1.useEffect)(() => {
        if (!props.clearWhen)
            return;
        reset(undefined, { keepErrors: false });
    }, [props.clearWhen]);
    (0, react_1.useEffect)(() => {
        var _a;
        if (!props.defaultValues || !((_a = Object.keys(props.defaultValues || {})) === null || _a === void 0 ? void 0 : _a.length))
            return;
        lodash_1.default.forEach(props.defaultValues, (value, key) => {
            const input = lodash_1.default.find(props.inputs, (data) => data.name === key);
            props.defaultValues[key] = input.mask ? input.mask(value) : value;
        });
        reset(props.defaultValues, { keepErrors: false });
    }, [props.defaultValues]);
    const component = (data) => {
        var _a;
        const component = Types[lodash_1.default.camelCase(data.type)];
        const TypeComponent = component || Types.InputText;
        return (0, jsx_runtime_1.jsx)(TypeComponent, { ...lodash_1.default.omit(data, ["validation"]), id: data.name, type: component ? undefined : data.type, error: (_a = errors[data.name]) === null || _a === void 0 ? void 0 : _a.message, register: register });
    };
    return ((0, jsx_runtime_1.jsxs)(styles_1.Container, { ref: formRef, onSubmit: handleSubmit(props.onSubmit), children: [lodash_1.default.map(props.inputs, (data, index) => (0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: component(data) }, index)), lodash_1.default.isArray(props.buttons) &&
                (0, jsx_runtime_1.jsx)("div", { className: "form-buttons", children: lodash_1.default.map(props.buttons, (data, index) => (0, jsx_runtime_1.jsx)(Types.Button, { ...data }, index)) })] }));
}
