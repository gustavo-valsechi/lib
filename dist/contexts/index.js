"use client";
"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// contexts/index.tsx
var contexts_exports = {};
__export(contexts_exports, {
  IconProvider: () => IconProviderContainer,
  ModalProvider: () => ModalProviderContainer,
  ThemeProvider: () => ThemeProviderContainer,
  TooltipProvider: () => TooltipProviderContainer,
  useIcon: () => useIcon,
  useModal: () => useModal,
  useTheme: () => useTheme,
  useTooltip: () => useTooltip
});
module.exports = __toCommonJS(contexts_exports);

// contexts/icon/index.tsx
var import_react3 = require("react");

// contexts/theme/index.tsx
var import_react2 = require("react");
var import_styled_components3 = require("styled-components");

// contexts/theme/styles.tsx
var import_styled_components = __toESM(require("styled-components"));
var Switcher = import_styled_components.default.div`
    width: 3rem;
    height: 1.5rem;
    border-radius: 1rem;
    border: 2px solid ${({ theme }) => theme.t05};
    overflow: hidden;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    i {
        color: ${({ theme }) => theme.t6};
        position: absolute;
        transform: translateY(-50%);
        font-size: .9rem;
        z-index: 0;
        transition: ease .8s;

        &:first-child {
            left: .2rem;
            top: 50%;
            opacity: ${(props) => props["data-theme"] === "light" ? 0 : 1};
        }

        &:last-child {
            right: .2rem;
            top: 50%;
            opacity: ${(props) => props["data-theme"] === "light" ? 1 : 0};
        }
    }
    
    .switcher {
        width: 1rem;
        height: 1rem;
        border-radius: 1rem;
        position: relative;
        transition: ease .3s;
        transform: ${(props) => props["data-theme"] === "light" ? "transform: translateX(.2rem)" : "translateX(1.6rem)"};
        z-index: 1;

        div {
            width: 100%;
            height: 100%;
            background: ${({ theme }) => theme.primary};
            border-radius: 1rem;
            position: relative;
            z-index: 2;
        }

        &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            transform: scale(1.8);
            background: ${({ theme }) => theme.t05};
            top: 0;
            left: 0;
            z-index: 1;
        }

        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            transform: scale(3);
            background: ${({ theme }) => theme.t05};
            top: 0;
            left: 0;
            z-index: 0;
        }
    }
`;

// contexts/theme/content.tsx
var CommonTheme = {
  secondary: "#5869da",
  tertiary: "#629dfd33",
  positive: "#65c965",
  negative: "#FF334E",
  mobileMaxWidth: "650px",
  mobileMinWidth: "315px"
};
var Themes = {
  light: {
    primary: "#ffffff",
    reverse: "#353535",
    tooltip: "#f2f2f2",
    t8: "#000000cc",
    t7: "#000000b3",
    t6: "#00000099",
    t5: "#00000080",
    t4: "#00000066",
    t3: "#0000004d",
    t2: "#00000033",
    t1: "#0000001a",
    t08: "#00000014",
    t05: "#0000000d",
    t03: "#00000007",
    t02: "#00000005",
    t01: "#00000002",
    lgrad: `linear-gradient(
            to right, 
            #dadef7 0%, 
            #dee2f8 5%, 
            #e2e5f9 10%, 
            #e6e9fa 20%, 
            #eaedfb 30%, 
            #eff0fb 60%, 
            #f3f4fc 80%, 
            #f7f8fd 90%, 
            #fbfbfe 100%
        )`,
    maingrad: "linear-gradient(330deg, #b9c0ff7a 0%, #ffffff 100%)",
    ...CommonTheme
  },
  dark: {
    primary: "#333333",
    reverse: "#b45252",
    tooltip: "#3d3d3d",
    t8: "#ffffffcc",
    t7: "#ffffffb3",
    t6: "#ffffff99",
    t5: "#ffffff80",
    t4: "#ffffff66",
    t3: "#ffffff4d",
    t2: "#ffffff33",
    t1: "#ffffff1a",
    t08: "#ffffff14",
    t05: "#ffffff0d",
    t03: "#ffffff07",
    t02: "#ffffff05",
    t01: "#ffffff02",
    lgrad: `linear-gradient(
            to right, 
            #3d485c 0%, 
            #3c4657 5%, 
            #3b4353 10%, 
            #3a414e 20%, 
            #393f4a 30%, 
            #373c45 60%, 
            #363a41 80%, 
            #35383c 90%, 
            #343538 100%
        )`,
    maingrad: "linear-gradient(330deg, #1d1e27 0%, #333333 100%)",
    ...CommonTheme
  }
};

// tools/registry/index.tsx
var import_react = require("react");
var import_navigation = require("next/navigation");
var import_styled_components2 = require("styled-components");
var import_is_prop_valid = __toESM(require("@emotion/is-prop-valid"));
var import_jsx_runtime = require("react/jsx-runtime");

// tools/utils/moment/index.tsx
var import_moment_timezone = __toESM(require("moment-timezone"));
import_moment_timezone.default.tz(process.env.NEXT_PUBLIC_TIMEZONE || "");
var Moment = (...args) => {
  return (0, import_moment_timezone.default)(...args);
};
var moment_default = Moment;

// tools/utils/format/index.tsx
var import_lodash = __toESM(require("lodash"));
var Format = {
  stringLimit(value, limit) {
    if (!value) return "";
    if (value.length <= limit) return value;
    if (!import_lodash.default.isString(value)) return "";
    return value.substring(0, limit) + "...";
  },
  address(data) {
    if (!data) return "";
    return `${data.city} - ${data.state} / ${data.address}`;
  },
  match(value) {
    if (!value) return "";
    if (Number(value.replace(/\D/g, ""))) return String(value);
    if (typeof value !== "string") {
      return import_lodash.default.map(value, (data) => data.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toUpperCase());
    }
    return value.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toUpperCase();
  },
  money: (value, notSign) => {
    const locale = "pt-br";
    value = parseFloat(value);
    if (!notSign) {
      return new Intl.NumberFormat(locale, { style: "currency", currency: "BRL" }).format(value);
    }
    return new Intl.NumberFormat(locale, { minimumFractionDigits: 2 }).format(value);
  }
};
var format_default = Format;

// tools/utils/mask/index.tsx
var import_lodash2 = __toESM(require("lodash"));
var Mask = {
  docNumber: (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    if (value.length <= 11) {
      return value.replace(/\D/g, "").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})/, "$1-$2").replace(/(-\d{2})\d+?$/, "$1");
    }
    return value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})/, "$1/$2").replace(/(\d{4})(\d{1,2})/, "$1-$2").replace(/(-\d{2})\d+?$/, "$1");
  },
  phone: (value) => {
    if (!value) return "";
    if (value.length === 14 || value.length === 10) {
      return value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2").replace(/(-\d{4})(\d+?$)/, "$1");
    }
    return value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2").replace(/(-\d{4})\d+?$/, "$1");
  },
  kilo: (value) => {
    if (!value) return "";
    value = value.replace(/\D\./g, "");
    if (import_lodash2.default.includes(value, ".")) {
      const [left, right] = import_lodash2.default.split(value, ".");
      value = `${import_lodash2.default.replace(left, /\D/g, "").substring(0, 3)}.${import_lodash2.default.replace(right, /\D/g, "").substring(0, 2)}`;
    }
    return value;
  },
  money(valor, nosign, integer) {
    valor = valor + "";
    valor = parseInt(valor.replace(/[\D]+/g, ""));
    if (!nosign) valor = "R$ " + valor;
    if (!integer) {
      if (!nosign ? valor.length <= 4 : valor.length <= 1) {
        valor = valor.replace(/([0-9]{1})$/g, "00$1");
      }
      if (!nosign ? valor.length <= 5 : valor.length <= 2) {
        valor = valor.replace(/([0-9]{2})$/g, "0$1");
      }
      if (!nosign ? valor.length > 5 : valor.length > 2) {
        valor = valor.replace(/([0-9]{2})$/g, ",$1");
      }
      if (!nosign ? valor.length > 9 : valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
      }
      if (!nosign ? valor.length > 13 : valor.length > 10) {
        valor = valor.replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, ".$1.$2,$3");
      }
      if (!nosign ? valor.length > 17 : valor.length > 14) {
        valor = valor.replace(/([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, ".$1.$2.$3,$4");
      }
    } else {
      if (!nosign ? valor.length > 6 : valor.length > 3) {
        valor = valor.replace(/([0-9]{3}$)/g, ".$1");
      }
      if (!nosign ? valor.length > 10 : valor.length > 7) {
        valor = valor.replace(/([0-9]{3}).([0-9]{3}$)/g, ".$1.$2");
      }
      if (!nosign ? valor.length > 14 : valor.length > 11) {
        valor = valor.replace(/([0-9]{3}).([0-9]{3}).([0-9]{3}$)/g, ".$1.$2.$3");
      }
    }
    if (valor === "R$ NaN") return "";
    if (valor === "R$ 0,00") return "";
    return valor.substring(0, 20);
  },
  number: (value) => {
    if (!value) return "";
    return value.replace(/\D/g, "");
  },
  loop: (value = "", options) => {
    const {
      sequencyNumber = 1,
      maxSequency = 1,
      placeholder = "",
      separator = " ",
      regex = `[^0-9${separator}]`
    } = options || {};
    const sequency = import_lodash2.default.repeat(placeholder, sequencyNumber);
    const mask = import_lodash2.default.trim(import_lodash2.default.repeat(sequency + separator, maxSequency), separator);
    const length = sequencyNumber * maxSequency;
    const maxLength = separator ? length + (maxSequency - 1) : length;
    const customRegex = new RegExp(regex, "g");
    const sequencyRegex = new RegExp(`(.{${sequencyNumber}})`, "g");
    const separatorRegex = new RegExp(separator, "g");
    value = value.replace(customRegex, "");
    value = value.replace(separatorRegex, "");
    value = value.replace(sequencyRegex, "$1" + separator);
    const placeholderMask = placeholder ? mask.substring(value.length, maxLength) : "";
    return import_lodash2.default.trim(
      (value + placeholderMask).substring(0, maxLength),
      separator
    );
  }
};
var mask_default = Mask;

// tools/utils/remove-mask/index.tsx
var RemoveMask = {
  phone: (value) => {
    if (!value) return "";
    return value.replace("(", "").replace(")", "").replace(" ", "").replace("-", "");
  },
  docNumber: (value) => {
    if (!value) return "";
    return value.replace(/\./g, "").replace("/", "").replace("-", "");
  },
  percent: (value) => {
    if (!value) return "";
    return value.replace(",", ".").replace("%", "");
  },
  money: (value) => {
    if (!value) return "";
    return value.replace("R$", "").replace(/\./g, "").replace(",", ".");
  },
  number: (value) => {
    if (!value) return "";
    return value.replace(/\D/g, "");
  }
};
var remove_mask_default = RemoveMask;

// tools/utils/index.tsx
var Utils = class {
};
Utils.moment = moment_default;
Utils.format = format_default;
Utils.mask = mask_default;
Utils.removeMask = remove_mask_default;

// tools/storage/index.tsx
var import_headers = require("next/headers");
async function setStorage(key = "", value = "") {
  (0, import_headers.cookies)().set(key, value);
}

// contexts/theme/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var ThemeContext = (0, import_react2.createContext)({});
var ThemeProviderContainer = (props) => {
  const [theme, setTheme] = (0, import_react2.useState)("light");
  const [defaultTheme] = (0, import_react2.useState)("light");
  (0, import_react2.useEffect)(() => {
    if (!theme) return;
    (async () => await setStorage(process.env.NEXT_PUBLIC_STORAGE_THEME, theme))();
  }, [theme]);
  const SwitcherComponent = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      Switcher,
      {
        onClick: () => setTheme(theme === "light" ? "dark" : "light"),
        "data-theme": theme || defaultTheme,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("i", { "aria-hidden": true, className: "fa-solid fa-moon" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "switcher", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("i", { "aria-hidden": true, className: "fa-solid fa-sun" })
        ]
      }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    ThemeContext.Provider,
    {
      value: {
        theme: props.theme || defaultTheme,
        setTheme,
        content: Themes[props.theme || defaultTheme],
        Switcher: SwitcherComponent
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_styled_components3.ThemeProvider, { theme: Themes[props.theme || defaultTheme], children: props.children })
    }
  );
};
var useTheme = () => (0, import_react2.useContext)(ThemeContext);

// contexts/icon/index.tsx
var import_lodash3 = __toESM(require("lodash"));

// contexts/icon/assets/brands/index.tsx
var req = require.context("./", false, /\.svg$/);
var brands = {};
req.keys().forEach((key) => {
  const name = key.replace("./", "").replace(".svg", "");
  brands[name] = req(key).default;
});
var brands_default = brands;

// contexts/icon/assets/regular/index.tsx
var req2 = require.context("./", false, /\.svg$/);
var regular = {};
req2.keys().forEach((key) => {
  const name = key.replace("./", "").replace(".svg", "");
  regular[name] = req2(key).default;
});
var regular_default = regular;

// contexts/icon/assets/solid/index.tsx
var req3 = require.context("./", false, /\.svg$/);
var solid = {};
req3.keys().forEach((key) => {
  const name = key.replace("./", "").replace(".svg", "");
  solid[name] = req3(key).default;
});
var solid_default = solid;

// contexts/icon/assets/index.tsx
var assets_default = {
  brands: brands_default,
  regular: regular_default,
  solid: solid_default
};

// contexts/icon/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var IconContext = (0, import_react3.createContext)({});
var IconProviderContainer = ({ children }) => {
  const { content } = useTheme();
  const [isClient, setIsClient] = (0, import_react3.useState)(false);
  const [matches, setMatches] = (0, import_react3.useState)(0);
  (0, import_react3.useEffect)(() => {
    setIsClient(true);
  }, []);
  (0, import_react3.useEffect)(() => {
    const firstMediaQuery = window.matchMedia(`(max-width: ${content.mobileMaxWidth})`);
    const secoundMediaQuery = window.matchMedia(`(max-width: ${content.mobileMinWidth})`);
    const firstHandler = (event) => setMatches(event.matches ? 1 : 0);
    const secoundHandler = (event) => setMatches(event.matches ? 2 : 1);
    if (firstMediaQuery.matches) setMatches(1);
    if (secoundMediaQuery.matches) setMatches(2);
    firstMediaQuery.addEventListener("change", firstHandler);
    secoundMediaQuery.addEventListener("change", secoundHandler);
    return () => {
      firstMediaQuery.removeEventListener("change", firstHandler);
      secoundMediaQuery.removeEventListener("change", secoundHandler);
    };
  }, []);
  (0, import_react3.useEffect)(() => {
    if (!isClient) return;
    const processElement = (element) => {
      var _a, _b, _c, _d, _e;
      const name = element.getAttribute("class");
      if (!name) return;
      const icon = import_lodash3.default.split(import_lodash3.default.replace(name, /fa-/g, ""), " ");
      if (!icon.length) return;
      let svg = (_d = (_c = (_a = assets_default[icon[0]]) == null ? void 0 : _a[icon[1]]) != null ? _c : (_b = assets_default["solid"]) == null ? void 0 : _b[icon[0]]) != null ? _d : "";
      if (!svg) return;
      svg = svg.replace(/fill=".*?"/g, 'fill="currentColor"');
      const styles = window.getComputedStyle(element);
      const size = Number((_e = import_lodash3.default.split(styles.fontSize, "px")) == null ? void 0 : _e[0]) + 2;
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.textContent = "";
      element.innerHTML = svg;
    };
    document.querySelectorAll("i").forEach((el) => processElement(el));
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            const el = node;
            if (el.tagName.toLowerCase() === "i") processElement(el);
            el.querySelectorAll("i").forEach((child) => processElement(child));
          }
        });
      });
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    return () => observer.disconnect();
  }, [isClient, matches]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(IconContext.Provider, { value: {}, children });
};
var useIcon = () => (0, import_react3.useContext)(IconContext);

// contexts/tooltip/index.tsx
var import_react4 = require("react");

// contexts/tooltip/styles.tsx
var import_styled_components4 = __toESM(require("styled-components"));
var Tooltip = import_styled_components4.default.div`
    position: fixed;
    background: ${({ theme }) => theme.tooltip};
    color: ${({ theme }) => theme.t6};
    font-size: .8rem;
    font-weight: 500;
    text-align: center;
    padding: .3rem .8rem;
    border-radius: 5px;
    transform: translateX(-50%);
    z-index: 10;
    border: 1px solid ${({ theme }) => theme.t05};

    &::before {
        content: "";
        position: absolute;
        bottom: -9px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid ${({ theme }) => theme.t05};
    }

    &::after {
        content: "";
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid ${({ theme }) => theme.tooltip};
    }
`;

// contexts/tooltip/index.tsx
var import_lodash4 = __toESM(require("lodash"));
var import_jsx_runtime4 = require("react/jsx-runtime");
var TooltipContext = (0, import_react4.createContext)({});
var TooltipProviderContainer = ({ children }) => {
  const [tooltips, setTooltips] = (0, import_react4.useState)([]);
  const getContent = (target) => {
    var _a;
    const rect = target.getBoundingClientRect();
    return {
      top: rect.top + window.scrollY - (target.offsetHeight + 8),
      left: rect.left + window.scrollX + target.offsetWidth / 2,
      content: ((_a = target.dataset) == null ? void 0 : _a.tooltip) || ""
    };
  };
  (0, import_react4.useEffect)(() => {
    const processElement = (element) => {
      element.addEventListener("mouseenter", (event) => {
        const target = event == null ? void 0 : event.target;
        if (!target) return;
        setTooltips(import_lodash4.default.concat(tooltips, [getContent(target)]));
      });
      element.addEventListener("mouseleave", (event) => {
        const target = event == null ? void 0 : event.target;
        if (!target) return;
        setTooltips(import_lodash4.default.filter(tooltips, (data) => JSON.stringify(data) === JSON.stringify(getContent(target))));
      });
    };
    document.querySelectorAll("[data-tooltip]").forEach((el) => processElement(el));
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            const el = node;
            if (el.getAttribute("data-tooltip")) processElement(el);
            el.querySelectorAll("[data-tooltip]").forEach((child) => processElement(child));
          }
        });
      });
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(TooltipContext.Provider, { value: {}, children: [
    import_lodash4.default.map(
      tooltips,
      (data, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        Tooltip,
        {
          style: {
            top: data.top,
            left: data.left
          },
          children: data.content
        },
        index
      )
    ),
    children
  ] });
};
var useTooltip = () => (0, import_react4.useContext)(TooltipContext);

// contexts/modal/index.tsx
var import_react5 = require("react");
var import_navigation2 = require("next/navigation");

// contexts/modal/styles.tsx
var import_styled_components5 = __toESM(require("styled-components"));
var Container = import_styled_components5.default.div`
  
`;

// contexts/modal/index.tsx
var import_lodash5 = __toESM(require("lodash"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var ModalContext = (0, import_react5.createContext)({});
var memory = [];
var ModalProviderContainer = ({ children }) => {
  const pathname = (0, import_navigation2.usePathname)();
  const [modals, setModals] = (0, import_react5.useState)([]);
  (0, import_react5.useEffect)(() => {
    setModals(import_lodash5.default.filter(memory, (modal) => modal.type === "fixed"));
  }, [pathname]);
  const add = (modal) => {
    if (import_lodash5.default.some(memory, (data) => data.name === modal.name)) return;
    memory.push(modal);
    setModals(memory);
  };
  const remove = (modalName) => {
    const index = import_lodash5.default.findIndex(memory, (data) => data.name === modalName);
    memory.slice(index, 1);
    setModals(memory);
  };
  const setProps = (modalName, props) => {
    const index = import_lodash5.default.findIndex(modals, (modal) => modal.name === modalName);
    const content = import_lodash5.default.find(modals, (modal) => modal.name === modalName);
    if (!content) return;
    let settedModals = [...modals];
    settedModals.splice(index, 1, { ...content, props: { ...content.props, ...props } });
    setModals(settedModals);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    ModalContext.Provider,
    {
      value: {
        value: modals,
        add,
        remove,
        setProps
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Container, { children: import_lodash5.default.map(modals, (modal, index) => {
          const ModalComponent = modal.component;
          return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ModalComponent, { ...modal.props }, index);
        }) }),
        children
      ]
    }
  );
};
var useModal = () => (0, import_react5.useContext)(ModalContext);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IconProvider,
  ModalProvider,
  ThemeProvider,
  TooltipProvider,
  useIcon,
  useModal,
  useTheme,
  useTooltip
});
