import { IModalProvider, IModalContext } from "interfaces";
declare const ModalProviderContainer: ({ children }: IModalProvider) => import("react/jsx-runtime").JSX.Element;
declare const useModal: () => IModalContext;
export { ModalProviderContainer as ModalProvider, useModal };
