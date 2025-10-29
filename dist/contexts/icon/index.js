"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from "react";
import { useTheme } from "../theme";
import _ from "lodash";
import assets from "./assets";
const IconContext = createContext({});
const IconProviderContainer = ({ children }) => {
    const { content } = useTheme();
    const [isClient, setIsClient] = useState(false);
    const [matches, setMatches] = useState(0);
    useEffect(() => {
        setIsClient(true);
    }, []);
    useEffect(() => {
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
    useEffect(() => {
        if (!isClient)
            return;
        const processElement = (element) => {
            var _a, _b, _c, _d, _e;
            const name = element.getAttribute("class");
            if (!name)
                return;
            const icon = _.split(_.replace(name, /fa-/g, ""), " ");
            if (!icon.length)
                return;
            let svg = (_d = (_b = (_a = assets[icon[0]]) === null || _a === void 0 ? void 0 : _a[icon[1]]) !== null && _b !== void 0 ? _b : (_c = assets["solid"]) === null || _c === void 0 ? void 0 : _c[icon[0]]) !== null && _d !== void 0 ? _d : "";
            if (!svg)
                return;
            svg = svg.replace(/fill=".*?"/g, 'fill="currentColor"');
            const styles = window.getComputedStyle(element);
            const size = Number((_e = _.split(styles.fontSize, "px")) === null || _e === void 0 ? void 0 : _e[0]) + 2;
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
    return (_jsx(IconContext.Provider, { value: {}, children: children }));
};
const useIcon = () => useContext(IconContext);
export { IconProviderContainer as IconProvider, useIcon };
