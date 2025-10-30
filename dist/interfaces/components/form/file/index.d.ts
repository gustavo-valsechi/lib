import { UseFormRegister } from "react-hook-form";
export interface IInputFile {
    className?: string;
    label?: string;
    name: string;
    value: string;
    onPreview?: (url: any) => void;
    onChange: (event: any) => void;
    disabled?: boolean;
    error: string;
    onFocus: (value: string) => void;
    required?: boolean;
    register?: UseFormRegister<any>;
}
