import { M as Modal, I as IModal } from './index-Da-DtPS-.js';
import React from 'react';

interface IIconProvider extends IBaseProvider {
}

interface IThemeProvider extends IBaseProvider {
    theme?: string;
}
interface ICommonTheme {
    secondary: string;
    tertiary: string;
    positive: string;
    negative: string;
    mobileMaxWidth: string;
    mobileMinWidth: string;
}
interface IThemeContent extends ICommonTheme {
    primary: string;
    reverse: string;
    tooltip: string;
    t8: string;
    t7: string;
    t6: string;
    t5: string;
    t4: string;
    t3: string;
    t2: string;
    t1: string;
    t08: string;
    t05: string;
    t03: string;
    t02: string;
    t01: string;
    lgrad: string;
    maingrad: string;
}
interface ITheme {
    light: IThemeContent;
    dark: IThemeContent;
}
interface IThemeContext {
    theme: keyof ITheme;
    setTheme: (theme: keyof ITheme) => void;
    content: IThemeContent;
    Switcher: any;
}

interface IModalProvider extends IBaseProvider {
}
interface IModalConfig {
    component: typeof Modal;
    name: string;
    props?: IModal;
    type?: "fixed" | "dinamic";
}
interface IModalContext {
    value: Array<IModalConfig>;
    add: (value: IModalConfig) => void;
    remove: (modalName: string) => void;
    setProps: (modalName: string, props: IModal) => void;
}

interface IBaseProvider {
    children: React.ReactNode;
}

export type { IThemeContent as I, IBaseProvider as a, IIconProvider as b, IThemeProvider as c, ICommonTheme as d, ITheme as e, IThemeContext as f, IModalProvider as g, IModalConfig as h, IModalContext as i };
