"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { Container } from "./styles";
import { getStorage, setStorage } from "tools";
import randomColor from "randomcolor";
import _ from "lodash";
export function Avatar(props) {
    const containerRef = useRef({});
    const [color, setColor] = useState("");
    useEffect(() => {
        if (color)
            return;
        (async () => {
            const storageKey = process.env.NEXT_PUBLIC_STORAGE_AVATAR;
            const storageColor = await getStorage(storageKey);
            if (storageColor)
                return setColor(storageColor);
            const random = randomColor({ luminosity: "light" });
            await setStorage(storageKey, random);
            setColor(random);
        })();
    }, [color]);
    const name = () => {
        const [first, secound] = _.split(props.name, ' ') || [];
        if (first && secound)
            return `${first} ${secound}`;
        if (first)
            return first;
        return "IZ";
    };
    return (_jsx(Container, { ref: containerRef, color: color, width: containerRef.current.offsetWidth, ...props, children: _jsx("span", { children: _.upperCase(name()) }) }));
}
