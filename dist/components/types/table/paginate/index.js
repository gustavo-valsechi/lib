"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paginate = Paginate;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const lodash_1 = __importDefault(require("lodash"));
function Paginate(props) {
    const pages = () => {
        const offset = Number(props.page.value) - 4;
        let page = offset > 0 ? offset + 1 : 1;
        let pages = [];
        while (Number(props.total) >= page) {
            pages.push(page);
            page++;
        }
        pages = lodash_1.default.slice(pages, 0, 5);
        if ((Number(props.page.value) + 1) > 5)
            pages = lodash_1.default.concat(["1.."], pages);
        if (Number(props.total) > 6 && (Number(props.page.value) + 1) < Number(props.total))
            return lodash_1.default.concat(pages, `..${props.total}`);
        return pages;
    };
    return Number(props.total) > 1 && ((0, jsx_runtime_1.jsxs)(styles_1.Container, { children: [(0, jsx_runtime_1.jsx)("div", { className: "paginate back", onClick: () => props.page.set
                    ? props.page.set(props.page.value
                        ? props.page.value - 1
                        : props.page.value)
                    : null, children: (0, jsx_runtime_1.jsx)("i", { "aria-hidden": true, className: "fa-solid fa-chevron-left" }) }), lodash_1.default.map(pages(), (page, index) => (0, jsx_runtime_1.jsx)("div", { className: "paginate page", "data-current": String(props.page.value === (Number(lodash_1.default.replace(page, /\D/g, "")) - 1)), onClick: () => props.page.set ? props.page.set(Number(lodash_1.default.replace(page, /\D/g, "")) - 1) : null, children: page }, index)), (0, jsx_runtime_1.jsx)("div", { className: "paginate next", onClick: () => props.page.set
                    ? props.page.set(props.page.value !== (props.total - 1)
                        ? props.page.value + 1
                        : props.page.value)
                    : null, children: (0, jsx_runtime_1.jsx)("i", { "aria-hidden": true, className: "fa-solid fa-chevron-right" }) })] }));
}
