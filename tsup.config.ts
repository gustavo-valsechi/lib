import { defineConfig } from "tsup"

export default defineConfig({
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
    esbuildOptions(opt) {
        opt.banner = { js: '"use client";' }
        opt.external = ["react", "react-dom", "styled-components", "next"]
    }
})
