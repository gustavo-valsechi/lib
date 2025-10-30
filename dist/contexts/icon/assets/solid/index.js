"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const req = require.context("./", false, /\.svg$/);
const solid = {};
req.keys().forEach((key) => {
    const name = key.replace("./", "").replace(".svg", "");
    solid[name] = req(key).default;
});
exports.default = solid;
