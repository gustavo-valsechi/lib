import React from "react";
export * from "./paginate";
export interface ITableAction {
    disabled?: boolean;
    position?: string;
    function: (data?: any) => any;
    icon?: string;
    label?: string;
    tooltip?: string;
}
export interface ITableColumn {
    name?: string;
    style?: object;
    action?: ITableAction;
}
export interface ITableRow {
    actions?: Array<ITableAction>;
    image?: any;
    icon?: any;
    style?: any;
    mask?: any;
    custom?: (data: any) => React.ReactNode;
    name?: string;
}
export interface ITable {
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
