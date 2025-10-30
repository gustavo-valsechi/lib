"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIcon = exports.IconProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const theme_1 = require("../theme");
const lodash_1 = __importDefault(require("lodash"));
const assets_1 = __importDefault(require("./assets"));
const IconContext = (0, react_1.createContext)({});
const IconProviderContainer = ({ children }) => {
    const { content } = (0, theme_1.useTheme)();
    const [isClient, setIsClient] = (0, react_1.useState)(false);
    const [matches, setMatches] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        setIsClient(true);
    }, []);
    (0, react_1.useEffect)(() => {
        const firstMediaQuery = window.matchMedia(`(max-width: ${content.mobileMaxWidth})`);
        const secoundMediaQuery = window.matchMedia(`(max-width: ${content.mobileMinWidth})`);
        const firstHandler = (event) => setMatches(event.matches ? 1 : 0);
        const secoundHandler = (event) => setMatches(event.matches ? 2 : 1);
        if (firstMediaQuery.matches)
            setMatches(1);
        if (secoundMediaQuery.matches)
            setMatches(2);
        firstMediaQuery.addEventListener("change", firstHandler);
        secoundMediaQuery.addEventListener("change", secoundHandler);
        return () => {
            firstMediaQuery.removeEventListener("change", firstHandler);
            secoundMediaQuery.removeEventListener("change", secoundHandler);
        };
    }, []);
    (0, react_1.useEffect)(() => {
        if (!isClient)
            return;
        const processElement = (element) => {
            var _a, _b, _c, _d, _e;
            const name = element.getAttribute("class");
            if (!name)
                return;
            const icon = lodash_1.default.split(lodash_1.default.replace(name, /fa-/g, ""), " ");
            if (!icon.length)
                return;
            let svg = (_d = (_b = (_a = assets_1.default[icon[0]]) === null || _a === void 0 ? void 0 : _a[icon[1]]) !== null && _b !== void 0 ? _b : (_c = assets_1.default["solid"]) === null || _c === void 0 ? void 0 : _c[icon[0]]) !== null && _d !== void 0 ? _d : "";
            if (!svg)
                return;
            svg = svg.replace(/fill=".*?"/g, 'fill="currentColor"');
            const styles = window.getComputedStyle(element);
            const size = Number((_e = lodash_1.default.split(styles.fontSize, "px")) === null || _e === void 0 ? void 0 : _e[0]) + 2;
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.textContent = "";
            element.innerHTML = svg;
        };
        document.querySelectorAll("i").forEach((el) => processElement(el));
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        const el = node;
                        if (el.tagName.toLowerCase() === "i")
                            processElement(el);
                        el.querySelectorAll("i").forEach((child) => processElement(child));
                    }
                });
            });
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
        return () => observer.disconnect();
    }, [isClient, matches]);
    return ((0, jsx_runtime_1.jsx)(IconContext.Provider, { value: {}, children: children }));
};
exports.IconProvider = IconProviderContainer;
const useIcon = () => (0, react_1.useContext)(IconContext);
exports.useIcon = useIcon;
