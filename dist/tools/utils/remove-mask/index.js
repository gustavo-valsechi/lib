const RemoveMask = {
    phone: (value) => {
        if (!value)
            return "";
        return value
            .replace("(", "")
            .replace(")", "")
            .replace(" ", "")
            .replace("-", "");
    },
    docNumber: (value) => {
        if (!value)
            return "";
        return value
            .replace(/\./g, "")
            .replace("/", "")
            .replace("-", "");
    },
    percent: (value) => {
        if (!value)
            return "";
        return value.replace(",", ".").replace("%", "");
    },
    money: (value) => {
        if (!value)
            return "";
        return value.replace("R$", "").replace(/\./g, "").replace(",", ".");
    },
    number: (value) => {
        if (!value)
            return "";
        return value.replace(/\D/g, "");
    }
};
export default RemoveMask;
