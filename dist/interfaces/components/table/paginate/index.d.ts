export interface IPaginate {
    total: number;
    page: {
        value: number;
        set: (value: number) => void;
    };
}
