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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = Table;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_1 = require("./styles");
const bar_1 = require("../loading/bar");
const paginate_1 = require("./paginate");
const _contexts_1 = require("@contexts");
const lodash_1 = __importDefault(require("lodash"));
const modal_1 = __importDefault(require("./modal"));
__exportStar(require("./paginate"), exports);
function Table(props) {
    var _a, _b, _c, _d, _e, _f;
    const theme = (0, _contexts_1.useTheme)();
    const modal = (0, _contexts_1.useModal)();
    const loading = ((_a = props.loading) === null || _a === void 0 ? void 0 : _a.is) || props.loading;
    (0, react_1.useEffect)(() => {
        modal.add({ component: modal_1.default, name: "table" });
        return () => modal.remove("table");
    }, []);
    const onShowLine = (key) => {
        if (window.innerWidth > Number(lodash_1.default.replace(theme.content.mobileMaxWidth, "px", "")))
            return;
        let content = {};
        lodash_1.default.forEach(props.options, (data, index) => {
            var _a, _b;
            const column = ((_a = data.column) === null || _a === void 0 ? void 0 : _a.name) || data.column;
            const columnName = !lodash_1.default.isString(column) ? props.options.length - 1 === index ? "actions" : "" : column;
            content[columnName] = columnName === "actions" ? (_b = data.row) === null || _b === void 0 ? void 0 : _b.actions : renderRowContainer(props.content[key], data);
        });
        modal.setProps("table", { toggle: true, content });
    };
    const renderRowContainer = (data, option) => {
        var _a, _b, _c, _d;
        return ((0, jsx_runtime_1.jsx)("div", { className: `
          iz-table-content 
          ${((_a = option.row) === null || _a === void 0 ? void 0 : _a.actions) ? "iz-table-action" : ""} 
          ${((_b = option.row) === null || _b === void 0 ? void 0 : _b.icon) ? "iz-table-identifier" : ""}
        `, style: lodash_1.default.isFunction((_c = option.row) === null || _c === void 0 ? void 0 : _c.style)
                ? option.row.style(data, option)
                : (_d = option.row) === null || _d === void 0 ? void 0 : _d.style, children: renderRowContent(data, option) }));
    };
    const renderRowContent = (data, option) => {
        var _a, _b, _c, _d, _e;
        if (!!((_a = option.row) === null || _a === void 0 ? void 0 : _a.actions)) {
            return ((0, jsx_runtime_1.jsx)("div", { className: "iz-table-actions", children: lodash_1.default.map((_b = option.row) === null || _b === void 0 ? void 0 : _b.actions, (action, index) => renderButton(action, data, index)) }));
        }
        if ((_c = option.row) === null || _c === void 0 ? void 0 : _c.icon) {
            return ((0, jsx_runtime_1.jsx)("div", { className: "iz-table-icon", children: (0, jsx_runtime_1.jsx)("i", { "aria-hidden": true, className: lodash_1.default.isFunction((_d = option.row) === null || _d === void 0 ? void 0 : _d.icon)
                        ? option.row.icon(data) || "fa-solid fa-circle-user"
                        : ((_e = option.row) === null || _e === void 0 ? void 0 : _e.icon) || "fa-solid fa-circle-user" }) }));
        }
        return renderRowText(data, option);
    };
    const renderButton = (action, data, index) => {
        return ((0, jsx_runtime_1.jsx)("button", { className: `iz-table-button ${lodash_1.default.includes(action.icon, "trash") ? "negative" : ""}`, onClick: () => action.function ? action.function(data) : null, disabled: action.disabled, "data-tooltip": action.tooltip, children: (0, jsx_runtime_1.jsx)("i", { "aria-hidden": true, className: action.icon || "fa-solid fa-eye" }) }, index));
    };
    const renderRowText = (data, option) => {
        const row = option.row || {};
        const content = data[row.name] || data;
        let body;
        while (!body) {
            if (lodash_1.default.isString(row))
                body = data[row];
            if (lodash_1.default.isString(content))
                body = content;
            if (lodash_1.default.isFunction(row.mask))
                body = row.mask(content);
            if (lodash_1.default.isFunction(row.custom))
                body = row.custom(content);
            body = body !== null && body !== void 0 ? body : "---";
        }
        return ((0, jsx_runtime_1.jsx)("div", { className: "iz-table-content-elipse", title: lodash_1.default.isString(body) ? body : "", children: body }));
    };
    return ((0, jsx_runtime_1.jsxs)(styles_1.Container, { notFound: !((_b = props.content) === null || _b === void 0 ? void 0 : _b.length) && !props.loading, children: [(0, jsx_runtime_1.jsx)("div", { className: "iz-table-container", children: (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsx)("tr", { children: lodash_1.default.map(props.options, (option, index) => {
                                    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                                    return (0, jsx_runtime_1.jsx)("th", { style: (_a = option.column) === null || _a === void 0 ? void 0 : _a.style, children: (0, jsx_runtime_1.jsx)("div", { className: `iz-table-content ${((_b = option.column) === null || _b === void 0 ? void 0 : _b.action)
                                                ? `iz-table-action ${((_d = (_c = option.column) === null || _c === void 0 ? void 0 : _c.action) === null || _d === void 0 ? void 0 : _d.position)
                                                    ? (_f = (_e = option.column) === null || _e === void 0 ? void 0 : _e.action) === null || _f === void 0 ? void 0 : _f.position
                                                    : ""}`
                                                : ""}`, children: !!((_g = option.column) === null || _g === void 0 ? void 0 : _g.action)
                                                ? renderButton(option.column.action)
                                                : lodash_1.default.isString(((_h = option.column) === null || _h === void 0 ? void 0 : _h.name) || option.column) ? ((_j = option.column) === null || _j === void 0 ? void 0 : _j.name) || option.column : "" }) }, index);
                                }) }) }), (0, jsx_runtime_1.jsx)("tbody", { children: loading
                                ? lodash_1.default.map(((_c = props.loading) === null || _c === void 0 ? void 0 : _c.items) || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (data, key) => (0, jsx_runtime_1.jsx)("tr", { children: lodash_1.default.map(props.options, (data, index) => {
                                        var _a;
                                        return ((0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)(bar_1.LoadingBar, { height: "2.5rem", borderRadius: index === 0
                                                    ? "5px 0 0 5px"
                                                    : ((_a = props.options) === null || _a === void 0 ? void 0 : _a.length) - 1 === index
                                                        ? "0 5px 5px 0"
                                                        : "0", margin: key === 0 ? "1.5rem 0 0" : ".5rem 0 0" }) }, index));
                                    }) }, key))
                                : lodash_1.default.map(props.content, (data, key) => (0, jsx_runtime_1.jsx)("tr", { children: lodash_1.default.map(props.options, (option, index) => ((0, jsx_runtime_1.jsx)("td", { onClick: () => index < 2 ? onShowLine(key) : null, children: renderRowContainer(data, option) }, index))) }, key)) })] }) }), !((_d = props.content) === null || _d === void 0 ? void 0 : _d.length) && !props.loading && ((0, jsx_runtime_1.jsxs)("div", { className: "iz-table-not-found", children: [(0, jsx_runtime_1.jsx)("p", { children: ((_e = props.notFound) === null || _e === void 0 ? void 0 : _e.title) || "Nenhuma campanha encontrado" }), (0, jsx_runtime_1.jsx)("p", { children: ((_f = props.notFound) === null || _f === void 0 ? void 0 : _f.message) || "Envie uma campanha de marketing para aparecer algum registro" })] })), !!props.paginate && (0, jsx_runtime_1.jsx)(paginate_1.Paginate, { ...props.paginate })] }));
}
