import { UseFormRegister } from "react-hook-form";
export interface IInputDateTime {
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
