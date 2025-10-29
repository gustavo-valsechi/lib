import { IBaseProvider } from "../..";
export interface IThemeProvider extends IBaseProvider {
    theme?: string;
}
export interface ICommonTheme {
    secondary: string;
    tertiary: string;
    positive: string;
    negative: string;
    mobileMaxWidth: string;
    mobileMinWidth: string;
}
export interface IThemeContent extends ICommonTheme {
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
export interface ITheme {
    light: IThemeContent;
    dark: IThemeContent;
}
export interface IThemeContext {
    theme: keyof ITheme;
    setTheme: (theme: keyof ITheme) => void;
    content: IThemeContent;
    Switcher: any;
}
