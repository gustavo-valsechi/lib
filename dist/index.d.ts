import * as react_jsx_runtime from 'react/jsx-runtime';
import { IPaginate as IPaginate$1, ITable as ITable$1, ILoadingBar as ILoadingBar$1, ILoadingApp as ILoadingApp$1, IModal as IModal$1, IBadge as IBadge$1, ILogo as ILogo$1, IInputFile as IInputFile$1, IInputLabel as IInputLabel$1, IInputText as IInputText$1, IInputSelect as IInputSelect$1, IButton as IButton$1, IInputDateTime as IInputDateTime$1, IInputTextarea as IInputTextarea$1, IForm as IForm$1, IChart as IChart$1, IAvatar as IAvatar$1, ILottie as ILottie$1, ICreditCard as ICreditCard$1, IBlock as IBlock$1, IComponent as IComponent$1, IIconProvider as IIconProvider$1, IThemeProvider as IThemeProvider$1, IThemeContext as IThemeContext$1, IModalProvider as IModalProvider$1, IModalContext as IModalContext$1, IComponentContent as IComponentContent$1 } from '@gustavo-valsechi/interfaces';
import React from 'react';
import * as Types from '@gustavo-valsechi/components/types';
import * as moment from 'moment';
import { UseFormRegister } from 'react-hook-form';
import animations from '@gustavo-valsechi/components/types/lottie/animations';
import { Modal as Modal$1 } from '@gustavo-valsechi/components';

declare function Paginate(props: IPaginate$1): false | react_jsx_runtime.JSX.Element;

declare function Table(props: ITable$1): react_jsx_runtime.JSX.Element;

declare function LoadingBar(props: ILoadingBar$1): react_jsx_runtime.JSX.Element;

declare function LoadingApp(props: ILoadingApp$1): react_jsx_runtime.JSX.Element;

declare function Modal(props: IModal$1): react_jsx_runtime.JSX.Element;

declare function Badge(props: IBadge$1): react_jsx_runtime.JSX.Element;

declare function Logo(props: ILogo$1): react_jsx_runtime.JSX.Element;

declare function InputFile(props: IInputFile$1): react_jsx_runtime.JSX.Element;

declare function InputLabel(props: IInputLabel$1): react_jsx_runtime.JSX.Element;

declare function InputText(props: IInputText$1): react_jsx_runtime.JSX.Element;

declare function InputSelect(props: IInputSelect$1): react_jsx_runtime.JSX.Element;

declare function Button(props: IButton$1): react_jsx_runtime.JSX.Element;

declare function InputDateTime(props: IInputDateTime$1): react_jsx_runtime.JSX.Element;

declare function InputTextarea(props: IInputTextarea$1): react_jsx_runtime.JSX.Element;

declare function Form(props: IForm$1): react_jsx_runtime.JSX.Element;

declare function Chart(props: IChart$1): react_jsx_runtime.JSX.Element;

declare function Avatar(props: IAvatar$1): react_jsx_runtime.JSX.Element;

declare function Lottie(props: ILottie$1): react_jsx_runtime.JSX.Element;

declare function CreditCard(props: ICreditCard$1): react_jsx_runtime.JSX.Element;

declare function Block(props: IBlock$1): react_jsx_runtime.JSX.Element;

declare function Component(props: IComponent$1): react_jsx_runtime.JSX.Element;

declare const IconProviderContainer: ({ children }: IIconProvider$1) => react_jsx_runtime.JSX.Element;
declare const useIcon: () => any;

declare const ThemeProviderContainer: (props: IThemeProvider$1) => react_jsx_runtime.JSX.Element;
declare const useTheme: () => IThemeContext$1;

declare const TooltipProviderContainer: ({ children }: {
    children: React.ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const useTooltip: () => any;

declare const ModalProviderContainer: ({ children }: IModalProvider$1) => react_jsx_runtime.JSX.Element;
declare const useModal: () => IModalContext$1;

interface IPaginate {
    total: number;
    page: {
        value: number;
        set: (value: number) => void;
    };
}

interface ITableAction {
    disabled?: boolean;
    position?: string;
    function: (data?: any) => any;
    icon?: string;
    label?: string;
    tooltip?: string;
}
interface ITableColumn {
    name?: string;
    style?: object;
    action?: ITableAction;
}
interface ITableRow {
    actions?: Array<ITableAction>;
    image?: any;
    icon?: any;
    style?: any;
    mask?: any;
    custom?: (data: any) => React.ReactNode;
    name?: string;
}
interface ITable {
    content: Array<any>;
    loading?: boolean | {
        is?: boolean;
        items?: Array<any>;
    };
    options: Array<{
        column: ITableColumn | string;
        row: ITableRow | string;
    }>;
    notFound?: {
        title: string;
        message: string;
    };
    paginate?: {
        total: number;
        page: {
            value: number;
            set: (value: number) => any;
        };
    };
}

interface ILoadingBar {
    borderRadius?: string;
    height?: string;
    width?: string;
    margin?: string;
    dark?: boolean;
}

interface ILoadingApp {
    initialization?: boolean;
}

interface IModal {
    toggle: boolean;
    onClose?: () => void;
    title?: string;
    header?: {
        title: string;
        icon: string;
    };
    buttons?: Array<IButton$1>;
    children?: React.ReactNode;
    position?: "center" | "right" | "left";
    noCloseIcon?: boolean;
    content?: any;
}

interface IBadge {
    value: string;
}

interface ILogo {
    opacity?: string | number;
    size?: string | number;
    onlyPrefix?: boolean;
    className?: string;
}

interface IInputFile {
    className?: string;
    label?: string;
    name: string;
    value: string;
    onPreview?: (url: any) => void;
    onChange: (event: any) => void;
    disabled?: boolean;
    error: string;
    onFocus: (value: string) => void;
    required?: boolean;
    register?: UseFormRegister<any>;
}

interface IInputLabel {
    className?: string;
    children: React.ReactNode;
}

interface IInputText {
    className?: string;
    label?: string;
    id?: string;
    name?: string;
    type?: string;
    value?: string;
    mask?: (value: string) => void;
    onChange?: (event: any) => void;
    maxLength?: number;
    error?: string;
    disabled?: boolean;
    onFocus?: (value: any) => void;
    required?: boolean;
    register?: UseFormRegister<any>;
}

interface IInputSelect {
    className?: string;
    label?: string;
    name: string;
    value?: string;
    onChange?: (event: any) => void;
    options: Array<any>;
    error: string;
    disabled?: boolean;
    onFocus: (value: any) => void;
    required?: boolean;
    register?: UseFormRegister<any>;
}

interface IButton {
    loading?: boolean;
    disabled?: boolean;
    type?: string;
    onClick?: () => void;
    label: string;
}

interface IInputDateTime {
    className?: string;
    label?: string;
    name: string;
    value: string;
    mask?: (value: string) => void;
    onFocus: (value: any) => void;
    onChange: (event: any) => void;
    maxLength?: number;
    error: string;
    disabled?: boolean;
    required?: boolean;
    register?: UseFormRegister<any>;
}

interface IInputTextarea {
    className?: string;
    label?: string;
    name: string;
    value: string;
    mask?: (value: string) => void;
    onChange: (event: any) => void;
    maxLength?: number;
    rows?: number;
    error: string;
    disabled?: boolean;
    onFocus: (value: string) => void;
    required?: boolean;
    register?: UseFormRegister<any>;
}

interface IForm {
    defaultValues?: any;
    validation?: any;
    formRef?: any;
    onSubmit: (values: any, actions?: any) => void;
    clearWhen?: boolean;
    inputs: Array<any>;
    buttons?: Array<any>;
}

interface IChart {
    content: Array<any>;
    yAxis: Array<any>;
    xAxis: Array<any>;
    min?: number;
    max?: number;
    colors?: Array<string>;
    height?: number;
}

interface IAvatar {
    name?: string;
    size?: string;
    color?: string;
    onClick?: Function;
}

interface IBase$1 {
    size?: number;
}
type ILottie = (IBase$1 & {
    src: string;
    animation?: never;
}) | (IBase$1 & {
    animation: keyof typeof animations;
    src?: never;
});

interface ICreditCard {
    cvc?: string;
    name: string;
    number: string;
    expiry: string;
    onEdit?: () => any;
    onConfig?: () => any;
    onRemove?: () => any;
    focused?: "name" | "number" | "expiry" | "cvc" | "" | undefined;
    functions?: Array<{
        icon: string;
        label: string;
        function?: () => any;
        hide?: boolean;
    }>;
}

interface IBase {
    icon?: string;
    label?: string;
}
type IBlock = (IBase & {
    component: IComponentContent$1;
    content?: never;
    children?: never;
}) | (IBase & {
    children: React.ReactNode;
    component?: never;
    content?: never;
});

type IComponentMap = typeof Types;
type IComponentConfigMap = {
    [K in keyof IComponentMap]: {
        type: K;
        props?: React.ComponentProps<IComponentMap[K]>;
    };
};
type IComponentConfig = IComponentConfigMap[keyof IComponentMap];
type IComponentContent = Array<IComponentConfig | Array<IComponentConfig>>;
interface IComponent {
    className?: string;
    content: IComponentContent;
}

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

interface ITooltipProvider extends IBaseProvider {
}

interface IModalProvider extends IBaseProvider {
}
interface IModalConfig {
    component: typeof Modal$1;
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

export { Avatar, Badge, Block, Button, Chart, Component, CreditCard, Form, type IAvatar, type IBadge, type IBaseProvider, type IBlock, type IButton, type IChart, type ICommonTheme, type IComponent, type IComponentConfig, type IComponentConfigMap, type IComponentContent, type IComponentMap, type ICreditCard, type IForm, type IIconProvider, type IInputDateTime, type IInputFile, type IInputLabel, type IInputSelect, type IInputText, type IInputTextarea, type ILoadingApp, type ILoadingBar, type ILogo, type ILottie, type IModal, type IModalConfig, type IModalContext, type IModalProvider, type IPaginate, type ITable, type ITableAction, type ITableColumn, type ITableRow, type ITheme, type IThemeContent, type IThemeContext, type IThemeProvider, type ITooltipProvider, IconProviderContainer as IconProvider, InputDateTime, InputFile, InputLabel, InputSelect, InputText, InputTextarea, LoadingApp, LoadingBar, Logo, Lottie, Modal, ModalProviderContainer as ModalProvider, Paginate, StyledComponentsRegistry, Table, ThemeProviderContainer as ThemeProvider, TooltipProviderContainer as TooltipProvider, Utils, getStorage, setStorage, useIcon, useModal, useTheme, useTooltip };
