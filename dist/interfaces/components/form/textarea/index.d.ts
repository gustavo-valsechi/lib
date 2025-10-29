import { UseFormRegister } from "react-hook-form";
export interface IInputTextarea {
    className?: string;
    label?: string;
    name: string;
    value: string;
    mask?: (value: string) => void;
    onChange: (event: any) => void;
    maxLength?: number;
    rows?: number;
    error: string;
    disabled?: boolean;
    onFocus: (value: string) => void;
    required?: boolean;
    register?: UseFormRegister<any>;
}
