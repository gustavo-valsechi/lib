"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCardContent = exports.validateLuhn = void 0;
const credit_card_type_1 = __importDefault(require("credit-card-type"));
const assets_1 = __importDefault(require("../assets"));
const luhn_1 = __importDefault(require("luhn"));
const lodash_1 = __importDefault(require("lodash"));
exports.validateLuhn = luhn_1.default.validate;
const getCardContent = (cardNumber) => {
    const content = { flag: "", logo: "" };
    if (!cardNumber)
        return content;
    const potentialCardContents = (0, credit_card_type_1.default)(cardNumber);
    if (potentialCardContents.length === 1) {
        const cardContent = potentialCardContents.shift();
        const flag = cardContent === null || cardContent === void 0 ? void 0 : cardContent.type;
        content.flag = flag || "";
        content.logo = assets_1.default[lodash_1.default.upperFirst(lodash_1.default.camelCase(flag))] || "";
        return content;
    }
    return content;
};
exports.getCardContent = getCardContent;
