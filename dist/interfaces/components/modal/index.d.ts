import React from "react";
import { IButton } from "@interfaces";
export interface IModal {
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
