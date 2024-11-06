import { defineConfig } from "tsup";
import { sassPlugin } from "esbuild-sass-plugin";

export default defineConfig((options) => ({
  entryPoints: ["src/Components/**/*.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  loader: {
    ".scss": "file", 
  },
  esbuildPlugins: [
    sassPlugin() 
  ],
  ...options,
}));
