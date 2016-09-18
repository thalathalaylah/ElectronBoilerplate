var path = require('path');

module.exports = {
    entry: {
        main: "./src/main/main.ts",
        renderer: "./src/renderer/rendererMain.tsx"
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].bundle.js"
    },
    target: "electron",
    node: {
        __dirname: false
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader"}
        ]
    }
};
