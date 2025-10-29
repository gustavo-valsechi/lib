"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Container } from "./styles";
import { LoadingBar } from "../loading/bar";
import { Paginate } from "./paginate";
import { useModal, useTheme } from "contexts";
import _ from "lodash";
import Modal from "./modal";
export * from "./paginate";
export function Table(props) {
    var _a, _b, _c, _d, _e, _f;
    const theme = useTheme();
    const modal = useModal();
    const loading = ((_a = props.loading) === null || _a === void 0 ? void 0 : _a.is) || props.loading;
    useEffect(() => {
        modal.add({ component: Modal, name: "table" });
        return () => modal.remove("table");
    }, []);
    const onShowLine = (key) => {
        if (window.innerWidth > Number(_.replace(theme.content.mobileMaxWidth, "px", "")))
            return;
        let content = {};
        _.forEach(props.options, (data, index) => {
            var _a, _b;
            const column = ((_a = data.column) === null || _a === void 0 ? void 0 : _a.name) || data.column;
            const columnName = !_.isString(column) ? props.options.length - 1 === index ? "actions" : "" : column;
            content[columnName] = columnName === "actions" ? (_b = data.row) === null || _b === void 0 ? void 0 : _b.actions : renderRowContainer(props.content[key], data);
        });
        modal.setProps("table", { toggle: true, content });
    };
    const renderRowContainer = (data, option) => {
        var _a, _b, _c, _d;
        return (_jsx("div", { className: `
          iz-table-content 
          ${((_a = option.row) === null || _a === void 0 ? void 0 : _a.actions) ? "iz-table-action" : ""} 
          ${((_b = option.row) === null || _b === void 0 ? void 0 : _b.icon) ? "iz-table-identifier" : ""}
        `, style: _.isFunction((_c = option.row) === null || _c === void 0 ? void 0 : _c.style)
                ? option.row.style(data, option)
                : (_d = option.row) === null || _d === void 0 ? void 0 : _d.style, children: renderRowContent(data, option) }));
    };
    const renderRowContent = (data, option) => {
        var _a, _b, _c, _d, _e;
        if (!!((_a = option.row) === null || _a === void 0 ? void 0 : _a.actions)) {
            return (_jsx("div", { className: "iz-table-actions", children: _.map((_b = option.row) === null || _b === void 0 ? void 0 : _b.actions, (action, index) => renderButton(action, data, index)) }));
        }
        if ((_c = option.row) === null || _c === void 0 ? void 0 : _c.icon) {
            return (_jsx("div", { className: "iz-table-icon", children: _jsx("i", { "aria-hidden": true, className: _.isFunction((_d = option.row) === null || _d === void 0 ? void 0 : _d.icon)
                        ? option.row.icon(data) || "fa-solid fa-circle-user"
                        : ((_e = option.row) === null || _e === void 0 ? void 0 : _e.icon) || "fa-solid fa-circle-user" }) }));
        }
        return renderRowText(data, option);
    };
    const renderButton = (action, data, index) => {
        return (_jsx("button", { className: `iz-table-button ${_.includes(action.icon, "trash") ? "negative" : ""}`, onClick: () => action.function ? action.function(data) : null, disabled: action.disabled, "data-tooltip": action.tooltip, children: _jsx("i", { "aria-hidden": true, className: action.icon || "fa-solid fa-eye" }) }, index));
    };
    const renderRowText = (data, option) => {
        const row = option.row || {};
        const content = data[row.name] || data;
        let body;
        while (!body) {
            if (_.isString(row))
                body = data[row];
            if (_.isString(content))
                body = content;
            if (_.isFunction(row.mask))
                body = row.mask(content);
            if (_.isFunction(row.custom))
                body = row.custom(content);
            body = body !== null && body !== void 0 ? body : "---";
        }
        return (_jsx("div", { className: "iz-table-content-elipse", title: _.isString(body) ? body : "", children: body }));
    };
    return (_jsxs(Container, { notFound: !((_b = props.content) === null || _b === void 0 ? void 0 : _b.length) && !props.loading, children: [_jsx("div", { className: "iz-table-container", children: _jsxs("table", { children: [_jsx("thead", { children: _jsx("tr", { children: _.map(props.options, (option, index) => {
                                    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                                    return _jsx("th", { style: (_a = option.column) === null || _a === void 0 ? void 0 : _a.style, children: _jsx("div", { className: `iz-table-content ${((_b = option.column) === null || _b === void 0 ? void 0 : _b.action)
                                                ? `iz-table-action ${((_d = (_c = option.column) === null || _c === void 0 ? void 0 : _c.action) === null || _d === void 0 ? void 0 : _d.position)
                                                    ? (_f = (_e = option.column) === null || _e === void 0 ? void 0 : _e.action) === null || _f === void 0 ? void 0 : _f.position
                                                    : ""}`
                                                : ""}`, children: !!((_g = option.column) === null || _g === void 0 ? void 0 : _g.action)
                                                ? renderButton(option.column.action)
                                                : _.isString(((_h = option.column) === null || _h === void 0 ? void 0 : _h.name) || option.column) ? ((_j = option.column) === null || _j === void 0 ? void 0 : _j.name) || option.column : "" }) }, index);
                                }) }) }), _jsx("tbody", { children: loading
                                ? _.map(((_c = props.loading) === null || _c === void 0 ? void 0 : _c.items) || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (data, key) => _jsx("tr", { children: _.map(props.options, (data, index) => {
                                        var _a;
                                        return (_jsx("td", { children: _jsx(LoadingBar, { height: "2.5rem", borderRadius: index === 0
                                                    ? "5px 0 0 5px"
                                                    : ((_a = props.options) === null || _a === void 0 ? void 0 : _a.length) - 1 === index
                                                        ? "0 5px 5px 0"
                                                        : "0", margin: key === 0 ? "1.5rem 0 0" : ".5rem 0 0" }) }, index));
                                    }) }, key))
                                : _.map(props.content, (data, key) => _jsx("tr", { children: _.map(props.options, (option, index) => (_jsx("td", { onClick: () => index < 2 ? onShowLine(key) : null, children: renderRowContainer(data, option) }, index))) }, key)) })] }) }), !((_d = props.content) === null || _d === void 0 ? void 0 : _d.length) && !props.loading && (_jsxs("div", { className: "iz-table-not-found", children: [_jsx("p", { children: ((_e = props.notFound) === null || _e === void 0 ? void 0 : _e.title) || "Nenhuma campanha encontrado" }), _jsx("p", { children: ((_f = props.notFound) === null || _f === void 0 ? void 0 : _f.message) || "Envie uma campanha de marketing para aparecer algum registro" })] })), !!props.paginate && _jsx(Paginate, { ...props.paginate })] }));
}
