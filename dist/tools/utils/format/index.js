import _ from "lodash";
const Format = {
    stringLimit(value, limit) {
        if (!value)
            return "";
        if (value.length <= (limit))
            return value;
        if (!_.isString(value))
            return "";
        return value.substring(0, limit) + "...";
    },
    address(data) {
        if (!data)
            return "";
        return `${data.city} - ${data.state} / ${data.address}`;
    },
    match(value) {
        if (!value)
            return "";
        if (Number(value.replace(/\D/g, "")))
            return String(value);
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
    },
};
export default Format;
