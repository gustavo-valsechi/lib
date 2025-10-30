"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = exports.ThemeProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const styles_1 = require("./styles");
const content_1 = require("./content");
const tools_1 = require("@gustavo-valsechi/server/tools");
const ThemeContext = (0, react_1.createContext)({});
const ThemeProviderContainer = (props) => {
    const [theme, setTheme] = (0, react_1.useState)("light");
    const [defaultTheme] = (0, react_1.useState)("light");
    (0, react_1.useEffect)(() => {
        if (!theme)
            return;
        (async () => await (0, tools_1.setStorage)(process.env.NEXT_PUBLIC_STORAGE_THEME, theme))();
    }, [theme]);
    const SwitcherComponent = () => {
        return ((0, jsx_runtime_1.jsxs)(styles_1.Switcher, { onClick: () => setTheme(theme === "light" ? "dark" : "light"), "data-theme": theme || defaultTheme, children: [(0, jsx_runtime_1.jsx)("i", { "aria-hidden": true, className: "fa-solid fa-moon" }), (0, jsx_runtime_1.jsx)("div", { className: "switcher", children: (0, jsx_runtime_1.jsx)("div", {}) }), (0, jsx_runtime_1.jsx)("i", { "aria-hidden": true, className: "fa-solid fa-sun" })] }));
    };
    return ((0, jsx_runtime_1.jsx)(ThemeContext.Provider, { value: {
            theme: props.theme || defaultTheme,
            setTheme,
            content: content_1.Themes[props.theme || defaultTheme],
            Switcher: SwitcherComponent
        }, children: (0, jsx_runtime_1.jsx)(styled_components_1.ThemeProvider, { theme: content_1.Themes[props.theme || defaultTheme], children: props.children }) }));
};
exports.ThemeProvider = ThemeProviderContainer;
const useTheme = () => (0, react_1.useContext)(ThemeContext);
exports.useTheme = useTheme;
