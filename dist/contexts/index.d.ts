import * as react_jsx_runtime from 'react/jsx-runtime';
import { b as IIconProvider, c as IThemeProvider, f as IThemeContext, g as IModalProvider, i as IModalContext } from '../index-DT7VKE7H.js';
import React from 'react';
import '../index-Da-DtPS-.js';

declare const IconProviderContainer: ({ children }: IIconProvider) => react_jsx_runtime.JSX.Element;
declare const useIcon: () => any;

declare const ThemeProviderContainer: (props: IThemeProvider) => react_jsx_runtime.JSX.Element;
declare const useTheme: () => IThemeContext;

declare const TooltipProviderContainer: ({ children }: {
    children: React.ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const useTooltip: () => any;

declare const ModalProviderContainer: ({ children }: IModalProvider) => react_jsx_runtime.JSX.Element;
declare const useModal: () => IModalContext;

export { IconProviderContainer as IconProvider, ModalProviderContainer as ModalProvider, ThemeProviderContainer as ThemeProvider, TooltipProviderContainer as TooltipProvider, useIcon, useModal, useTheme, useTooltip };
