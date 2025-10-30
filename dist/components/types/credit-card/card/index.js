"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreditCardComponent;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_1 = require("./styles");
const tools_1 = require("../tools");
const tools_2 = require("@gustavo-valsechi/server/tools");
const assets_1 = __importDefault(require("../assets"));
const lodash_1 = __importDefault(require("lodash"));
function CreditCardComponent(props) {
    var _a;
    const flagRef = (0, react_1.useRef)({});
    (0, react_1.useEffect)(() => {
        const content = (0, tools_1.getCardContent)(props.number);
        if (!flagRef.current)
            return;
        if (!content.logo) {
            flagRef.current.style.backgroundImage = "";
            return;
        }
        flagRef.current.style.backgroundImage = `url(${content.logo})`;
    }, [flagRef, props.number]);
    return ((0, jsx_runtime_1.jsxs)(styles_1.Container, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "iz-credit-card-left", children: [(0, jsx_runtime_1.jsx)("div", { className: "iz-credit-card-top", children: (0, jsx_runtime_1.jsx)("div", { id: "iz-credit-card-chip", style: { backgroundImage: `url(${assets_1.default.Chip})` } }) }), (0, jsx_runtime_1.jsxs)("div", { className: "iz-credit-card-bottom", children: [(0, jsx_runtime_1.jsx)("div", { className: "iz-credit-card-number", children: (0, jsx_runtime_1.jsx)("div", { className: "iz-credit-card-elipse", children: tools_2.Utils.mask.loop(props.number, { sequencyNumber: 4, maxSequency: 4, placeholder: "•" }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "iz-credit-card-name", children: (0, jsx_runtime_1.jsx)("div", { className: "iz-credit-card-elipse", children: lodash_1.default.deburr((_a = props.name) === null || _a === void 0 ? void 0 : _a.replace(/[^A-Za-zÀ-ÿ\s]/g, "").toUpperCase()) || "Nome do Titular" }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "iz-credit-card-right", children: [(0, jsx_runtime_1.jsx)("div", { className: "iz-credit-card-top", children: (0, jsx_runtime_1.jsx)("div", { id: "iz-credit-card-flag", ref: flagRef }) }), (0, jsx_runtime_1.jsxs)("div", { className: "iz-credit-card-bottom", children: [(0, jsx_runtime_1.jsx)("span", { children: "validade" }), (0, jsx_runtime_1.jsx)("span", { children: tools_2.Utils.mask.loop(props.expiry, { sequencyNumber: 2, maxSequency: 2, placeholder: "•", separator: "/" }) })] })] })] }));
}
