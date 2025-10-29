export interface ICreditCard {
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
