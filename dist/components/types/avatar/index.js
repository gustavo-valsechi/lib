"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = Avatar;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_1 = require("./styles");
const tools_1 = require("@gustavo-valsechi/server/tools");
const randomcolor_1 = __importDefault(require("randomcolor"));
const lodash_1 = __importDefault(require("lodash"));
function Avatar(props) {
    const containerRef = (0, react_1.useRef)({});
    const [color, setColor] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        if (color)
            return;
        (async () => {
            const storageKey = process.env.NEXT_PUBLIC_STORAGE_AVATAR;
            const storageColor = await (0, tools_1.getStorage)(storageKey);
            if (storageColor)
                return setColor(storageColor);
            const random = (0, randomcolor_1.default)({ luminosity: "light" });
            await (0, tools_1.setStorage)(storageKey, random);
            setColor(random);
        })();
    }, [color]);
    const name = () => {
        const [first, secound] = lodash_1.default.split(props.name, ' ') || [];
        if (first && secound)
            return `${first} ${secound}`;
        if (first)
            return first;
        return "IZ";
    };
    return ((0, jsx_runtime_1.jsx)(styles_1.Container, { ref: containerRef, color: color, width: containerRef.current.offsetWidth, ...props, children: (0, jsx_runtime_1.jsx)("span", { children: lodash_1.default.upperCase(name()) }) }));
}
