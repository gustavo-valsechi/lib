import { IThemeProvider, IThemeContext } from "interfaces";
declare const ThemeProviderContainer: (props: IThemeProvider) => import("react/jsx-runtime").JSX.Element;
declare const useTheme: () => IThemeContext;
export { ThemeProviderContainer as ThemeProvider, useTheme };
