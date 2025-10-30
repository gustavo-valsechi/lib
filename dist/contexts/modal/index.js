"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModal = exports.ModalProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const navigation_1 = require("next/navigation");
const styles_1 = require("./styles");
const lodash_1 = __importDefault(require("lodash"));
const ModalContext = (0, react_1.createContext)({});
const memory = [];
const ModalProviderContainer = ({ children }) => {
    const pathname = (0, navigation_1.usePathname)();
    const [modals, setModals] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        setModals(lodash_1.default.filter(memory, (modal) => modal.type === "fixed"));
    }, [pathname]);
    const add = (modal) => {
        if (lodash_1.default.some(memory, (data) => data.name === modal.name))
            return;
        memory.push(modal);
        setModals(memory);
    };
    const remove = (modalName) => {
        const index = lodash_1.default.findIndex(memory, (data) => data.name === modalName);
        memory.slice(index, 1);
        setModals(memory);
    };
    const setProps = (modalName, props) => {
        const index = lodash_1.default.findIndex(modals, (modal) => modal.name === modalName);
        const content = lodash_1.default.find(modals, (modal) => modal.name === modalName);
        if (!content)
            return;
        let settedModals = [...modals];
        settedModals.splice(index, 1, { ...content, props: { ...content.props, ...props } });
        setModals(settedModals);
    };
    return ((0, jsx_runtime_1.jsxs)(ModalContext.Provider, { value: {
            value: modals,
            add,
            remove,
            setProps
        }, children: [(0, jsx_runtime_1.jsx)(styles_1.Container, { children: lodash_1.default.map(modals, (modal, index) => {
                    const ModalComponent = modal.component;
                    return (0, jsx_runtime_1.jsx)(ModalComponent, { ...modal.props }, index);
                }) }), children] }));
};
exports.ModalProvider = ModalProviderContainer;
const useModal = () => (0, react_1.useContext)(ModalContext);
exports.useModal = useModal;
