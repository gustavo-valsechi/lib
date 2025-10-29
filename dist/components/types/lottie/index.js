"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Container } from "./styles";
import LottieReact from "react-lottie";
const LottieComponent = LottieReact;
import animations from "./animations";
export function Lottie(props) {
    const getAnimation = () => {
        let animation;
        for (const propName of Object.keys(props)) {
            if (animation)
                continue;
            animation = animations[propName];
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
    return (_jsx(Container, { ...props, children: _jsx(LottieComponent, { width: props.size || 180, height: props.size || 180, options: defaultOptions }) }));
}
