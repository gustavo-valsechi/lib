"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const req = require.context("./", false, /\.svg$/);
const brands = {};
req.keys().forEach((key) => {
    const name = key.replace("./", "").replace(".svg", "");
    brands[name] = req(key).default;
});
exports.default = brands;
