"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lottie = Lottie;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const react_lottie_1 = __importDefault(require("react-lottie"));
const LottieComponent = react_lottie_1.default;
const animations_1 = __importDefault(require("./animations"));
function Lottie(props) {
    const getAnimation = () => {
        let animation;
        for (const propName of Object.keys(props)) {
            if (animation)
                continue;
            animation = animations_1.default[propName];
        }
        return animation;
    };
    const defaultOptions = {
        loop: true,
        autoplay: true,
        renderer: 'svg',
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },
        path: props.src,
        animationData: getAnimation(),
    };
    return ((0, jsx_runtime_1.jsx)(styles_1.Container, { ...props, children: (0, jsx_runtime_1.jsx)(LottieComponent, { width: props.size || 180, height: props.size || 180, options: defaultOptions }) }));
}
