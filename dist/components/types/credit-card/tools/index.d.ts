import luhn from "luhn";
export declare const validateLuhn: typeof luhn.validate;
export declare const getCardContent: (cardNumber: string) => {
    flag: string;
    logo: string;
};
