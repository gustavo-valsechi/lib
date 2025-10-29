"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "./styles";
import _ from "lodash";
const ModalContext = createContext({});
const memory = [];
const ModalProviderContainer = ({ children }) => {
    const pathname = usePathname();
    const [modals, setModals] = useState([]);
    useEffect(() => {
        setModals(_.filter(memory, (modal) => modal.type === "fixed"));
    }, [pathname]);
    const add = (modal) => {
        if (_.some(memory, (data) => data.name === modal.name))
            return;
        memory.push(modal);
        setModals(memory);
    };
    const remove = (modalName) => {
        const index = _.findIndex(memory, (data) => data.name === modalName);
        memory.slice(index, 1);
        setModals(memory);
    };
    const setProps = (modalName, props) => {
        const index = _.findIndex(modals, (modal) => modal.name === modalName);
        const content = _.find(modals, (modal) => modal.name === modalName);
        if (!content)
            return;
        let settedModals = [...modals];
        settedModals.splice(index, 1, { ...content, props: { ...content.props, ...props } });
        setModals(settedModals);
    };
    return (_jsxs(ModalContext.Provider, { value: {
            value: modals,
            add,
            remove,
            setProps
        }, children: [_jsx(Container, { children: _.map(modals, (modal, index) => {
                    const ModalComponent = modal.component;
                    return _jsx(ModalComponent, { ...modal.props }, index);
                }) }), children] }));
};
const useModal = () => useContext(ModalContext);
export { ModalProviderContainer as ModalProvider, useModal };
