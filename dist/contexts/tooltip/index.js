"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from "react";
import { Tooltip } from "./styles";
import _ from "lodash";
const TooltipContext = createContext({});
const TooltipProviderContainer = ({ children }) => {
    const [tooltips, setTooltips] = useState([]);
    const getContent = (target) => {
        var _a;
        const rect = target.getBoundingClientRect();
        return {
            top: rect.top + window.scrollY - (target.offsetHeight + 8),
            left: rect.left + window.scrollX + (target.offsetWidth / 2),
            content: ((_a = target.dataset) === null || _a === void 0 ? void 0 : _a.tooltip) || ""
        };
    };
    useEffect(() => {
        const processElement = (element) => {
            element.addEventListener("mouseenter", (event) => {
                const target = event === null || event === void 0 ? void 0 : event.target;
                if (!target)
                    return;
                setTooltips(_.concat(tooltips, [getContent(target)]));
            });
            element.addEventListener("mouseleave", (event) => {
                const target = event === null || event === void 0 ? void 0 : event.target;
                if (!target)
                    return;
                setTooltips(_.filter(tooltips, (data) => JSON.stringify(data) === JSON.stringify(getContent(target))));
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
    return (_jsxs(TooltipContext.Provider, { value: {}, children: [_.map(tooltips, (data, index) => _jsx(Tooltip, { style: {
                    top: data.top,
                    left: data.left,
                }, children: data.content }, index)), children] }));
};
const useTooltip = () => useContext(TooltipContext);
export { TooltipProviderContainer as TooltipProvider, useTooltip };
