"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from "./styles";
import _ from "lodash";
export function Paginate(props) {
    const pages = () => {
        const offset = Number(props.page.value) - 4;
        let page = offset > 0 ? offset + 1 : 1;
        let pages = [];
        while (Number(props.total) >= page) {
            pages.push(page);
            page++;
        }
        pages = _.slice(pages, 0, 5);
        if ((Number(props.page.value) + 1) > 5)
            pages = _.concat(["1.."], pages);
        if (Number(props.total) > 6 && (Number(props.page.value) + 1) < Number(props.total))
            return _.concat(pages, `..${props.total}`);
        return pages;
    };
    return Number(props.total) > 1 && (_jsxs(Container, { children: [_jsx("div", { className: "paginate back", onClick: () => props.page.set
                    ? props.page.set(props.page.value
                        ? props.page.value - 1
                        : props.page.value)
                    : null, children: _jsx("i", { "aria-hidden": true, className: "fa-solid fa-chevron-left" }) }), _.map(pages(), (page, index) => _jsx("div", { className: "paginate page", "data-current": String(props.page.value === (Number(_.replace(page, /\D/g, "")) - 1)), onClick: () => props.page.set ? props.page.set(Number(_.replace(page, /\D/g, "")) - 1) : null, children: page }, index)), _jsx("div", { className: "paginate next", onClick: () => props.page.set
                    ? props.page.set(props.page.value !== (props.total - 1)
                        ? props.page.value + 1
                        : props.page.value)
                    : null, children: _jsx("i", { "aria-hidden": true, className: "fa-solid fa-chevron-right" }) })] }));
}
