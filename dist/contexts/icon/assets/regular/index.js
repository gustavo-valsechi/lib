"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const req = require.context("./", false, /\.svg$/);
const regular = {};
req.keys().forEach((key) => {
    const name = key.replace("./", "").replace(".svg", "");
    regular[name] = req(key).default;
});
exports.default = regular;
