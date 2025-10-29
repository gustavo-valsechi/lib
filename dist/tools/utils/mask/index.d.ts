declare const Mask: {
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
export default Mask;
