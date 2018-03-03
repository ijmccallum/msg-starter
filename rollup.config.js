import babel from "rollup-plugin-babel";
import uglify from "rollup-plugin-uglify";

export default {
    input: "src/js/main.js",
    output: {
        file: "docs/main.js",
        format: "iife"
    },
    plugins: [
        babel({
            exclude: "node_modules/**",
            babelrc: false,
            presets: [["env", { modules: false }]],
            plugins: ["external-helpers"]
        }),
        process.env.NODE_ENV === "production" && uglify()
    ]
};
