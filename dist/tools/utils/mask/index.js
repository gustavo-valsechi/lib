import _ from "lodash";
const Mask = {
    docNumber: (value) => {
        if (!value)
            return "";
        value = value.replace(/\D/g, "");
        if (value.length <= 11) {
            return value
                .replace(/\D/g, "")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d{1,2})/, "$1-$2")
                .replace(/(-\d{2})\d+?$/, "$1");
        }
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})/, "$1/$2")
            .replace(/(\d{4})(\d{1,2})/, "$1-$2")
            .replace(/(-\d{2})\d+?$/, "$1");
    },
    phone: (value) => {
        if (!value)
            return "";
        if (value.length === 14 || value.length === 10) {
            return value
                .replace(/\D/g, "")
                .replace(/(\d{2})(\d)/, "($1) $2")
                .replace(/(\d{4})(\d)/, "$1-$2")
                .replace(/(-\d{4})(\d+?$)/, "$1");
        }
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .replace(/(-\d{4})\d+?$/, "$1");
    },
    kilo: (value) => {
        if (!value)
            return "";
        value = value.replace(/\D\./g, "");
        if (_.includes(value, ".")) {
            const [left, right] = _.split(value, ".");
            value = `${_.replace(left, /\D/g, "").substring(0, 3)}.${_.replace(right, /\D/g, "").substring(0, 2)}`;
        }
        return value;
    },
    money(valor, nosign, integer) {
        valor = valor + "";
        valor = parseInt(valor.replace(/[\D]+/g, ""));
        if (!nosign)
            valor = "R$ " + valor;
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
        }
        else {
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
        if (valor === "R$ NaN")
            return "";
        if (valor === "R$ 0,00")
            return "";
        return valor.substring(0, 20);
    },
    number: (value) => {
        if (!value)
            return "";
        return value.replace(/\D/g, "");
    },
    loop: (value = "", options) => {
        const { sequencyNumber = 1, maxSequency = 1, placeholder = "", separator = " ", regex = `[^0-9${separator}]` } = options || {};
        const sequency = _.repeat(placeholder, sequencyNumber);
        const mask = _.trim(_.repeat(sequency + separator, maxSequency), separator);
        const length = sequencyNumber * maxSequency;
        const maxLength = separator ? length + (maxSequency - 1) : length;
        const customRegex = new RegExp(regex, "g");
        const sequencyRegex = new RegExp(`(.{${sequencyNumber}})`, "g");
        const separatorRegex = new RegExp(separator, "g");
        value = value.replace(customRegex, "");
        value = value.replace(separatorRegex, "");
        value = value.replace(sequencyRegex, "$1" + separator);
        const placeholderMask = placeholder ? mask.substring(value.length, maxLength) : "";
        return _.trim((value + placeholderMask)
            .substring(0, maxLength), separator);
    }
};
export default Mask;
