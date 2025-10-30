import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

declare function Modal(props: IModal): react_jsx_runtime.JSX.Element;

interface IModal {
    toggle: boolean;
    onClose?: () => void;
    title?: string;
    header?: {
        title: string;
        icon: string;
    };
    buttons?: Array<IButton>;
    children?: React.ReactNode;
    position?: "center" | "right" | "left";
    noCloseIcon?: boolean;
    content?: any;
}

interface IButton {
    loading?: boolean;
    disabled?: boolean;
    type?: string;
    onClick?: () => void;
    label: string;
}

export { type IModal as I, Modal as M, type IButton as a };
