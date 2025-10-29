declare const Format: {
    stringLimit(value: string, limit: number): string;
    address(data: any): string;
    match(value: any): string | any[];
    money: (value: any, notSign?: boolean) => string;
};
export default Format;
