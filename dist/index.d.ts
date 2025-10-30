import { I as IThemeContent } from './index-DT7VKE7H.js';
export { a as IBaseProvider, d as ICommonTheme, b as IIconProvider, h as IModalConfig, i as IModalContext, g as IModalProvider, e as ITheme, f as IThemeContext, c as IThemeProvider } from './index-DT7VKE7H.js';
export { Component } from './components/index.js';
export { IconProvider, ModalProvider, ThemeProvider, TooltipProvider, useIcon, useModal, useTheme, useTooltip } from './contexts/index.js';
export { A as Avatar, B as Badge, l as Block, g as Button, C as Chart, k as CreditCard, F as Form, N as IAvatar, x as IBadge, R as IBlock, M as IChart, I as IComponent, o as IComponentConfig, n as IComponentConfigMap, p as IComponentContent, m as IComponentMap, Q as ICreditCard, z as IForm, J as IInputDateTime, D as IInputFile, E as IInputLabel, H as IInputSelect, G as IInputText, K as IInputTextarea, w as ILoadingApp, v as ILoadingBar, y as ILogo, O as ILottie, u as IPaginate, t as ITable, q as ITableAction, r as ITableColumn, s as ITableRow, h as InputDateTime, c as InputFile, d as InputLabel, f as InputSelect, e as InputText, i as InputTextarea, a as LoadingApp, L as LoadingBar, b as Logo, j as Lottie, P as Paginate, T as Table } from './index-DtZJS_Si.js';
import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';
import * as moment from 'moment';
export { a as IButton, I as IModal, M as Modal } from './index-Da-DtPS-.js';
export { ITooltipProvider } from './interfaces/index.js';
import 'react-hook-form';

declare module "styled-components" {
    interface DefaultTheme extends IThemeContent {
    }
}

declare function StyledComponentsRegistry({ children }: {
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;

declare class Utils {
    static moment: (inp?: moment.MomentInput, format?: moment.MomentFormatSpecification | undefined, language?: string | undefined, strict?: boolean | undefined) => moment.Moment;
    static format: {
        stringLimit(value: string, limit: number): string;
        address(data: any): string;
        match(value: any): string | any[];
        money: (value: any, notSign?: boolean) => string;
    };
    static mask: {
        docNumber: (value: any) => any;
        phone: (value: any) => any;
        kilo: (value: any) => any;
        money(valor: any, nosign?: boolean, integer?: boolean): any;
        number: (value: any) => any;
        loop: (value: string | undefined, options: {
            sequencyNumber: number;
            maxSequency: number;
            placeholder?: string;
            separator?: string;
            regex?: string;
        }) => string;
    };
    static removeMask: {
        phone: (value: any) => any;
        docNumber: (value: any) => any;
        percent: (value: any) => any;
        money: (value: any) => any;
        number: (value: any) => any;
    };
}

declare function getStorage(key?: string): Promise<string | undefined>;
declare function setStorage(key?: string, value?: string): Promise<void>;

export { IThemeContent, StyledComponentsRegistry, Utils, getStorage, setStorage };
