"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Switcher } from "./styles";
import { Themes } from "./content";
import { setStorage } from "tools";
const ThemeContext = createContext({});
const ThemeProviderContainer = (props) => {
    const [theme, setTheme] = useState("light");
    const [defaultTheme] = useState("light");
    useEffect(() => {
        if (!theme)
            return;
        (async () => await setStorage(process.env.NEXT_PUBLIC_STORAGE_THEME, theme))();
    }, [theme]);
    const SwitcherComponent = () => {
        return (_jsxs(Switcher, { onClick: () => setTheme(theme === "light" ? "dark" : "light"), "data-theme": theme || defaultTheme, children: [_jsx("i", { "aria-hidden": true, className: "fa-solid fa-moon" }), _jsx("div", { className: "switcher", children: _jsx("div", {}) }), _jsx("i", { "aria-hidden": true, className: "fa-solid fa-sun" })] }));
    };
    return (_jsx(ThemeContext.Provider, { value: {
            theme: props.theme || defaultTheme,
            setTheme,
            content: Themes[props.theme || defaultTheme],
            Switcher: SwitcherComponent
        }, children: _jsx(ThemeProvider, { theme: Themes[props.theme || defaultTheme], children: props.children }) }));
};
const useTheme = () => useContext(ThemeContext);
export { ThemeProviderContainer as ThemeProvider, useTheme };
