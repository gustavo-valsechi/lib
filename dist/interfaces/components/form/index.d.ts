export * from "./file";
export * from "./label";
export * from "./input";
export * from "./select";
export * from "./button";
export * from "./datetime";
export * from "./textarea";
export interface IForm {
    defaultValues?: any;
    validation?: any;
    formRef?: any;
    onSubmit: (values: any, actions?: any) => void;
    clearWhen?: boolean;
    inputs: Array<any>;
    buttons?: Array<any>;
}
