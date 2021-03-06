const presets = [
    ["@babel/preset-env",
        {
            useBuiltIns: "entry",
            corejs: "3.6.5"
        }
    ]
];
const plugins = [
    "@babel/plugin-transform-parameters",
    "@babel/plugin-transform-block-scoped-functions",
    "@babel/plugin-transform-arrow-functions"
];

module.exports = { presets, plugins };