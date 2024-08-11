import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { sveltePreprocess } from "svelte-preprocess";
import * as path from "node:path";

if (process.env.APP_ENV === "dev") {
}

// https://vitejs.dev/config/
export default defineConfig({
    root: path.resolve(__dirname),
    build: {
        outDir: "dist",
        emptyOutDir: true,
        minify: true,
        sourcemap: false,
        lib: {
            entry: "src/main.ts",
            formats: ["umd", "iife", "es"],
            name: "CowUiPs",
            fileName: "cow-ui-ps",
        },
        rollupOptions: {
            output: {
                assetFileNames: "cow-ui-ps.css",
            },
        },
    },

    plugins: [
        svelte({
            emitCss: true,
            preprocess: [
                sveltePreprocess({
                    typescript: true,
                }),
            ],
            compilerOptions: {
                customElement: true,
                runes: true,
            },
        }),
    ],
});
