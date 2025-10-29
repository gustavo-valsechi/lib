import React from "react";
import * as Types from "components/types";
export * from "./table";
export * from "./loading";
export * from "./modal";
export * from "./badge";
export * from "./logo";
export * from "./form";
export * from "./chart";
export * from "./avatar";
export * from "./lottie";
export * from "./credit-card";
export * from "./block";
export type IComponentMap = typeof Types;
export type IComponentConfigMap = {
    [K in keyof IComponentMap]: {
        type: K;
        props?: React.ComponentProps<IComponentMap[K]>;
    };
};
export type IComponentConfig = IComponentConfigMap[keyof IComponentMap];
export type IComponentContent = Array<IComponentConfig | Array<IComponentConfig>>;
export interface IComponent {
    className?: string;
    content: IComponentContent;
}
