import { UseFormRegister } from "react-hook-form";
export interface IInputSelect {
    className?: string;
    label?: string;
    name: string;
    value?: string;
    onChange?: (event: any) => void;
    options: Array<any>;
    error: string;
    disabled?: boolean;
    onFocus: (value: any) => void;
    required?: boolean;
    register?: UseFormRegister<any>;
}
