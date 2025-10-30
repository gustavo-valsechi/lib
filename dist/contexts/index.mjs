"use client";
"use client";
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// contexts/icon/index.tsx
import { createContext as createContext2, useContext as useContext2, useEffect as useEffect2, useState as useState3 } from "react";

// contexts/theme/index.tsx
import { createContext, useContext, useEffect, useState as useState2 } from "react";
import { ThemeProvider } from "styled-components";

// contexts/theme/styles.tsx
import styled from "styled-components";
var Switcher = styled.div`
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
import { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { Fragment, jsx } from "react/jsx-runtime";

// tools/utils/moment/index.tsx
import moment from "moment-timezone";
moment.tz(process.env.NEXT_PUBLIC_TIMEZONE || "");
var Moment = (...args) => {
  return moment(...args);
};
var moment_default = Moment;

// tools/utils/format/index.tsx
import _ from "lodash";
var Format = {
  stringLimit(value, limit) {
    if (!value) return "";
    if (value.length <= limit) return value;
    if (!_.isString(value)) return "";
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
      return _.map(value, (data) => data.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toUpperCase());
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
import _2 from "lodash";
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
    if (_2.includes(value, ".")) {
      const [left, right] = _2.split(value, ".");
      value = `${_2.replace(left, /\D/g, "").substring(0, 3)}.${_2.replace(right, /\D/g, "").substring(0, 2)}`;
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
    const sequency = _2.repeat(placeholder, sequencyNumber);
    const mask = _2.trim(_2.repeat(sequency + separator, maxSequency), separator);
    const length = sequencyNumber * maxSequency;
    const maxLength = separator ? length + (maxSequency - 1) : length;
    const customRegex = new RegExp(regex, "g");
    const sequencyRegex = new RegExp(`(.{${sequencyNumber}})`, "g");
    const separatorRegex = new RegExp(separator, "g");
    value = value.replace(customRegex, "");
    value = value.replace(separatorRegex, "");
    value = value.replace(sequencyRegex, "$1" + separator);
    const placeholderMask = placeholder ? mask.substring(value.length, maxLength) : "";
    return _2.trim(
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
import { cookies } from "next/headers";
async function setStorage(key = "", value = "") {
  cookies().set(key, value);
}

// contexts/theme/index.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var ThemeContext = createContext({});
var ThemeProviderContainer = (props) => {
  const [theme, setTheme] = useState2("light");
  const [defaultTheme] = useState2("light");
  useEffect(() => {
    if (!theme) return;
    (async () => await setStorage(process.env.NEXT_PUBLIC_STORAGE_THEME, theme))();
  }, [theme]);
  const SwitcherComponent = () => {
    return /* @__PURE__ */ jsxs(
      Switcher,
      {
        onClick: () => setTheme(theme === "light" ? "dark" : "light"),
        "data-theme": theme || defaultTheme,
        children: [
          /* @__PURE__ */ jsx2("i", { "aria-hidden": true, className: "fa-solid fa-moon" }),
          /* @__PURE__ */ jsx2("div", { className: "switcher", children: /* @__PURE__ */ jsx2("div", {}) }),
          /* @__PURE__ */ jsx2("i", { "aria-hidden": true, className: "fa-solid fa-sun" })
        ]
      }
    );
  };
  return /* @__PURE__ */ jsx2(
    ThemeContext.Provider,
    {
      value: {
        theme: props.theme || defaultTheme,
        setTheme,
        content: Themes[props.theme || defaultTheme],
        Switcher: SwitcherComponent
      },
      children: /* @__PURE__ */ jsx2(ThemeProvider, { theme: Themes[props.theme || defaultTheme], children: props.children })
    }
  );
};
var useTheme = () => useContext(ThemeContext);

// contexts/icon/index.tsx
import _3 from "lodash";

// contexts/icon/assets/brands/index.tsx
var req = __require.context("./", false, /\.svg$/);
var brands = {};
req.keys().forEach((key) => {
  const name = key.replace("./", "").replace(".svg", "");
  brands[name] = req(key).default;
});
var brands_default = brands;

// contexts/icon/assets/regular/index.tsx
var req2 = __require.context("./", false, /\.svg$/);
var regular = {};
req2.keys().forEach((key) => {
  const name = key.replace("./", "").replace(".svg", "");
  regular[name] = req2(key).default;
});
var regular_default = regular;

// contexts/icon/assets/solid/index.tsx
var req3 = __require.context("./", false, /\.svg$/);
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
import { jsx as jsx3 } from "react/jsx-runtime";
var IconContext = createContext2({});
var IconProviderContainer = ({ children }) => {
  const { content } = useTheme();
  const [isClient, setIsClient] = useState3(false);
  const [matches, setMatches] = useState3(0);
  useEffect2(() => {
    setIsClient(true);
  }, []);
  useEffect2(() => {
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
  useEffect2(() => {
    if (!isClient) return;
    const processElement = (element) => {
      var _a, _b, _c, _d, _e;
      const name = element.getAttribute("class");
      if (!name) return;
      const icon = _3.split(_3.replace(name, /fa-/g, ""), " ");
      if (!icon.length) return;
      let svg = (_d = (_c = (_a = assets_default[icon[0]]) == null ? void 0 : _a[icon[1]]) != null ? _c : (_b = assets_default["solid"]) == null ? void 0 : _b[icon[0]]) != null ? _d : "";
      if (!svg) return;
      svg = svg.replace(/fill=".*?"/g, 'fill="currentColor"');
      const styles = window.getComputedStyle(element);
      const size = Number((_e = _3.split(styles.fontSize, "px")) == null ? void 0 : _e[0]) + 2;
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
  return /* @__PURE__ */ jsx3(IconContext.Provider, { value: {}, children });
};
var useIcon = () => useContext2(IconContext);

// contexts/tooltip/index.tsx
import { createContext as createContext3, useContext as useContext3, useEffect as useEffect3, useState as useState4 } from "react";

// contexts/tooltip/styles.tsx
import styled2 from "styled-components";
var Tooltip = styled2.div`
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
import _4 from "lodash";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var TooltipContext = createContext3({});
var TooltipProviderContainer = ({ children }) => {
  const [tooltips, setTooltips] = useState4([]);
  const getContent = (target) => {
    var _a;
    const rect = target.getBoundingClientRect();
    return {
      top: rect.top + window.scrollY - (target.offsetHeight + 8),
      left: rect.left + window.scrollX + target.offsetWidth / 2,
      content: ((_a = target.dataset) == null ? void 0 : _a.tooltip) || ""
    };
  };
  useEffect3(() => {
    const processElement = (element) => {
      element.addEventListener("mouseenter", (event) => {
        const target = event == null ? void 0 : event.target;
        if (!target) return;
        setTooltips(_4.concat(tooltips, [getContent(target)]));
      });
      element.addEventListener("mouseleave", (event) => {
        const target = event == null ? void 0 : event.target;
        if (!target) return;
        setTooltips(_4.filter(tooltips, (data) => JSON.stringify(data) === JSON.stringify(getContent(target))));
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
  return /* @__PURE__ */ jsxs2(TooltipContext.Provider, { value: {}, children: [
    _4.map(
      tooltips,
      (data, index) => /* @__PURE__ */ jsx4(
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
var useTooltip = () => useContext3(TooltipContext);

// contexts/modal/index.tsx
import { createContext as createContext4, useContext as useContext4, useEffect as useEffect4, useState as useState5 } from "react";
import { usePathname } from "next/navigation";

// contexts/modal/styles.tsx
import styled3 from "styled-components";
var Container = styled3.div`
  
`;

// contexts/modal/index.tsx
import _5 from "lodash";
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var ModalContext = createContext4({});
var memory = [];
var ModalProviderContainer = ({ children }) => {
  const pathname = usePathname();
  const [modals, setModals] = useState5([]);
  useEffect4(() => {
    setModals(_5.filter(memory, (modal) => modal.type === "fixed"));
  }, [pathname]);
  const add = (modal) => {
    if (_5.some(memory, (data) => data.name === modal.name)) return;
    memory.push(modal);
    setModals(memory);
  };
  const remove = (modalName) => {
    const index = _5.findIndex(memory, (data) => data.name === modalName);
    memory.slice(index, 1);
    setModals(memory);
  };
  const setProps = (modalName, props) => {
    const index = _5.findIndex(modals, (modal) => modal.name === modalName);
    const content = _5.find(modals, (modal) => modal.name === modalName);
    if (!content) return;
    let settedModals = [...modals];
    settedModals.splice(index, 1, { ...content, props: { ...content.props, ...props } });
    setModals(settedModals);
  };
  return /* @__PURE__ */ jsxs3(
    ModalContext.Provider,
    {
      value: {
        value: modals,
        add,
        remove,
        setProps
      },
      children: [
        /* @__PURE__ */ jsx5(Container, { children: _5.map(modals, (modal, index) => {
          const ModalComponent = modal.component;
          return /* @__PURE__ */ jsx5(ModalComponent, { ...modal.props }, index);
        }) }),
        children
      ]
    }
  );
};
var useModal = () => useContext4(ModalContext);
export {
  IconProviderContainer as IconProvider,
  ModalProviderContainer as ModalProvider,
  ThemeProviderContainer as ThemeProvider,
  TooltipProviderContainer as TooltipProvider,
  useIcon,
  useModal,
  useTheme,
  useTooltip
};
