export declare class Utils {
    static moment: (inp?: import("moment").MomentInput, format?: import("moment").MomentFormatSpecification | undefined, language?: string | undefined, strict?: boolean | undefined) => import("moment").Moment;
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
