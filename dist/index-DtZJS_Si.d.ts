import React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { a as IButton, M as Modal } from './index-Da-DtPS-.js';
import { UseFormRegister } from 'react-hook-form';

declare function Paginate(props: IPaginate): false | react_jsx_runtime.JSX.Element;

declare function Table(props: ITable): react_jsx_runtime.JSX.Element;

declare function LoadingBar(props: ILoadingBar): react_jsx_runtime.JSX.Element;

declare function LoadingApp(props: ILoadingApp): react_jsx_runtime.JSX.Element;

declare function Badge(props: IBadge): react_jsx_runtime.JSX.Element;

declare function Logo(props: ILogo): react_jsx_runtime.JSX.Element;

declare function InputFile(props: IInputFile): react_jsx_runtime.JSX.Element;

declare function InputLabel(props: IInputLabel): react_jsx_runtime.JSX.Element;

declare function InputText(props: IInputText): react_jsx_runtime.JSX.Element;

declare function InputSelect(props: IInputSelect): react_jsx_runtime.JSX.Element;

declare function Button(props: IButton): react_jsx_runtime.JSX.Element;

declare function InputDateTime(props: IInputDateTime): react_jsx_runtime.JSX.Element;

declare function InputTextarea(props: IInputTextarea): react_jsx_runtime.JSX.Element;

declare function Form(props: IForm): react_jsx_runtime.JSX.Element;

declare function Chart(props: IChart): react_jsx_runtime.JSX.Element;

declare function Avatar(props: IAvatar): react_jsx_runtime.JSX.Element;

declare function Lottie(props: ILottie): react_jsx_runtime.JSX.Element;

declare function CreditCard(props: ICreditCard): react_jsx_runtime.JSX.Element;

declare function Block(props: IBlock): react_jsx_runtime.JSX.Element;

declare const Types_Avatar: typeof Avatar;
declare const Types_Badge: typeof Badge;
declare const Types_Block: typeof Block;
declare const Types_Button: typeof Button;
declare const Types_Chart: typeof Chart;
declare const Types_CreditCard: typeof CreditCard;
declare const Types_Form: typeof Form;
declare const Types_InputDateTime: typeof InputDateTime;
declare const Types_InputFile: typeof InputFile;
declare const Types_InputLabel: typeof InputLabel;
declare const Types_InputSelect: typeof InputSelect;
declare const Types_InputText: typeof InputText;
declare const Types_InputTextarea: typeof InputTextarea;
declare const Types_LoadingApp: typeof LoadingApp;
declare const Types_LoadingBar: typeof LoadingBar;
declare const Types_Logo: typeof Logo;
declare const Types_Lottie: typeof Lottie;
declare const Types_Modal: typeof Modal;
declare const Types_Paginate: typeof Paginate;
declare const Types_Table: typeof Table;
declare namespace Types {
  export { Types_Avatar as Avatar, Types_Badge as Badge, Types_Block as Block, Types_Button as Button, Types_Chart as Chart, Types_CreditCard as CreditCard, Types_Form as Form, Types_InputDateTime as InputDateTime, Types_InputFile as InputFile, Types_InputLabel as InputLabel, Types_InputSelect as InputSelect, Types_InputText as InputText, Types_InputTextarea as InputTextarea, Types_LoadingApp as LoadingApp, Types_LoadingBar as LoadingBar, Types_Logo as Logo, Types_Lottie as Lottie, Types_Modal as Modal, Types_Paginate as Paginate, Types_Table as Table };
}

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

declare const _default: {
    loader: {
        v: string;
        meta: {
            g: string;
            a: string;
            k: string;
            d: string;
            tc: string;
        };
        fr: number;
        ip: number;
        op: number;
        w: number;
        h: number;
        nm: string;
        ddd: number;
        assets: never[];
        layers: ({
            ddd: number;
            ind: number;
            ty: number;
            nm: string;
            sr: number;
            ks: {
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                r: {
                    a: number;
                    k: number;
                    ix: number;
                    x: string;
                };
                p: {
                    a: number;
                    k: number[];
                    ix: number;
                    x: string;
                };
                a: {
                    a: number;
                    k: number[];
                    ix: number;
                };
                s: {
                    a: number;
                    k: number[];
                    ix: number;
                };
            };
            ao: number;
            shapes: {
                ty: string;
                it: ({
                    ind: number;
                    ty: string;
                    ix: number;
                    ks: {
                        a: number;
                        k: ({
                            i: {
                                x: number;
                                y: number;
                            };
                            o: {
                                x: number;
                                y: number;
                            };
                            t: number;
                            s: {
                                i: number[][];
                                o: number[][];
                                v: number[][];
                                c: boolean;
                            }[];
                        } | {
                            t: number;
                            s: {
                                i: number[][];
                                o: number[][];
                                v: number[][];
                                c: boolean;
                            }[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    nm: string;
                    mn: string;
                    hd: boolean;
                    c?: undefined;
                    o?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                    r?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    c: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    w: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    lc: number;
                    lj: number;
                    ml: number;
                    bm: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    r?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    c: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    r: number;
                    bm: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sk: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sa: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    nm: string;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    mn?: undefined;
                    hd?: undefined;
                    c?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                })[];
                nm: string;
                np: number;
                cix: number;
                bm: number;
                ix: number;
                mn: string;
                hd: boolean;
            }[];
            ip: number;
            op: number;
            st: number;
            bm: number;
        } | {
            ddd: number;
            ind: number;
            ty: number;
            nm: string;
            sr: number;
            ks: {
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                r: {
                    a: number;
                    k: ({
                        i: {
                            x: number[];
                            y: number[];
                        };
                        o: {
                            x: number[];
                            y: number[];
                        };
                        t: number;
                        s: number[];
                    } | {
                        t: number;
                        s: number[];
                        i?: undefined;
                        o?: undefined;
                    })[];
                    ix: number;
                    x?: undefined;
                };
                p: {
                    a: number;
                    k: number[];
                    ix: number;
                    x?: undefined;
                };
                a: {
                    a: number;
                    k: number[];
                    ix: number;
                };
                s: {
                    a: number;
                    k: number[];
                    ix: number;
                };
            };
            ao: number;
            ip: number;
            op: number;
            st: number;
            bm: number;
            shapes?: undefined;
        })[];
        markers: never[];
    };
};

interface IBase$1 {
    size?: number;
}
type ILottie = (IBase$1 & {
    src: string;
    animation?: never;
}) | (IBase$1 & {
    animation: keyof typeof _default;
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
    component: IComponentContent;
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

export { Avatar as A, Badge as B, Chart as C, type IInputFile as D, type IInputLabel as E, Form as F, type IInputText as G, type IInputSelect as H, type IComponent as I, type IInputDateTime as J, type IInputTextarea as K, LoadingBar as L, type IChart as M, type IAvatar as N, type ILottie as O, Paginate as P, type ICreditCard as Q, type IBlock as R, Table as T, LoadingApp as a, Logo as b, InputFile as c, InputLabel as d, InputText as e, InputSelect as f, Button as g, InputDateTime as h, InputTextarea as i, Lottie as j, CreditCard as k, Block as l, type IComponentMap as m, type IComponentConfigMap as n, type IComponentConfig as o, type IComponentContent as p, type ITableAction as q, type ITableColumn as r, type ITableRow as s, type ITable as t, type IPaginate as u, type ILoadingBar as v, type ILoadingApp as w, type IBadge as x, type ILogo as y, type IForm as z };
