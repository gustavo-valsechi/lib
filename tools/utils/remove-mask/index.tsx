const RemoveMask = {
    phone: (value: any) => {
        if (!value) return ""

        return value
            .replace("(", "")
            .replace(")", "")
            .replace(" ", "")
            .replace("-", "")
    },

    docNumber: (value: any) => {
        if (!value) return ""

        return value
            .replace(/\./g, "")
            .replace("/", "")
            .replace("-", "")
    },

    percent: (value: any) => {
        if (!value) return ""

        return value.replace(",", ".").replace("%", "")
    },

    money: (value: any) => {
        if (!value) return ""

        return value.replace("R$", "").replace(/\./g, "").replace(",", ".")
    },

    number: (value: any) => {
        if (!value) return ""

        return value.replace(/\D/g, "")
    }
}

export default RemoveMask