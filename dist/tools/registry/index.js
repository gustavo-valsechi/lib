"use client";
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
export function StyledComponentsRegistry({ children }) {
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return _jsx(_Fragment, { children: styles });
    });
    const menager = (sheet) => {
        return _jsx(StyleSheetManager, { sheet: sheet, enableVendorPrefixes: true, shouldForwardProp: (propName, elementToBeRendered) => {
                return typeof elementToBeRendered === "string"
                    ? isPropValid(propName) && !["height", "width"].includes(propName)
                    : true;
            }, children: children });
    };
    if (typeof window !== "undefined")
        return menager();
    return menager(styledComponentsStyleSheet.instance);
}
