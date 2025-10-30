"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const brands_1 = __importDefault(require("./brands"));
const regular_1 = __importDefault(require("./regular"));
const solid_1 = __importDefault(require("./solid"));
exports.default = {
    brands: brands_1.default,
    regular: regular_1.default,
    solid: solid_1.default
};
