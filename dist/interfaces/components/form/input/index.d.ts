import { UseFormRegister } from "react-hook-form";
export interface IInputText {
    className?: string;
    label?: string;
    id?: string;
    name?: string;
    type?: string;
    value?: string;
    mask?: (value: string) => void;
    onChange?: (event: any) => void;
    maxLength?: number;
    error?: string;
    disabled?: boolean;
    onFocus?: (value: any) => void;
    required?: boolean;
    register?: UseFormRegister<any>;
}
