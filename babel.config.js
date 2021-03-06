const presets = [
    "@babel/preset-env",
    {
        "useBuiltIns": "entry"//imports only the specific modules required of core-js
    }];
const plugins = [
    "@babel/plugin-transform-parameters",
    "@babel/plugin-transform-block-scoped-functions",
    "@babel/plugin-transform-arrow-functions"
];

module.exports = { presets, plugins };