import React from "react";
import { IComponentContent } from "interfaces";
interface IBase {
    icon?: string;
    label?: string;
}
export type IBlock = (IBase & {
    component: IComponentContent;
    content?: never;
    children?: never;
}) | (IBase & {
    children: React.ReactNode;
    component?: never;
    content?: never;
});
export {};
