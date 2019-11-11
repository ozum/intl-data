/* eslint-disable import/no-unresolved, global-require, @typescript-eslint/no-var-requires , import/no-extraneous-dependencies */
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sourceMaps from "rollup-plugin-sourcemaps";
import camelCase from "lodash.camelcase";
import typescriptPlugin from "rollup-plugin-typescript2";
import json from "rollup-plugin-json";
import { terser } from "rollup-plugin-terser";
import { parse } from "path";
import bundleSize from "rollup-plugin-bundle-size";
import typescript from "typescript";

const pkg = require("./package.json");

const libraryName = parse(pkg.main).name;

export default {
  input: `src/${libraryName}.ts`,
  output: [
    { file: pkg.main, name: camelCase(libraryName), format: "cjs", sourcemap: true },
    { file: pkg.main.replace(".js", ".min.js"), name: camelCase(libraryName), format: "cjs", sourcemap: true },
    { file: pkg.module, format: "esm", sourcemap: true },
    { file: pkg.module.replace(".mjs", ".min.mjs"), format: "esm", sourcemap: true },
    { file: pkg["umd:main"], name: camelCase(libraryName), format: "umd", sourcemap: true },
    { file: pkg["umd:main"].replace(".js", ".min.js"), name: camelCase(libraryName), format: "umd", sourcemap: true },
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [...Object.keys(pkg.dependencies || {})],
  watch: {
    include: "src/**",
  },
  plugins: [
    bundleSize(),
    terser({
      include: [/^.+\.min\.m?js$/],
      exclude: [],
    }),
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescriptPlugin({ useTsconfigDeclarationDir: true, typescript }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),

    // Resolve source maps to the original source
    sourceMaps(),
  ],
};
