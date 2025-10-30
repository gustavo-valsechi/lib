import { Modal } from "@components";
import { IModal, IBaseProvider } from "../..";
export interface IModalProvider extends IBaseProvider {
}
export interface IModalConfig {
    component: typeof Modal;
    name: string;
    props?: IModal;
    type?: "fixed" | "dinamic";
}
export interface IModalContext {
    value: Array<IModalConfig>;
    add: (value: IModalConfig) => void;
    remove: (modalName: string) => void;
    setProps: (modalName: string, props: IModal) => void;
}
