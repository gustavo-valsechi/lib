"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsup_1 = require("tsup");
exports.default = (0, tsup_1.defineConfig)({
    entry: {
        "index": "index.tsx",
        "interfaces/index": "interfaces/index.tsx",
        "components/index": "components/index.tsx",
        "contexts/index": "contexts/index.tsx",
    },
    outDir: "dist",
    format: ["esm", "cjs"],
    dts: true,
    clean: false,
    splitting: false,
    minify: true,
    esbuildOptions(opt) {
        opt.banner = { js: '"use client";' };
        opt.external = ["react", "react-dom", "styled-components", "next"];
    }
});
