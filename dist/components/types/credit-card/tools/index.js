import creditCardType from "credit-card-type";
import assets from "../assets";
import luhn from "luhn";
import _ from "lodash";
export const validateLuhn = luhn.validate;
export const getCardContent = (cardNumber) => {
    const content = { flag: "", logo: "" };
    if (!cardNumber)
        return content;
    const potentialCardContents = creditCardType(cardNumber);
    if (potentialCardContents.length === 1) {
        const cardContent = potentialCardContents.shift();
        const flag = cardContent === null || cardContent === void 0 ? void 0 : cardContent.type;
        content.flag = flag || "";
        content.logo = assets[_.upperFirst(_.camelCase(flag))] || "";
        return content;
    }
    return content;
};
