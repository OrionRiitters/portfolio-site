module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
        sourceType: "module",
        babelOptions: {
            configFile: "./.babelrc.js"
        }
    }
};