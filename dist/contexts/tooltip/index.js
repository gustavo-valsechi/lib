"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTooltip = exports.TooltipProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_1 = require("./styles");
const lodash_1 = __importDefault(require("lodash"));
const TooltipContext = (0, react_1.createContext)({});
const TooltipProviderContainer = ({ children }) => {
    const [tooltips, setTooltips] = (0, react_1.useState)([]);
    const getContent = (target) => {
        var _a;
        const rect = target.getBoundingClientRect();
        return {
            top: rect.top + window.scrollY - (target.offsetHeight + 8),
            left: rect.left + window.scrollX + (target.offsetWidth / 2),
            content: ((_a = target.dataset) === null || _a === void 0 ? void 0 : _a.tooltip) || ""
        };
    };
    (0, react_1.useEffect)(() => {
        const processElement = (element) => {
            element.addEventListener("mouseenter", (event) => {
                const target = event === null || event === void 0 ? void 0 : event.target;
                if (!target)
                    return;
                setTooltips(lodash_1.default.concat(tooltips, [getContent(target)]));
            });
            element.addEventListener("mouseleave", (event) => {
                const target = event === null || event === void 0 ? void 0 : event.target;
                if (!target)
                    return;
                setTooltips(lodash_1.default.filter(tooltips, (data) => JSON.stringify(data) === JSON.stringify(getContent(target))));
            });
        };
        document.querySelectorAll("[data-tooltip]").forEach((el) => processElement(el));
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        const el = node;
                        if (el.getAttribute("data-tooltip"))
                            processElement(el);
                        el.querySelectorAll("[data-tooltip]").forEach((child) => processElement(child));
                    }
                });
            });
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
        return () => observer.disconnect();
    }, []);
    return ((0, jsx_runtime_1.jsxs)(TooltipContext.Provider, { value: {}, children: [lodash_1.default.map(tooltips, (data, index) => (0, jsx_runtime_1.jsx)(styles_1.Tooltip, { style: {
                    top: data.top,
                    left: data.left,
                }, children: data.content }, index)), children] }));
};
exports.TooltipProvider = TooltipProviderContainer;
const useTooltip = () => (0, react_1.useContext)(TooltipContext);
exports.useTooltip = useTooltip;
